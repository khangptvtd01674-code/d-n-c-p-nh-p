-- KỊCH BẢN TẠO CƠ SỞ DỮ LIỆU SQL - ĐỒ ÁN TỐT NGHIỆP PREMIUMJOB

-- 1. Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS premiumjob_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE premiumjob_db;

-- 2. Tạo bảng Companies (Công ty)
CREATE TABLE IF NOT EXISTS companies (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    description TEXT,
    location VARCHAR(100)
);

-- 3. Tạo bảng Users (Người dùng)
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(50) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(50) NOT NULL, -- candidate, recruiter, admin
    locked BOOLEAN DEFAULT FALSE,
    title VARCHAR(255),
    experience TEXT,
    skills TEXT,
    cv_name VARCHAR(255),
    cv_size VARCHAR(50),
    company_id VARCHAR(50),
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE SET NULL
);

-- 4. Tạo bảng Jobs (Bài đăng tuyển dụng)
CREATE TABLE IF NOT EXISTS jobs (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company_id VARCHAR(50) NOT NULL,
    salary VARCHAR(100),
    location VARCHAR(100),
    type VARCHAR(50), -- Full-time, Part-time, Remote, Internship
    deadline DATE,
    description TEXT,
    requirements TEXT,
    benefits TEXT,
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
    created_at DATE,
    FOREIGN KEY (company_id) REFERENCES companies(id) ON DELETE CASCADE
);

-- 5. Tạo bảng Applications (Đơn ứng tuyển)
CREATE TABLE IF NOT EXISTS applications (
    id VARCHAR(50) PRIMARY KEY,
    job_id VARCHAR(50) NOT NULL,
    candidate_email VARCHAR(255) NOT NULL,
    candidate_name VARCHAR(255) NOT NULL,
    candidate_phone VARCHAR(20),
    cv_name VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending', -- pending, approved, rejected
    applied_at DATE,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
);

-- 6. Tạo bảng Saved Jobs (Việc làm đã lưu)
CREATE TABLE IF NOT EXISTS saved_jobs (
    user_id VARCHAR(50) NOT NULL,
    job_id VARCHAR(50) NOT NULL,
    PRIMARY KEY (user_id, job_id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE
);

-- 7. Tạo bảng Feedbacks (Ý kiến phản hồi / Góp ý)
CREATE TABLE IF NOT EXISTS feedbacks (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    rating INT DEFAULT 5,
    message TEXT NOT NULL,
    created_at DATE
);

-- -------------------------------------------------------------
-- CHÈN DỮ LIỆU MẪU (SEED DATA TƯƠNG ĐỒNG VỚI HỆ THỐNG MOCK JS)
-- -------------------------------------------------------------

-- Chèn dữ liệu Companies
INSERT INTO companies (id, name, logo, description, location) VALUES
('c1', 'FPT Software', 'assets/fpt.png', 'Tập đoàn công nghệ hàng đầu Việt Nam cung cấp dịch vụ xuất khẩu phần mềm toàn cầu.', 'Đà Nẵng'),
('c2', 'VNG Corporation', 'assets/vng.png', 'Công ty công nghệ kỳ lân Việt Nam, dẫn đầu trong lĩnh vực game, nội dung số và Zalo.', 'TP. HCM'),
('c3', 'Viettel Group', 'assets/viettel.png', 'Tập đoàn viễn thông và công nghệ số lớn nhất Việt Nam, hoạt động đa quốc gia.', 'Hà Nội'),
('c4', 'KMS Technology', 'assets/kms.png', 'Nhà cung cấp dịch vụ phát triển phần mềm chất lượng cao tại Việt Nam và Mỹ.', 'Đà Nẵng'),
('c5', 'VinGroup IT', 'assets/vingroup.png', 'Đơn vị phụ trách phát triển các giải pháp công nghệ thông tin và AI của tập đoàn Vingroup.', 'Hà Nội');

-- Chèn dữ liệu Users
INSERT INTO users (id, email, password, name, phone, role, locked, title, experience, skills, cv_name, cv_size, company_id) VALUES
('u1', 'candidate@gmail.com', '123456', 'Phạm Trương Vĩ Khang', '0905111222', 'candidate', FALSE, 'Frontend Developer', '2 năm kinh nghiệm ReactJS/VueJS', 'HTML, CSS, JavaScript, ReactJS, Git', 'CV_PhamTruongViKhang.pdf', '1.2 MB', NULL),
('u2', 'recruiter@gmail.com', '123456', 'Nguyễn Hữu Gia Huy', '0905333444', 'recruiter', FALSE, NULL, NULL, NULL, NULL, NULL, 'c1'),
('u3', 'admin@gmail.com', '123456', 'Phan Ngọc Phong', '0905555666', 'admin', FALSE, NULL, NULL, NULL, NULL, NULL, NULL);

-- Chèn dữ liệu Jobs
INSERT INTO jobs (id, title, company_id, salary, location, type, deadline, description, requirements, benefits, status, created_at) VALUES
('j1', 'Senior Java Backend Engineer', 'c1', '1,500 - 2,500 USD', 'Đà Nẵng', 'Full-time', '2026-07-30', 'Chúng tôi đang tìm kiếm kỹ sư Backend Java trình độ Senior để phát triển các dự án tài chính lớn cho đối tác Nhật Bản và Mỹ.', 'Tối thiểu 4 năm kinh nghiệm làm việc với Java, Spring Boot, Hibernate. Thành thạo SQL Server, PostgreSQL. Có kinh nghiệm triển khai Cloud (AWS/Azure) là một lợi thế.', 'Lương thưởng cạnh tranh 13+ tháng lương. Gói bảo hiểm FPT Care cao cấp. Cơ hội đi Onsite Nhật Bản/Mỹ hằng năm. Môi trường làm việc quốc tế năng động.', 'approved', '2026-06-20'),
('j2', 'Frontend Developer (ReactJS)', 'c1', '800 - 1,500 USD', 'Đà Nẵng', 'Full-time', '2026-07-15', 'Thiết kế và phát triển giao diện Web responsive mượt mà cho các ứng dụng quản trị doanh nghiệp sử dụng thư viện ReactJS.', 'Tối thiểu 1.5 năm kinh nghiệm làm việc với ReactJS, Redux Toolkit. Thành thạo HTML5, CSS3, Tailwind CSS và JavaScript ES6. Hiểu biết về SEO và Performance Optimization.', 'Đào tạo liên tục chứng chỉ công nghệ. Hỗ trợ laptop làm việc. Được review lương 2 lần/năm. Thưởng dự án hấp dẫn.', 'approved', '2026-06-21'),
('j3', 'Mobile App Developer (Flutter/React Native)', 'c2', '1,000 - 2,000 USD', 'TP. HCM', 'Full-time', '2026-07-25', 'Tham gia xây dựng và nâng cấp hệ sinh thái ứng dụng di động thế hệ mới với hàng triệu người dùng hoạt động hàng ngày.', 'Có trên 2 năm kinh nghiệm phát triển ứng dụng di động đa nền tảng Flutter hoặc React Native. Có sản phẩm đã đẩy lên App Store/Play Store.', 'Lương tháng 13+ và thưởng KPI khủng. Buffet trưa miễn phí tại VNG Campus. Phòng gym, hồ bơi hiện đại miễn phí. Quà tặng dịp lễ tết.', 'approved', '2026-06-22'),
('j4', 'UI/UX Designer', 'c4', '1,200 - 1,800 USD', 'Đà Nẵng', 'Full-time', '2026-07-20', 'Phối hợp với Product Manager và Tech Leads để lên ý tưởng, phác thảo wireframes, thiết kế UI/UX tinh tế, hiện đại cho các ứng dụng SaaS quốc tế.', 'Thành thạo Figma, Sketch, Adobe XD. Hiểu sâu sắc về thiết kế UI/UX chuẩn, tư duy lấy người dùng làm trung tâm (User-Centered Design). Có portfolio bắt mắt.', 'Môi trường nói tiếng Anh chuẩn mực toàn cầu. Giờ làm việc linh hoạt, Hybrid working (WFX). Thẻ ăn trưa định kỳ. Teambuilding hàng quý.', 'approved', '2026-06-23'),
('j5', 'AI Research Engineer', 'c5', 'Thỏa thuận', 'Hà Nội', 'Full-time', '2026-08-10', 'Nghiên cứu và triển khai các thuật toán Máy học (Machine Learning), Trí tuệ nhân tạo (AI), thị giác máy tính và xử lý ngôn ngữ tự nhiên ứng dụng cho Smart City và xe điện tự lái.', 'Tốt nghiệp Đại học trở lên chuyên ngành Khoa học Máy tính, Toán-Tin. Sử dụng thành thạo Python, PyTorch/TensorFlow. Có kiến thức toán học, đại số tuyến tính vững vàng.', 'Đãi ngộ đặc quyền trong hệ sinh thái VinGroup. Làm việc cùng các chuyên gia hàng đầu thế giới. Tài trợ chi phí tham gia các hội nghị khoa học quốc tế (NeurIPS, CVPR).', 'approved', '2026-06-18'),
('j6', 'Cloud DevOps Architect', 'c3', '2,000 - 3,500 USD', 'Hà Nội', 'Full-time', '2026-07-28', 'Thiết kế, xây dựng và vận hành hạ tầng Cloud an toàn, ổn định cao, đáp ứng hàng chục triệu giao dịch đồng thời.', 'Trên 3 năm kinh nghiệm DevOps. Thành thạo Docker, Kubernetes, Ansible, Terraform. Có kiến thức chuyên sâu AWS hoặc GCP. Chứng chỉ liên quan là lợi thế.', 'Thương hiệu Viettel uy tín. Thu nhập năm lên tới 20 tháng lương. Bảo hiểm y tế đặc biệt. Phụ cấp độc hại/trực ca cao.', 'approved', '2026-06-19'),
('j7', 'Intern Java Developer', 'c1', '3,000,000 - 5,000,000 VND', 'Đà Nẵng', 'Internship', '2026-07-10', 'Cơ hội thực tập và đào tạo thực tế trong các dự án Java Web thực tế. Được hướng dẫn trực tiếp bởi Mentor dày dạn kinh nghiệm.', 'Sinh viên năm cuối ngành CNTT hoặc vừa tốt nghiệp. Nắm chắc lý thuyết OOP, Core Java, SQL cơ bản. Có thái độ học hỏi tốt.', 'Phụ cấp thực tập hàng tháng. Hỗ trợ hoàn thành báo cáo tốt nghiệp. Được ký hợp đồng chính thức ngay sau khi kết thúc thực tập xuất sắc.', 'approved', '2026-06-22'),
('j8', 'QA/QC Engineer', 'c4', '700 - 1,300 USD', 'TP. HCM', 'Full-time', '2026-07-18', 'Lập kế hoạch kiểm thử, thiết kế test cases, thực hiện kiểm thử thủ công và tự động hóa cho các hệ thống phần mềm tài chính.', 'Tối thiểu 1 năm kinh nghiệm Manual Testing. Có hiểu biết về Automation Testing (Selenium, Cypress) là điểm cộng. Đọc hiểu tài liệu tiếng Anh tốt.', 'Tài trợ 100% học phí thi các chứng chỉ ISTQB. Lớp học tiếng Anh miễn phí trong giờ làm. Đồ ăn vặt, trà cafe ngập tràn.', 'approved', '2026-06-21');

-- Chèn dữ liệu Applications
INSERT INTO applications (id, job_id, candidate_email, candidate_name, candidate_phone, cv_name, status, applied_at) VALUES
('a1', 'j1', 'candidate@gmail.com', 'Phạm Trương Vĩ Khang', '0905111222', 'CV_PhamTruongViKhang.pdf', 'pending', '2026-06-22'),
('a2', 'j2', 'candidate@gmail.com', 'Phạm Trương Vĩ Khang', '0905111222', 'CV_PhamTruongViKhang.pdf', 'approved', '2026-06-23');

-- Chèn dữ liệu Saved Jobs
INSERT INTO saved_jobs (user_id, job_id) VALUES
('u1', 'j4');

-- Chèn dữ liệu Feedbacks
INSERT INTO feedbacks (id, name, email, rating, message, created_at) VALUES
('fb1', 'Nguyễn Văn A', 'anguyen@gmail.com', 5, 'Giao diện web rất đẹp và chuyên nghiệp, tone màu xanh lá đặc trưng TopCV rất hiện đại.', '2026-06-25');
