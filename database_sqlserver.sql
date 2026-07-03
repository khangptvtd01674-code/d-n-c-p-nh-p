-- KỊCH BẢN TẠO CƠ SỞ DỮ LIỆU SQL SERVER - ĐỒ ÁN TỐT NGHIỆP PREMIUMJOB

-- 1. Tạo cơ sở dữ liệu
USE master;
GO

IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'premiumjob_db')
BEGIN
    CREATE DATABASE premiumjob_db;
END
GO

USE premiumjob_db;
GO

-- 2. Tạo bảng Companies (Công ty)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[companies]') AND type in (N'U'))
BEGIN
    CREATE TABLE companies (
        id VARCHAR(50) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        logo VARCHAR(255),
        description NVARCHAR(MAX),
        location NVARCHAR(100)
    );
END
GO

-- 3. Tạo bảng Users (Người dùng)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[users]') AND type in (N'U'))
BEGIN
    CREATE TABLE users (
        id VARCHAR(50) PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        name NVARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        role VARCHAR(50) NOT NULL, -- candidate, recruiter, admin
        locked BIT DEFAULT 0,
        title NVARCHAR(255),
        experience NVARCHAR(MAX),
        skills NVARCHAR(MAX),
        cv_name NVARCHAR(255),
        cv_size VARCHAR(50),
        company_id VARCHAR(50),
        FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE SET NULL
    );
END
GO

-- 4. Tạo bảng Jobs (Bài đăng tuyển dụng)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[jobs]') AND type in (N'U'))
BEGIN
    CREATE TABLE jobs (
        id VARCHAR(50) PRIMARY KEY,
        title NVARCHAR(255) NOT NULL,
        company_id VARCHAR(50) NOT NULL,
        salary NVARCHAR(100),
        location NVARCHAR(100),
        type NVARCHAR(50), -- Full-time, Part-time, Remote, Internship
        deadline DATE,
        description NVARCHAR(MAX),
        requirements NVARCHAR(MAX),
        benefits NVARCHAR(MAX),
        status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
        created_at DATE,
        FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
    );
END
GO

-- 5. Tạo bảng Applications (Đơn ứng tuyển)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[applications]') AND type in (N'U'))
BEGIN
    CREATE TABLE applications (
        id VARCHAR(50) PRIMARY KEY,
        job_id VARCHAR(50) NOT NULL,
        candidate_email VARCHAR(255) NOT NULL,
        candidate_name NVARCHAR(255) NOT NULL,
        candidate_phone VARCHAR(20),
        cv_name NVARCHAR(255),
        status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
        applied_at DATE,
        FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
    );
END
GO

-- 6. Tạo bảng Saved Jobs (Việc làm đã lưu)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[saved_jobs]') AND type in (N'U'))
BEGIN
    CREATE TABLE saved_jobs (
        user_id VARCHAR(50) NOT NULL,
        job_id VARCHAR(50) NOT NULL,
        PRIMARY KEY (user_id, job_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE NO ACTION
    );
END
GO

-- 7. Tạo bảng Feedbacks (Ý kiến phản hồi / Góp ý)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[feedbacks]') AND type in (N'U'))
BEGIN
    CREATE TABLE feedbacks (
        id VARCHAR(50) PRIMARY KEY,
        name NVARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        rating INT DEFAULT 5,
        message NVARCHAR(MAX) NOT NULL,
        created_at DATE
    );
END
GO

-- 8. Tạo bảng Violations (Báo cáo vi phạm)
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[violations]') AND type in (N'U'))
BEGIN
    CREATE TABLE violations (
        id VARCHAR(50) PRIMARY KEY,
        reporter VARCHAR(255) NOT NULL,
        target_type VARCHAR(50) NOT NULL,
        target_name NVARCHAR(255) NOT NULL,
        reason NVARCHAR(MAX) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at DATE
    );
END
GO

-- -------------------------------------------------------------
-- CHÈN DỮ LIỆU MẪU (SEED DATA TƯƠNG ĐỒNG VỚI HỆ THỐNG MOCK JS)
-- -------------------------------------------------------------

-- Xóa dữ liệu cũ nếu đã tồn tại để tránh trùng lặp khi chạy lại
DELETE FROM violations;
DELETE FROM feedbacks;
DELETE FROM saved_jobs;
DELETE FROM applications;
DELETE FROM jobs;
DELETE FROM users;
DELETE FROM companies;
GO

-- Chèn dữ liệu Companies
INSERT INTO companies (id, name, logo, description, location) VALUES
('c1', N'FPT Software', 'assets/fpt.png', N'Tập đoàn công nghệ hàng đầu Việt Nam cung cấp dịch vụ xuất khẩu phần mềm toàn cầu.', N'Đà Nẵng'),
('c2', N'VNG Corporation', 'assets/vng.png', N'Công ty công nghệ kỳ lân Việt Nam, dẫn đầu trong lĩnh vực game, nội dung số và Zalo.', N'TP. HCM'),
('c3', N'Viettel Group', 'assets/viettel.png', N'Tập đoàn viễn thông và công nghệ số lớn nhất Việt Nam, hoạt động đa quốc gia.', N'Hà Nội'),
('c4', N'KMS Technology', 'assets/kms.png', N'Nhà cung cấp dịch vụ phát triển phần mềm chất lượng cao tại Việt Nam và Mỹ.', N'Đà Nẵng'),
('c5', N'VinGroup IT', 'assets/vingroup.png', N'Đơn vị phụ trách phát triển các giải pháp công nghệ thông tin và AI của tập đoàn Vingroup.', N'Hà Nội'),
('c_vcb', N'Vietcombank', 'assets/vietcombank.svg', N'Ngân hàng Ngoại thương Việt Nam - Ngân hàng thương mại cổ phần hàng đầu quốc gia.', N'Hà Nội'),
('c_pru', N'Prudential Insurance', 'assets/prudential.svg', N'Tập đoàn bảo hiểm nhân thọ Prudential Việt Nam cung cấp giải pháp tài chính và bảo vệ tối ưu.', N'TP. HCM'),
('c_cotec', N'Coteccons Construction', 'assets/coteccons.svg', N'Công ty cổ phần xây dựng Coteccons - Tổng thầu xây dựng hàng đầu Việt Nam.', N'TP. HCM'),
('c_vinfast', N'VinFast Manufacturing', 'assets/vinfast.svg', N'Nhà sản xuất ô tô và xe máy điện VinFast - Đột phá công nghệ sản xuất giao thông xanh.', N'Hải Phòng'),
('c_gg', N'Golden Gate Restaurant', 'assets/goldengate.svg', N'Tập đoàn ẩm thực Golden Gate sở hữu chuỗi nhà hàng Kichi Kichi, GoGi House, Sumo BBQ...', N'Hà Nội'),
('c_vinpearl', N'Vinpearl Hotels', 'assets/vinpearl.svg', N'Thương hiệu dịch vụ du lịch nghỉ dưỡng Vinpearl đẳng cấp 5 sao quốc tế.', N'Đà Nẵng'),
('c_vinmec', N'Vinmec Hospital', 'assets/vinmec.svg', N'Hệ thống y tế phi lợi nhuận Vinmec tiêu chuẩn quốc tế JCI chất lượng cao.', N'Hà Nội'),
('c_vinhomes', N'Vinhomes Real Estate', 'assets/vinhomes.svg', N'Thương hiệu bất động sản Vinhomes - Kiến tạo các khu đô thị văn minh hiện đại hàng đầu.', N'TP. HCM'),
('c_fptedu', N'FPT Education', 'assets/fptedu.svg', N'Tổ chức giáo dục FPT Education - Cung cấp chất lượng đào tạo và nghiên cứu chuẩn quốc tế.', N'Đà Nẵng');

-- Chèn dữ liệu Users
INSERT INTO users (id, email, password, name, phone, role, locked, title, experience, skills, cv_name, cv_size, company_id) VALUES
('u1', 'candidate@gmail.com', '123456', N'Phạm Trương Vĩ Khang', '0905111222', 'candidate', 0, N'Frontend Developer', N'2 năm kinh nghiệm ReactJS/VueJS', N'HTML, CSS, JavaScript, ReactJS, Git', N'CV_PhamTruongViKhang.pdf', '1.2 MB', NULL),
('u2', 'recruiter@gmail.com', '123456', N'Nguyễn Hữu Gia Huy', '0905333444', 'recruiter', 0, NULL, NULL, NULL, NULL, NULL, 'c1'),
('u3', 'admin@gmail.com', '123456', N'Phan Ngọc Phong', '0905555666', 'admin', 0, NULL, NULL, NULL, NULL, NULL, NULL);

-- Chèn dữ liệu Jobs
INSERT INTO jobs (id, title, company_id, salary, location, type, deadline, description, requirements, benefits, status, created_at) VALUES
('j1', N'Senior Java Backend Engineer', 'c1', N'1,500 - 2,500 USD', N'Đà Nẵng', N'Full-time', '2026-07-30', N'Chúng tôi đang tìm kiếm kỹ sư Backend Java trình độ Senior để phát triển các dự án tài chính lớn cho đối tác Nhật Bản và Mỹ.', N'Tối thiểu 4 năm kinh nghiệm làm việc với Java, Spring Boot, Hibernate. Thành thạo SQL Server, PostgreSQL. Có kinh nghiệm triển khai Cloud (AWS/Azure) là một lợi thế.', N'Lương thưởng cạnh tranh 13+ tháng lương. Gói bảo hiểm FPT Care cao cấp. Cơ hội đi Onsite Nhật Bản/Mỹ hằng năm. Môi trường làm việc quốc tế năng động.', 'approved', '2026-06-20'),
('j2', N'Frontend Developer (ReactJS)', 'c1', N'800 - 1,500 USD', N'Đà Nẵng', N'Full-time', '2026-07-15', N'Thiết kế và phát triển giao diện Web responsive mượt mà cho các ứng dụng quản trị doanh nghiệp sử dụng thư viện ReactJS.', N'Tối thiểu 1.5 năm kinh nghiệm làm việc với ReactJS, Redux Toolkit. Thành thạo HTML5, CSS3, Tailwind CSS và JavaScript ES6. Hiểu biết về SEO và Performance Optimization.', N'Đào tạo liên tục chứng chỉ công nghệ. Hỗ trợ laptop làm việc. Được review lương 2 lần/năm. Thưởng dự án hấp dẫn.', 'approved', '2026-06-21'),
('j3', N'Mobile App Developer (Flutter/React Native)', 'c2', N'1,000 - 2,000 USD', N'TP. HCM', N'Full-time', '2026-07-25', N'Tham gia xây dựng và nâng cấp hệ sinh thái ứng dụng di động thế hệ mới với hàng triệu người dùng hoạt động hàng ngày.', N'Có trên 2 năm kinh nghiệm phát triển ứng dụng di động đa nền tảng Flutter hoặc React Native. Có sản phẩm đã đẩy lên App Store/Play Store.', N'Lương tháng 13+ và thưởng KPI khủng. Buffet trưa miễn phí tại VNG Campus. Phòng gym, hồ bơi hiện đại miễn phí. Quà tặng dịp lễ tết.', 'approved', '2026-06-22'),
('j4', N'UI/UX Designer', 'c4', N'1,200 - 1,800 USD', N'Đà Nẵng', N'Full-time', '2026-07-20', N'Phối hợp với Product Manager và Tech Leads để lên ý tưởng, phác thảo wireframes, thiết kế UI/UX tinh tế, hiện đại cho các ứng dụng SaaS quốc tế.', N'Thành thạo Figma, Sketch, Adobe XD. Hiểu sâu sắc về thiết kế UI/UX chuẩn, tư duy lấy người dùng làm trung tâm (User-Centered Design). Có portfolio bắt mắt.', N'Môi trường nói tiếng Anh chuẩn mực toàn cầu. Giờ làm việc linh hoạt, Hybrid working (WFX). Thẻ ăn trưa định kỳ. Teambuilding hàng quý.', 'approved', '2026-06-23'),
('j5', N'AI Research Engineer', 'c5', N'Thỏa thuận', N'Hà Nội', N'Full-time', '2026-08-10', N'Nghiên cứu và triển khai các thuật toán Máy học (Machine Learning), Trí tuệ nhân tạo (AI), thị giác máy tính và xử lý ngôn ngữ tự nhiên ứng dụng cho Smart City và xe điện tự lái.', N'Tốt nghiệp Đại học trở lên chuyên ngành Khoa học Máy tính, Toán-Tin. Sử dụng thành thạo Python, PyTorch/TensorFlow. Có kiến thức toán học, đại số tuyến tính vững vàng.', N'Đãi ngộ đặc quyền trong hệ sinh thái VinGroup. Làm việc cùng các chuyên gia hàng đầu thế giới. Tài trợ chi phí tham gia các hội nghị khoa học quốc tế (NeurIPS, CVPR).', 'approved', '2026-06-18'),
('j6', N'Cloud DevOps Architect', 'c3', N'2,000 - 3,500 USD', N'Hà Nội', N'Full-time', '2026-07-28', N'Thiết kế, xây dựng và vận hành hạ tầng Cloud an toàn, ổn định cao, đáp ứng hàng chục triệu giao dịch đồng thời.', N'Trên 3 năm kinh nghiệm DevOps. Thành thạo Docker, Kubernetes, Ansible, Terraform. Có kiến thức chuyên sâu AWS hoặc GCP. Chứng chỉ liên quan là lợi thế.', N'Thương hiệu Viettel uy tín. Thu nhập năm lên tới 20 tháng lương. Bảo hiểm y tế đặc biệt. Phụ cấp độc hại/trực ca cao.', 'approved', '2026-06-19'),
('j7', N'Intern Java Developer', 'c1', N'3,000,000 - 5,000,000 VND', N'Đà Nẵng', N'Internship', '2026-07-10', N'Cơ hội thực tập và đào tạo thực tế trong các dự án Java Web thực tế. Được hướng dẫn trực tiếp bởi Mentor dày dạn kinh nghiệm.', N'Sinh viên năm cuối ngành CNTT hoặc vừa tốt nghiệp. Nắm chắc lý thuyết OOP, Core Java, SQL cơ bản. Có thái độ học hỏi tốt.', N'Phụ cấp thực tập hàng tháng. Hỗ trợ hoàn thành báo cáo tốt nghiệp. Được ký hợp đồng chính thức ngay sau khi kết thúc thực tập xuất sắc.', 'approved', '2026-06-22'),
('j8', N'QA/QC Engineer', 'c4', N'700 - 1,300 USD', N'TP. HCM', N'Full-time', '2026-07-18', N'Lập kế hoạch kiểm thử, thiết kế test cases, thực hiện kiểm thử thủ công và tự động hóa cho các hệ thống phần mềm tài chính.', N'Tối thiểu 1 năm kinh nghiệm Manual Testing. Có hiểu biết về Automation Testing (Selenium, Cypress) là điểm cộng. Đọc hiểu tài liệu tiếng Anh tốt.', N'Tài trợ 100% học phí thi các chứng chỉ ISTQB. Lớp học tiếng Anh miễn phí trong giờ làm. Đồ ăn vặt, trà cafe ngập tràn.', 'approved', '2026-06-21'),
('j_vcb', N'Chuyên viên Phát triển Ứng dụng Tài chính', 'c_vcb', N'1,200 - 2,200 USD', N'Hà Nội', N'Full-time', '2026-08-15', N'Tham gia xây dựng các hệ thống dịch vụ ngân hàng số VCB Digibank, tối ưu hóa giao dịch và bảo mật tài khoản cho hàng triệu khách hàng.', N'Có kinh nghiệm lập trình Java Web, Spring Boot hoặc Oracle DB. Hiểu biết về bảo mật tài chính ngân hàng.', N'Lương thưởng 20+ tháng lương/năm. Chế độ chăm sóc sức khỏe Vietcombank Care.', 'approved', '2026-06-25'),
('j_pru', N'Data Analyst (Bảo Hiểm)', 'c_pru', N'1,000 - 1,800 USD', N'TP. HCM', N'Full-time', '2026-08-20', N'Phân tích dữ liệu khách hàng, dự đoán tỷ lệ rủi ro và tối ưu hóa các gói bảo hiểm chăm sức khỏe.', N'Có trên 1 năm kinh nghiệm làm phân tích dữ liệu, thành thạo Python, SQL và các công cụ PowerBI / Tableau.', N'Đóng bảo hiểm cao cấp Prudential. Hỗ trợ học tập nâng cao chứng chỉ nghề nghiệp.', 'approved', '2026-06-25'),
('j_cotec', N'Kỹ sư Giám sát Xây dựng Dự án', 'c_cotec', N'1,000 - 1,500 USD', N'TP. HCM', N'Full-time', '2026-08-10', N'Giám sát kỹ thuật, an toàn lao động và chất lượng thi công tại các công trình cao tầng lớn.', N'Tốt nghiệp Đại học chuyên ngành Xây dựng Dân dụng & Công nghiệp. Đọc bản vẽ và quản lý nhà thầu phụ tốt.', N'Hỗ trợ ăn ca, phụ cấp công trường hấp dẫn. Thưởng cuối năm theo dự án.', 'approved', '2026-06-25'),
('j_vinfast', N'Kỹ sư Thiết kế Hệ thống IoT Xe điện', 'c_vinfast', N'1,500 - 2,500 USD', N'Hải Phòng', N'Full-time', '2026-08-30', N'Nghiên cứu tích hợp các giải pháp điều khiển thông minh và kết nối vạn vật (IoT) cho hệ sinh thái ô tô điện VinFast.', N'Thành thạo lập trình C/C++, Embedded System hoặc giao tiếp xe hơi (CAN, LIN).', N'Hưởng ưu đãi đặc quyền mua xe điện VinFast. Xe đưa đón từ Hà Nội đến Hải Phòng làm việc hàng ngày.', 'approved', '2026-06-25'),
('j_gg', N'Quản lý Chuỗi Nhà Hàng Kichi Kichi', 'c_gg', N'12 - 18 triệu VND', N'Hà Nội', N'Full-time', '2026-08-05', N'Điều hành hoạt động, quản lý đội ngũ nhân sự phục vụ và nâng cao chất lượng dịch vụ khách hàng tại nhà hàng.', N'Có 2 năm kinh nghiệm quản lý nhà hàng F&B. Kỹ năng giao tiếp và xử lý tình huống khéo léo.', N'Thưởng doanh số hàng tháng hấp dẫn. Cơ hội thăng tiến lên Quản lý Vùng.', 'approved', '2026-06-25'),
('j_vinpearl', N'Trưởng bộ phận Lễ tân Khách sạn', 'c_vinpearl', N'15 - 25 triệu VND', N'Đà Nẵng', N'Full-time', '2026-08-25', N'Quản lý quầy lễ tân đón tiếp khách du lịch quốc tế, giải quyết các phản hồi của khách du lịch.', N'Tiếng Anh giao tiếp lưu loát. Có ngoại hình ưa nhìn và kinh nghiệm làm việc tại khách sạn 4-5 sao.', N'Cung cấp phòng ở miễn phí tại khu nghỉ dưỡng Vinpearl. Phụ cấp trang phục.', 'approved', '2026-06-25'),
('j_vinmec', N'Bác sĩ Đa khoa/Chuyên khoa Y tế', 'c_vinmec', N'Thỏa thuận', N'Hà Nội', N'Full-time', '2026-09-01', N'Khám chữa bệnh và tư vấn sức khỏe cho bệnh nhân tại Bệnh viện đa khoa quốc tế Vinmec.', N'Có chứng chỉ hành nghề Y. Tốt nghiệp Bác sĩ nội trú hoặc có kinh nghiệm làm việc tại bệnh viện tuyến đầu.', N'Đãi ngộ hàng đầu ngành y. Môi trường trang thiết bị y tế hiện đại bậc nhất.', 'approved', '2026-06-25'),
('j_vinhomes', N'Chuyên viên Tư vấn Bất động sản Vinhomes', 'c_vinhomes', N'Thỏa thuận', N'TP. HCM', N'Full-time', '2026-08-15', N'Tư vấn, bán các căn hộ cao cấp và biệt thự sinh thái trong các dự án Vinhomes Grand Park, Vinhomes Ocean Park.', N'Có kỹ năng giao tiếp tốt, đam mê kinh doanh bất động sản. Có xe máy cá nhân.', N'Hoa hồng hoa hồng cực cao không giới hạn. Được đào tạo bài bản từ A-Z.', 'approved', '2026-06-25'),
('j_fptedu', N'Giảng viên Công nghệ Thông tin', 'c_fptedu', N'15 - 25 triệu VND', N'Đà Nẵng', N'Part-time', '2026-08-20', N'Giảng dạy các bộ môn Lập trình Web Java, Cấu trúc dữ liệu và giải thuật tại trường Đại học FPT Đà Nẵng.', N'Có bằng Thạc sĩ chuyên ngành CNTT trở lên. Nhiệt huyết và có kỹ năng sư phạm truyền cảm hứng tốt.', N'Phụ cấp giờ dạy cao. Tham gia teambuilding định kỳ FPT.', 'approved', '2026-06-25');

-- Chèn dữ liệu Applications
INSERT INTO applications (id, job_id, candidate_email, candidate_name, candidate_phone, cv_name, status, applied_at) VALUES
('a1', 'j1', 'candidate@gmail.com', N'Phạm Trương Vĩ Khang', '0905111222', 'CV_PhamTruongViKhang.pdf', 'pending', '2026-06-22'),
('a2', 'j2', 'candidate@gmail.com', N'Phạm Trương Vĩ Khang', '0905111222', 'CV_PhamTruongViKhang.pdf', 'approved', '2026-06-23');

-- Chèn dữ liệu Saved Jobs
INSERT INTO saved_jobs (user_id, job_id) VALUES
('u1', 'j4');

-- Chèn dữ liệu Feedbacks
INSERT INTO feedbacks (id, name, email, rating, message, created_at) VALUES
('fb1', N'Nguyễn Văn A', 'anguyen@gmail.com', 5, N'Giao diện web rất đẹp và chuyên nghiệp, tone màu xanh lá đặc trưng TopCV rất hiện đại.', '2026-06-25');

-- Chèn dữ liệu Violations
INSERT INTO violations (id, reporter, target_type, target_name, reason, status, created_at) VALUES
('v1', 'candidate@gmail.com', 'job', N'Senior Java Backend Engineer', N'Thông tin mức lương sai lệch so với lúc phỏng vấn.', 'pending', '2026-06-22');
GO
