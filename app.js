const DEFAULT_COMPANIES = [
  { id: 'c1', name: 'FPT Software', logo: 'assets/fpt.png', desc: 'Tập đoàn công nghệ hàng đầu Việt Nam cung cấp dịch vụ xuất khẩu phần mềm toàn cầu.', jobsCount: 3, location: 'Đà Nẵng' },
  { id: 'c2', name: 'VNG Corporation', logo: 'assets/vng.png', desc: 'Công ty công nghệ kỳ lân Việt Nam, dẫn đầu trong lĩnh vực game, nội dung số và Zalo.', jobsCount: 2, location: 'TP. HCM' },
  { id: 'c3', name: 'Viettel Group', logo: 'assets/viettel.png', desc: 'Tập đoàn viễn thông và công nghệ số lớn nhất Việt Nam, hoạt động đa quốc gia.', jobsCount: 2, location: 'Hà Nội' },
  { id: 'c4', name: 'KMS Technology', logo: 'assets/kms.png', desc: 'Nhà cung cấp dịch vụ phát triển phần mềm chất lượng cao tại Việt Nam và Mỹ.', jobsCount: 2, location: 'Đà Nẵng' },
  { id: 'c5', name: 'VinGroup IT', logo: 'assets/vingroup.png', desc: 'Đơn vị phụ trách phát triển các giải pháp công nghệ thông tin và AI của tập đoàn Vingroup.', jobsCount: 1, location: 'Hà Nội' },
  { id: 'c_vcb', name: 'Vietcombank', logo: 'assets/vietcombank.svg', desc: 'Ngân hàng Ngoại thương Việt Nam - Ngân hàng thương mại cổ phần hàng đầu quốc gia.', jobsCount: 1, location: 'Hà Nội' },
  { id: 'c_pru', name: 'Prudential Insurance', logo: 'assets/prudential.svg', desc: 'Tập đoàn bảo hiểm nhân thọ Prudential Việt Nam cung cấp giải pháp tài chính và bảo vệ tối ưu.', jobsCount: 1, location: 'TP. HCM' },
  { id: 'c_cotec', name: 'Coteccons Construction', logo: 'assets/coteccons.svg', desc: 'Công ty cổ phần xây dựng Coteccons - Tổng thầu xây dựng hàng đầu Việt Nam.', jobsCount: 1, location: 'TP. HCM' },
  { id: 'c_vinfast', name: 'VinFast Manufacturing', logo: 'assets/vinfast.svg', desc: 'Nhà sản xuất ô tô và xe máy điện VinFast - Đột phá công nghệ sản xuất giao thông xanh.', jobsCount: 1, location: 'Hải Phòng' },
  { id: 'c_gg', name: 'Golden Gate Restaurant', logo: 'assets/goldengate.svg', desc: 'Tập đoàn ẩm thực Golden Gate sở hữu chuỗi nhà hàng Kichi Kichi, GoGi House, Sumo BBQ...', jobsCount: 1, location: 'Hà Nội' },
  { id: 'c_vinpearl', name: 'Vinpearl Hotels', logo: 'assets/vinpearl.svg', desc: 'Thương hiệu khách sạn và dịch vụ du lịch nghỉ dưỡng Vinpearl đẳng cấp 5 sao quốc tế.', jobsCount: 1, location: 'Đà Nẵng' },
  { id: 'c_vinmec', name: 'Vinmec Hospital', logo: 'assets/vinmec.svg', desc: 'Hệ thống y tế phi lợi nhuận Vinmec tiêu chuẩn quốc tế JCI chất lượng cao.', jobsCount: 1, location: 'Hà Nội' },
  { id: 'c_vinhomes', name: 'Vinhomes Real Estate', logo: 'assets/vinhomes.svg', desc: 'Thương hiệu bất động sản Vinhomes - Kiến tạo các khu đô thị văn minh hiện đại hàng đầu.', jobsCount: 1, location: 'TP. HCM' },
  { id: 'c_fptedu', name: 'FPT Education', logo: 'assets/fptedu.svg', desc: 'Tổ chức giáo dục FPT Education - Cung cấp chất lượng đào tạo và nghiên cứu chuẩn quốc tế.', jobsCount: 1, location: 'Đà Nẵng' },
  { id: 'c_concentrix', name: 'Concentrix', logo: 'assets/concentrix.svg', desc: 'Tập đoàn Concentrix cung cấp dịch vụ hỗ trợ khách hàng và giải pháp trải nghiệm khách hàng toàn cầu.', jobsCount: 1, location: 'TP. HCM' }
];

const DEFAULT_USERS = [
  { id: 'u1', email: 'candidate@gmail.com', password: '123456', name: 'Phạm Trương Vĩ Khang', phone: '0905111222', role: 'candidate', locked: false, title: 'Frontend Developer', experience: '2 năm kinh nghiệm ReactJS/VueJS', skills: 'HTML, CSS, JavaScript, ReactJS, Git', cvName: 'CV_PhamTruongViKhang.pdf', cvSize: '1.2 MB' },
  { id: 'u2', email: 'recruiter@gmail.com', password: '123456', name: 'Nguyễn Hữu Gia Huy', phone: '0905333444', role: 'recruiter', locked: false, companyId: 'c1', companyName: 'FPT Software' },
  { id: 'u3', email: 'admin@gmail.com', password: '123456', name: 'Phan Ngọc Phong', phone: '0905555666', role: 'admin', locked: false }
];

const DEFAULT_JOBS = [
  {
    id: 'j1',
    title: 'Senior Java Backend Engineer',
    companyId: 'c1',
    companyName: 'FPT Software',
    salary: '1,500 - 2,500 USD',
    location: 'Đà Nẵng',
    type: 'Full-time',
    deadline: '2026-07-30',
    description: 'Chúng tôi đang tìm kiếm kỹ sư Backend Java trình độ Senior để phát triển các dự án tài chính lớn cho đối tác Nhật Bản và Mỹ.',
    requirements: 'Tối thiểu 4 năm kinh nghiệm làm việc với Java, Spring Boot, Hibernate. Thành thạo SQL Server, PostgreSQL. Có kinh nghiệm triển khai Cloud (AWS/Azure) là một lợi thế.',
    benefits: 'Lương thưởng cạnh tranh 13+ tháng lương. Gói bảo hiểm FPT Care cao cấp. Cơ hội đi Onsite Nhật Bản/Mỹ hằng năm. Môi trường làm việc quốc tế năng động.',
    status: 'approved',
    createdAt: '2026-06-20'
  },
  {
    id: 'j2',
    title: 'Frontend Developer (ReactJS)',
    companyId: 'c1',
    companyName: 'FPT Software',
    salary: '800 - 1,500 USD',
    location: 'Đà Nẵng',
    type: 'Full-time',
    deadline: '2026-07-15',
    description: 'Thiết kế và phát triển giao diện Web responsive mượt mà cho các ứng dụng quản trị doanh nghiệp sử dụng thư viện ReactJS.',
    requirements: 'Tối thiểu 1.5 năm kinh nghiệm làm việc với ReactJS, Redux Toolkit. Thành thạo HTML5, CSS3, Tailwind CSS và JavaScript ES6. Hiểu biết về SEO và Performance Optimization.',
    benefits: 'Đào tạo liên tục chứng chỉ công nghệ. Hỗ trợ laptop làm việc. Được review lương 2 lần/năm. Thưởng dự án hấp dẫn.',
    status: 'approved',
    createdAt: '2026-06-21'
  },
  {
    id: 'j3',
    title: 'Mobile App Developer (Flutter/React Native)',
    companyId: 'c2',
    companyName: 'VNG Corporation',
    salary: '1,000 - 2,000 USD',
    location: 'TP. HCM',
    type: 'Full-time',
    deadline: '2026-07-25',
    description: 'Tham gia xây dựng và nâng cấp hệ sinh thái ứng dụng di động thế hệ mới với hàng triệu người dùng hoạt động hàng ngày.',
    requirements: 'Có trên 2 năm kinh nghiệm phát triển ứng dụng di động đa nền tảng Flutter hoặc React Native. Có sản phẩm đã đẩy lên App Store/Play Store.',
    benefits: 'Lương tháng 13+ và thưởng KPI khủng. Buffet trưa miễn phí tại VNG Campus. Phòng gym, hồ bơi hiện đại miễn phí. Quà tặng dịp lễ tết.',
    status: 'approved',
    createdAt: '2026-06-22'
  },
  {
    id: 'j4',
    title: 'UI/UX Designer',
    companyId: 'c4',
    companyName: 'KMS Technology',
    salary: '1,200 - 1,800 USD',
    location: 'Đà Nẵng',
    type: 'Full-time',
    deadline: '2026-07-20',
    description: 'Phối hợp với Product Manager và Tech Leads để lên ý tưởng, phác thảo wireframes, thiết kế UI/UX tinh tế, hiện đại cho các ứng dụng SaaS quốc tế.',
    requirements: 'Thành thạo Figma, Sketch, Adobe XD. Hiểu sâu sắc về thiết kế UI/UX chuẩn, tư duy lấy người dùng làm trung tâm (User-Centered Design). Có portfolio bắt mắt.',
    benefits: 'Môi trường nói tiếng Anh chuẩn mực toàn cầu. Giờ làm việc linh hoạt, Hybrid working (WFX). Thẻ ăn trưa định kỳ. Teambuilding hàng quý.',
    status: 'approved',
    createdAt: '2026-06-23'
  },
  {
    id: 'j5',
    title: 'AI Research Engineer',
    companyId: 'c5',
    companyName: 'VinGroup IT',
    salary: 'Thỏa thuận',
    location: 'Hà Nội',
    type: 'Full-time',
    deadline: '2026-08-10',
    description: 'Nghiên cứu và triển khai các thuật toán Máy học (Machine Learning), Trí tuệ nhân tạo (AI), thị giác máy tính và xử lý ngôn ngữ tự nhiên ứng dụng cho Smart City và xe điện tự lái.',
    requirements: 'Tốt nghiệp Đại học trở lên chuyên ngành Khoa học Máy tính, Toán-Tin. Sử dụng thành thạo Python, PyTorch/TensorFlow. Có kiến thức toán học, đại số tuyến tính vững vàng.',
    benefits: 'Đãi ngộ đặc quyền trong hệ sinh thái VinGroup. Làm việc cùng các chuyên gia hàng đầu thế giới. Tài trợ chi phí tham gia các hội nghị khoa học quốc tế (NeurIPS, CVPR).',
    status: 'approved',
    createdAt: '2026-06-18'
  },
  {
    id: 'j6',
    title: 'Cloud DevOps Architect',
    companyId: 'c3',
    companyName: 'Viettel Group',
    salary: '2,000 - 3,500 USD',
    location: 'Hà Nội',
    type: 'Full-time',
    deadline: '2026-07-28',
    description: 'Thiết kế, xây dựng và vận hành hạ tầng Cloud an toàn, ổn định cao, đáp ứng hàng chục triệu giao dịch đồng thời.',
    requirements: 'Trên 3 năm kinh nghiệm DevOps. Thành thạo Docker, Kubernetes, Ansible, Terraform. Có kiến thức chuyên sâu AWS hoặc GCP. Chứng chỉ liên quan là lợi thế.',
    benefits: 'Thương hiệu Viettel uy tín. Thu nhập năm lên tới 20 tháng lương. Bảo hiểm y tế đặc biệt. Phụ cấp độc hại/trực ca cao.',
    status: 'approved',
    createdAt: '2026-06-19'
  },
  {
    id: 'j7',
    title: 'Intern Java Developer',
    companyId: 'c1',
    companyName: 'FPT Software',
    salary: '3,000,000 - 5,000,000 VND',
    location: 'Đà Nẵng',
    type: 'Internship',
    deadline: '2026-07-10',
    description: 'Cơ hội thực tập và đào tạo thực tế trong các dự án Java Web thực tế. Được hướng dẫn trực tiếp bởi Mentor dày dạn kinh nghiệm.',
    requirements: 'Sinh viên năm cuối ngành CNTT hoặc vừa tốt nghiệp. Nắm chắc lý thuyết OOP, Core Java, SQL cơ bản. Có thái độ học hỏi tốt.',
    benefits: 'Phụ cấp thực tập hàng tháng. Hỗ trợ hoàn thành báo cáo tốt nghiệp. Được ký hợp đồng chính thức ngay sau khi kết thúc thực tập xuất sắc.',
    status: 'approved',
    createdAt: '2026-06-22'
  },
  {
    id: 'j8',
    title: 'QA/QC Engineer',
    companyId: 'c4',
    companyName: 'KMS Technology',
    salary: '700 - 1,300 USD',
    location: 'TP. HCM',
    type: 'Full-time',
    deadline: '2026-07-18',
    description: 'Lập kế hoạch kiểm thử, thiết kế test cases, thực hiện kiểm thử thủ công và tự động hóa cho các hệ thống phần mềm tài chính.',
    requirements: 'Tối thiểu 1 năm kinh nghiệm Manual Testing. Có hiểu biết về Automation Testing (Selenium, Cypress) là điểm cộng. Đọc hiểu tài liệu tiếng Anh tốt.',
    benefits: 'Tài trợ 100% học phí thi các chứng chỉ ISTQB. Lớp học tiếng Anh miễn phí trong giờ làm. Đồ ăn vặt, trà cafe ngập tràn.',
    status: 'approved',
    createdAt: '2026-06-21'
  },
  {
    id: 'j_vcb',
    title: 'Chuyên viên Phát triển Ứng dụng Tài chính',
    companyId: 'c_vcb',
    companyName: 'Vietcombank',
    salary: '1,200 - 2,200 USD',
    location: 'Hà Nội',
    type: 'Full-time',
    deadline: '2026-08-15',
    description: 'Tham gia xây dựng các hệ thống dịch vụ ngân hàng số VCB Digibank, tối ưu hóa giao dịch và bảo mật tài khoản cho hàng triệu khách hàng.',
    requirements: 'Có kinh nghiệm lập trình Java Web, Spring Boot hoặc Oracle DB. Hiểu biết về bảo mật tài chính ngân hàng.',
    benefits: 'Lương thưởng 20+ tháng lương/năm. Chế độ chăm sóc sức khỏe Vietcombank Care.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_pru',
    title: 'Data Analyst (Bảo Hiểm)',
    companyId: 'c_pru',
    companyName: 'Prudential Insurance',
    salary: '1,000 - 1,800 USD',
    location: 'TP. HCM',
    type: 'Full-time',
    deadline: '2026-08-20',
    description: 'Phân tích dữ liệu khách hàng, dự đoán tỷ lệ rủi ro và tối ưu hóa các gói bảo hiểm chăm sóc sức khỏe.',
    requirements: 'Có trên 1 năm kinh nghiệm làm phân tích dữ liệu, thành thạo Python, SQL và các công cụ PowerBI / Tableau.',
    benefits: 'Đóng bảo hiểm cao cấp Prudential. Hỗ trợ học tập nâng cao chứng chỉ nghề nghiệp.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_cotec',
    title: 'Kỹ sư Giám sát Xây dựng Dự án',
    companyId: 'c_cotec',
    companyName: 'Coteccons Construction',
    salary: '1,000 - 1,500 USD',
    location: 'TP. HCM',
    type: 'Full-time',
    deadline: '2026-08-10',
    description: 'Giám sát kỹ thuật, an toàn lao động và chất lượng thi công tại các công trình cao tầng lớn.',
    requirements: 'Tốt nghiệp Đại học chuyên ngành Xây dựng Dân dụng & Công nghiệp. Đọc bản vẽ và quản lý nhà thầu phụ tốt.',
    benefits: 'Hỗ trợ ăn ca, phụ cấp công trường hấp dẫn. Thưởng cuối năm theo dự án.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_vinfast',
    title: 'Kỹ sư Thiết kế Hệ thống IoT Xe điện',
    companyId: 'c_vinfast',
    companyName: 'VinFast Manufacturing',
    salary: '1,500 - 2,500 USD',
    location: 'Hải Phòng',
    type: 'Full-time',
    deadline: '2026-08-30',
    description: 'Nghiên cứu tích hợp các giải pháp điều khiển thông minh và kết nối vạn vật (IoT) cho hệ sinh thái ô tô điện VinFast.',
    requirements: 'Thành thạo lập trình C/C++, Embedded System hoặc giao tiếp xe hơi (CAN, LIN).',
    benefits: 'Hưởng ưu đãi đặc quyền mua xe điện VinFast. Xe đưa đón từ Hà Nội đến Hải Phòng làm việc hàng ngày.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_gg',
    title: 'Quản lý Chuỗi Nhà Hàng Kichi Kichi',
    companyId: 'c_gg',
    companyName: 'Golden Gate Restaurant',
    salary: '12 - 18 triệu VND',
    location: 'Hà Nội',
    type: 'Full-time',
    deadline: '2026-08-05',
    description: 'Điều hành hoạt động, quản lý đội ngũ nhân sự phục vụ và nâng cao chất lượng dịch vụ khách hàng tại nhà hàng.',
    requirements: 'Có 2 năm kinh nghiệm quản lý nhà hàng F&B. Kỹ năng giao tiếp và xử lý tình huống khéo léo.',
    benefits: 'Thưởng doanh số hàng tháng hấp dẫn. Cơ hội thăng tiến lên Quản lý Vùng.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_vinpearl',
    title: 'Trưởng bộ phận Lễ tân Khách sạn',
    companyId: 'c_vinpearl',
    companyName: 'Vinpearl Hotels',
    salary: '15 - 25 triệu VND',
    location: 'Đà Nẵng',
    type: 'Full-time',
    deadline: '2026-08-25',
    description: 'Quản lý quầy lễ tân đón tiếp khách du lịch quốc tế, giải quyết các phản hồi của khách du lịch.',
    requirements: 'Tiếng Anh giao tiếp lưu loát. Có ngoại hình ưa nhìn và kinh nghiệm làm việc tại khách sạn 4-5 sao.',
    benefits: 'Cung cấp phòng ở miễn phí tại khu nghỉ dưỡng Vinpearl. Phụ cấp trang phục.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_vinmec',
    title: 'Bác sĩ Đa khoa/Chuyên khoa Y tế',
    companyId: 'c_vinmec',
    companyName: 'Vinmec Hospital',
    salary: 'Thỏa thuận',
    location: 'Hà Nội',
    type: 'Full-time',
    deadline: '2026-09-01',
    description: 'Khám chữa bệnh và tư vấn sức khỏe cho bệnh nhân tại Bệnh viện đa khoa quốc tế Vinmec.',
    requirements: 'Có chứng chỉ hành nghề Y. Tốt nghiệp Bác sĩ nội trú hoặc có kinh nghiệm làm việc tại bệnh viện tuyến đầu.',
    benefits: 'Đãi ngộ hàng đầu ngành y. Môi trường trang thiết bị y tế hiện đại bậc nhất.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_vinhomes',
    title: 'Chuyên viên Tư vấn Bất động sản Vinhomes',
    companyId: 'c_vinhomes',
    companyName: 'Vinhomes Real Estate',
    salary: 'Thỏa thuận',
    location: 'TP. HCM',
    type: 'Full-time',
    deadline: '2026-08-15',
    description: 'Tư vấn, bán các căn hộ cao cấp và biệt thự sinh thái trong các dự án Vinhomes Grand Park, Vinhomes Ocean Park.',
    requirements: 'Có kỹ năng giao tiếp tốt, đam mê kinh doanh bất động sản. Có xe máy cá nhân.',
    benefits: 'Hoa hồng hoa hồng cực cao không giới hạn. Được đào tạo bài bản từ A-Z.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_fptedu',
    title: 'Giảng viên Công nghệ Thông tin',
    companyId: 'c_fptedu',
    companyName: 'FPT Education',
    salary: '15 - 25 triệu VND',
    location: 'Đà Nẵng',
    type: 'Part-time',
    deadline: '2026-08-20',
    description: 'Giảng dạy các bộ môn Lập trình Web Java, Cấu trúc dữ liệu và giải thuật tại trường Đại học FPT Đà Nẵng.',
    requirements: 'Có bằng Thạc sĩ chuyên ngành CNTT trở lên. Nhiệt huyết và có kỹ năng sư phạm truyền cảm hứng tốt.',
    benefits: 'Phụ cấp giờ dạy cao. Tham gia teambuilding định kỳ FPT.',
    status: 'approved',
    createdAt: '2026-06-25'
  },
  {
    id: 'j_concentrix',
    title: 'Chuyên viên Hỗ trợ Khách hàng Toàn cầu',
    companyId: 'c_concentrix',
    companyName: 'Concentrix',
    salary: '12 - 20 triệu VND',
    location: 'TP. HCM',
    type: 'Full-time',
    deadline: '2026-08-28',
    description: 'Hỗ trợ và chăm sóc khách hàng quốc tế qua các kênh chat, email và điện thoại cho đối tác doanh nghiệp lớn tại Mỹ và châu Âu.',
    requirements: 'Tiếng Anh B2 trở lên. Kỹ năng giao tiếp và xử lý tình huống tốt. Ưu tiên có kinh nghiệm Customer Service.',
    benefits: 'Lương tháng 13. Bảo hiểm sức khỏe cao cấp Concentrix Care. Thưởng KPI hàng quý. Đào tạo bài bản từ A-Z.',
    status: 'approved',
    createdAt: '2026-06-26'
  }
];

const DEFAULT_APPLICATIONS = [
  {
    id: 'a1',
    jobId: 'j1',
    jobTitle: 'Senior Java Backend Engineer',
    companyName: 'FPT Software',
    candidateEmail: 'candidate@gmail.com',
    candidateName: 'Phạm Trương Vĩ Khang',
    candidatePhone: '0905111222',
    cvName: 'CV_PhamTruongViKhang.pdf',
    status: 'pending', // pending, approved, rejected
    appliedAt: '2026-06-22'
  },
  {
    id: 'a2',
    jobId: 'j2',
    jobTitle: 'Frontend Developer (ReactJS)',
    companyName: 'FPT Software',
    candidateEmail: 'candidate@gmail.com',
    candidateName: 'Phạm Trương Vĩ Khang',
    candidatePhone: '0905111222',
    cvName: 'CV_PhamTruongViKhang.pdf',
    status: 'approved',
    appliedAt: '2026-06-23'
  }
];

const DEFAULT_SAVED_JOBS = [
  { userId: 'u1', jobId: 'j4' }
];

const DEFAULT_VIOLATIONS = [
  { id: 'v1', reporter: 'candidate@gmail.com', targetType: 'job', targetName: 'Senior Java Backend Engineer', reason: 'Thông tin mức lương sai lệch so với lúc phỏng vấn.', status: 'pending', date: '2026-06-22' }
];

const API_BASE_URL = 'http://localhost:8080/api';
let isBackendConnected = false;
let currentCompanyCategoryFilter = '';

// Check backend connectivity
async function checkBackendConnection() {
  try {
    const res = await fetch(`${API_BASE_URL}/jobs/approved`, { method: 'GET', signal: AbortSignal.timeout(1000) });
    if (res.ok) {
      isBackendConnected = true;
      console.log("Connected to Java Spring Boot Backend database!");
    } else {
      isBackendConnected = false;
    }
  } catch (err) {
    isBackendConnected = false;
    console.log("Using LocalStorage Mock Database (Backend not running on port 8080)");
  }
}

// STATE INITIALIZATION
let state = {
  currentUser: null,
  users: [],
  companies: [],
  jobs: [],
  applications: [],
  savedJobs: [],
  violations: []
};

// Helper to check and render company logo as image or fallback text
function getCompanyLogoHtml(compName, compId) {
  const comp = state.companies.find(c => c.id === compId || c.name === compName);
  if (comp && comp.logo && comp.logo.includes('.')) {
    return `<img src="${comp.logo}" alt="${compName}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`;
  }
  const initials = compName ? compName.substring(0, 2).toUpperCase() : 'CO';
  return initials;
}

async function loadState() {
  await checkBackendConnection();
  if (isBackendConnected) {
    try {
      const jobsRes = await fetch(`${API_BASE_URL}/jobs`);
      state.jobs = await jobsRes.json();
      
      const compsRes = await fetch(`${API_BASE_URL}/companies`);
      state.companies = await compsRes.json();
      
      const appsRes = await fetch(`${API_BASE_URL}/applications`);
      state.applications = await appsRes.json();
      
      try {
        const usersRes = await fetch(`${API_BASE_URL}/users`);
        state.users = await usersRes.json();
      } catch (uErr) {
        console.error("Failed to load users from backend", uErr);
        state.users = [];
      }

      try {
        const violationsRes = await fetch(`${API_BASE_URL}/violations`);
        state.violations = await violationsRes.json();
      } catch (vErr) {
        console.error("Failed to load violations from backend", vErr);
        state.violations = [];
      }
      
      await seedDatabaseIfNeeded();
      
      const localUser = localStorage.getItem('premiumjob_current_user');
      if (localUser) {
        state.currentUser = JSON.parse(localUser);
        const savedRes = await fetch(`${API_BASE_URL}/saved-jobs/user/${state.currentUser.id}`);
        const savedList = await savedRes.json();
        state.savedJobs = savedList.map(s => ({ userId: s.userId, jobId: s.jobId }));
      }
      
      updateFloatingWidgets();
      return;
    } catch (err) {
      console.log("Failed loading state from API, falling back to LocalStorage", err);
      isBackendConnected = false;
    }
  }

  const localData = localStorage.getItem('recruitment_system_state');
  if (localData) {
    state = JSON.parse(localData);
    // Tự động khôi phục dữ liệu mẫu nếu dữ liệu trong LocalStorage bị rỗng
    if (!state.jobs || state.jobs.length === 0) {
      state.users = [...DEFAULT_USERS];
      state.companies = [...DEFAULT_COMPANIES];
      state.jobs = [...DEFAULT_JOBS];
      state.applications = [...DEFAULT_APPLICATIONS];
      state.savedJobs = [...DEFAULT_SAVED_JOBS];
      state.violations = [...DEFAULT_VIOLATIONS];
    } else {
      // Migration: Update old text logos to new image paths
      const logoMap = {
        'FPT': 'assets/fpt.png',
        'VNG': 'assets/vng.png',
        'VT': 'assets/viettel.png',
        'KMS': 'assets/kms.png',
        'VIN': 'assets/vingroup.png'
      };
      state.companies.forEach(c => {
        if (logoMap[c.logo]) {
          c.logo = logoMap[c.logo];
        }
      });
    }
    saveState();
  } else {
    // Populate default database if empty
    state.users = [...DEFAULT_USERS];
    state.companies = [...DEFAULT_COMPANIES];
    state.jobs = [...DEFAULT_JOBS];
    state.applications = [...DEFAULT_APPLICATIONS];
    state.savedJobs = [...DEFAULT_SAVED_JOBS];
    state.violations = [...DEFAULT_VIOLATIONS];
    state.currentUser = null;
    saveState();
  }
  updateFloatingWidgets();
}

function saveState() {
  localStorage.setItem('recruitment_system_state', JSON.stringify(state));
}

// TOAST NOTIFICATIONS UTILITY
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = '🔔';
  if (type === 'success') icon = '✅';
  if (type === 'error') icon = '❌';
  if (type === 'warning') icon = '⚠️';

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span class="toast-message">${message}</span>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  // Auto remove after 3.5 seconds
  setTimeout(() => {
    toast.style.animation = 'fadeOut 0.3s ease-out forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ACCESS GUARD POPUP
function checkAccess(actionName) {
  if (!state.currentUser) {
    // Show glassmorphic popup warning
    const warningModal = document.getElementById('guestWarningModal');
    if (warningModal) {
      warningModal.classList.add('active');
    } else {
      alert("Vui lòng đăng nhập hoặc đăng ký để sử dụng chức năng này");
    }
    return false;
  }
  return true;
}

function closeWarningModal() {
  const warningModal = document.getElementById('guestWarningModal');
  if (warningModal) warningModal.classList.remove('active');
}

// SPA ROUTING
const routes = {
  home: { containerId: 'homeView', requiresAuth: false },
  jobs: { containerId: 'jobsView', requiresAuth: false },
  companies: { containerId: 'companiesView', requiresAuth: false },
  about: { containerId: 'aboutView', requiresAuth: false },
  contact: { containerId: 'contactView', requiresAuth: false },
  login: { containerId: 'loginView', requiresAuth: false },
  register: { containerId: 'registerView', requiresAuth: false },
  'candidate-dashboard': { containerId: 'candidateDashboardView', requiresAuth: true, role: 'candidate' },
  'recruiter-dashboard': { containerId: 'recruiterDashboardView', requiresAuth: true, role: 'recruiter' },
  'admin-dashboard': { containerId: 'adminDashboardView', requiresAuth: true, role: 'admin' },
  'job-detail': { containerId: 'jobDetailView', requiresAuth: false }
};

function navigateTo(hash) {
  window.location.hash = hash;
}

function handleRouting() {
  let hash = window.location.hash.substring(1) || 'home';
  
  // Clean query params if any in hash
  const queryIndex = hash.indexOf('?');
  let cleanHash = queryIndex !== -1 ? hash.substring(0, queryIndex) : hash;
  
  // Find matching route
  const route = routes[cleanHash];
  if (!route) {
    navigateTo('home');
    return;
  }

  // Check auth protection
  if (route.requiresAuth) {
    if (!state.currentUser) {
      showToast('Bạn cần đăng nhập để truy cập trang này!', 'warning');
      navigateTo('login');
      return;
    }
    if (route.role && state.currentUser.role !== route.role) {
      showToast('Bạn không có quyền truy cập trang này!', 'error');
      navigateTo('home');
      return;
    }
  }

  // If logged in user tries to visit login/register, redirect to dashboard
  if ((cleanHash === 'login' || cleanHash === 'register') && state.currentUser) {
    navigateTo(`${state.currentUser.role}-dashboard`);
    return;
  }

  // Stop carousel timer if navigating away from jobs
  if (cleanHash !== 'jobs' && promoInterval) {
    clearInterval(promoInterval);
    promoInterval = null;
    promoCarouselInitialized = false;
  }

  // Hide all view containers
  Object.values(routes).forEach(r => {
    const el = document.getElementById(r.containerId);
    if (el) el.style.display = 'none';
  });

  // Show target container
  const activeContainer = document.getElementById(route.containerId);
  if (activeContainer) activeContainer.style.display = 'block';

  // Update navbar layout
  updateNavbarUI();

  // Render view components
  if (cleanHash === 'home') renderHome();
  else if (cleanHash === 'jobs') {
    renderJobsBoard();
    initPromoCarousel();
  }
  else if (cleanHash === 'companies') renderCompaniesView(currentCompanyCategoryFilter);
  else if (cleanHash === 'candidate-dashboard') renderCandidateDashboard();
  else if (cleanHash === 'recruiter-dashboard') renderRecruiterDashboard();
  else if (cleanHash === 'admin-dashboard') renderAdminDashboard();
  else if (cleanHash === 'job-detail') renderJobDetailView();

  // Update active status on navbar menu
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('onclick');
    if (href && href.includes(cleanHash)) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// NAVBAR RENDERING SYSTEM
function updateNavbarUI() {
  const publicNav = document.getElementById('publicNav');
  const userSection = document.getElementById('navbarUserSection');
  
  if (!publicNav) return;

  if (state.currentUser) {
    // User is logged in
    const avatarChar = state.currentUser.name.charAt(0).toUpperCase();
    
    // Check if dashboard navigation link exists, if not, add based on user role
    let dashboardLink = '';
    if (state.currentUser.role === 'candidate') {
      dashboardLink = `<a href="#candidate-dashboard" class="btn btn-outline">Dashboard Ứng viên</a>`;
    } else if (state.currentUser.role === 'recruiter') {
      dashboardLink = `<a href="#recruiter-dashboard" class="btn btn-outline">Dashboard Tuyển dụng</a>`;
    } else if (state.currentUser.role === 'admin') {
      dashboardLink = `<a href="#admin-dashboard" class="btn btn-outline">Dashboard Admin</a>`;
    }

    userSection.innerHTML = `
      ${dashboardLink}
      <div class="sidebar-avatar" style="cursor:pointer;" onclick="navigateTo('${state.currentUser.role}-dashboard')">${avatarChar}</div>
      <button onclick="logoutAction()" class="btn btn-secondary">Đăng xuất</button>
    `;
    
    // Hide standard login/register buttons
    document.getElementById('navGuestButtons').style.display = 'none';
    userSection.style.display = 'flex';
  } else {
    // Guest
    document.getElementById('navGuestButtons').style.display = 'flex';
    userSection.style.display = 'none';
  }
}

// AUTH ACTIONS
async function loginAction(e) {
  if (e) e.preventDefault();
  
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const remember = document.getElementById('loginRemember').checked;

  if (!email || !password) {
    showToast('Vui lòng điền đầy đủ Email và Mật khẩu!', 'error');
    return;
  }

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      if (res.ok) {
        const user = await res.json();
        state.currentUser = user;
        localStorage.setItem('premiumjob_current_user', JSON.stringify(user));
        
        const savedRes = await fetch(`${API_BASE_URL}/saved-jobs/user/${user.id}`);
        const savedList = await savedRes.json();
        state.savedJobs = savedList.map(s => ({ userId: s.userId, jobId: s.jobId }));

        saveState();
        updateFloatingWidgets();
        showToast(`Chào mừng quay trở lại, ${user.name}!`, 'success');
        
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginPassword').value = '';
        navigateTo(`${user.role}-dashboard`);
      } else {
        const errData = await res.json();
        showToast(errData.message || 'Tài khoản hoặc mật khẩu không chính xác!', 'error');
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
    }
    return;
  }

  // Authenticate
  const user = state.users.find(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (!user || user.password !== password) {
    showToast('Tài khoản hoặc mật khẩu không chính xác!', 'error');
    return;
  }

  if (user.locked) {
    showToast('Tài khoản này đã bị khóa do vi phạm quy tắc hệ thống!', 'error');
    return;
  }

  // Success
  state.currentUser = user;
  saveState();
  updateFloatingWidgets();
  showToast(`Chào mừng quay trở lại, ${user.name}!`, 'success');

  // Clear inputs
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';

  // Redirect to Dashboard
  navigateTo(`${user.role}-dashboard`);
}

async function registerAction(e) {
  if (e) e.preventDefault();

  const activeRoleBtn = document.querySelector('.role-btn.active');
  const role = activeRoleBtn ? activeRoleBtn.dataset.role : 'candidate';
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;
  const agreeTerms = document.getElementById('regTerms').checked;

  if (!name || !email || !phone || !password || !confirmPassword) {
    showToast('Vui lòng điền đầy đủ tất cả các trường!', 'error');
    return;
  }

  if (password !== confirmPassword) {
    showToast('Mật khẩu xác nhận không trùng khớp!', 'error');
    return;
  }

  if (!agreeTerms) {
    showToast('Bạn phải đồng ý với Điều khoản sử dụng!', 'warning');
    return;
  }

  if (isBackendConnected) {
    const newUser = {
      id: 'u_' + Date.now(),
      email,
      password,
      name,
      phone,
      role,
      locked: false
    };
    if (role === 'candidate') {
      newUser.title = 'Chưa cập nhật';
      newUser.experience = 'Chưa cập nhật';
      newUser.skills = 'Chưa cập nhật';
    } else {
      newUser.companyName = 'Công ty mới đăng ký';
      newUser.companyId = 'c_new';
    }
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      });
      if (res.ok) {
        showToast('Đăng ký tài khoản thành công! Vui lòng đăng nhập.', 'success');
        navigateTo('login');
        
        document.getElementById('regName').value = '';
        document.getElementById('regEmail').value = '';
        document.getElementById('regPhone').value = '';
        document.getElementById('regPassword').value = '';
        document.getElementById('regConfirmPassword').value = '';
        document.getElementById('regTerms').checked = false;
      } else {
        const errData = await res.json();
        showToast(errData.message || 'Lỗi đăng ký tài khoản!', 'error');
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
    }
    return;
  }

  // Check email conflict
  if (state.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    showToast('Email này đã được sử dụng trên hệ thống!', 'error');
    return;
  }

  // Create new user
  const newUser = {
    id: 'u_' + Date.now(),
    email,
    password,
    name,
    phone,
    role,
    locked: false
  };

  if (role === 'candidate') {
    newUser.title = 'Chưa cập nhật';
    newUser.experience = 'Chưa cập nhật';
    newUser.skills = 'Chưa cập nhật';
    newUser.cvName = '';
    newUser.cvSize = '';
  } else if (role === 'recruiter') {
    newUser.companyName = 'Công ty mới đăng ký';
    newUser.companyId = 'c_new';
    
    // Add a default company container in DB
    const newCompany = {
      id: 'c_new',
      name: 'Công ty của ' + name,
      logo: name.substring(0, 3).toUpperCase(),
      desc: 'Mô tả công ty mới thành lập trên hệ thống.',
      jobsCount: 0,
      location: 'Chưa cập nhật'
    };
    state.companies.push(newCompany);
  }

  state.users.push(newUser);
  saveState();
  updateFloatingWidgets();
  showToast('Đăng ký tài khoản thành công! Vui lòng đăng nhập.', 'success');

  // Reset fields
  document.getElementById('regName').value = '';
  document.getElementById('regEmail').value = '';
  document.getElementById('regPhone').value = '';
  document.getElementById('regPassword').value = '';
  document.getElementById('regConfirmPassword').value = '';
  document.getElementById('regTerms').checked = false;

  navigateTo('login');
}

function logoutAction() {
  state.currentUser = null;
  localStorage.removeItem('premiumjob_current_user');
  saveState();
  updateFloatingWidgets();
  showToast('Đăng xuất thành công!', 'success');
  navigateTo('home');
}

// SETUP DEMO LOGIN HELPER
function fillDemoCredentials(role) {
  const credentials = {
    candidate: { email: 'candidate@gmail.com', pass: '123456' },
    recruiter: { email: 'recruiter@gmail.com', pass: '123456' },
    admin: { email: 'admin@gmail.com', pass: '123456' }
  };
  
  const cred = credentials[role];
  if (cred) {
    document.getElementById('loginEmail').value = cred.email;
    document.getElementById('loginPassword').value = cred.pass;
    showToast(`Đã điền tài khoản mẫu ${role.toUpperCase()}`, 'info');
  }
}

// ----------------- HOME VIEW RENDERING -----------------
function renderHome() {
  // 1. Statistics Summary
  const approvedJobs = state.jobs.filter(j => j.status === 'approved');
  document.getElementById('statTotalJobs').textContent = approvedJobs.length;
  document.getElementById('statTotalCompanies').textContent = state.companies.length;
  document.getElementById('statTotalCandidates').textContent = state.users.filter(u => u.role === 'candidate').length;

  // Toggle statistics visibility based on login status
  const statsGrid = document.getElementById('homeStatsGrid');
  if (statsGrid) {
    if (state.currentUser) {
      statsGrid.style.display = 'grid';
    } else {
      statsGrid.style.display = 'none';
    }
  }

  // 2. Featured Jobs (Render 4 approved jobs)
  const featuredJobsList = document.getElementById('featuredJobsList');
  featuredJobsList.innerHTML = '';
  
  const jobsToRender = approvedJobs.slice(0, 4);
  
  if (jobsToRender.length === 0) {
    featuredJobsList.innerHTML = `<div class="db-panel" style="grid-column: span 2; text-align:center;">Không có công việc nào đang tuyển dụng.</div>`;
  } else {
    jobsToRender.forEach(job => {
      const isSaved = state.currentUser ? state.savedJobs.some(sj => sj.userId === state.currentUser.id && sj.jobId === job.id) : false;
      
      const card = document.createElement('div');
      card.className = 'job-card';
      card.innerHTML = `
        <div class="job-card-top">
          <div class="company-logo">${getCompanyLogoHtml(job.companyName, job.companyId)}</div>
          <div class="job-info">
            <h3 onclick="viewJobDetails('${job.id}')">${job.title}</h3>
            <div class="job-company">${job.companyName}</div>
            <div class="job-badges">
              <span class="badge badge-salary">💵 ${job.salary}</span>
              <span class="badge badge-location">📍 ${job.location}</span>
              <span class="badge badge-type">💼 ${job.type}</span>
            </div>
          </div>
        </div>
        <div class="job-card-bottom">
          <span class="job-deadline">⏳ Hạn nộp: ${formatDate(job.deadline)}</span>
          <div class="job-actions">
            <button class="bookmark-btn ${isSaved ? 'active' : ''}" onclick="toggleSaveJob(event, '${job.id}')" title="Lưu việc làm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            </button>
            <button class="btn btn-primary" onclick="viewJobDetails('${job.id}')">Xem chi tiết</button>
          </div>
        </div>
      `;
      featuredJobsList.appendChild(card);
    });
  }

  // 3. Featured Companies (Render 4 companies)
  const featuredCompaniesList = document.getElementById('featuredCompaniesList');
  featuredCompaniesList.innerHTML = '';
  
  state.companies.slice(0, 4).forEach(comp => {
    // Count jobs in system for this company
    const jobsCount = state.jobs.filter(j => j.companyId === comp.id && j.status === 'approved').length;
    
    const card = document.createElement('div');
    card.className = 'company-card';
    card.innerHTML = `
      <div class="company-logo">${getCompanyLogoHtml(comp.name, comp.id)}</div>
      <h3>${comp.name}</h3>
      <p>${comp.desc}</p>
      <span class="company-jobs-count">${jobsCount} vị trí đang tuyển</span>
    `;
    featuredCompaniesList.appendChild(card);
  });
}

// ----------------- JOBS BOARD RENDERING -----------------
function renderJobsBoard() {
  const searchInput = document.getElementById('jobsBoardKeyword').value.toLowerCase();
  const searchLocation = document.getElementById('jobsBoardLocation').value;
  const searchType = document.getElementById('jobsBoardType').value;
  
  const jobsList = document.getElementById('jobsBoardList');
  jobsList.innerHTML = '';

  const filteredJobs = state.jobs.filter(job => {
    if (job.status !== 'approved') return false;
    
    const matchesKeyword = job.title.toLowerCase().includes(searchInput) || 
                           job.companyName.toLowerCase().includes(searchInput) || 
                           job.description.toLowerCase().includes(searchInput);
    const matchesLocation = !searchLocation || job.location === searchLocation;
    const matchesType = !searchType || job.type === searchType;

    return matchesKeyword && matchesLocation && matchesType;
  });

  // Sort based on selected tab
  if (currentJobsSort === 'newest') {
    filteredJobs.sort((a, b) => {
      const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
      const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
      return dateB - dateA;
    });
  } else if (currentJobsSort === 'updated') {
    // Sort by ID desc or deadline desc as a proxy for update date
    filteredJobs.sort((a, b) => {
      const idA = parseInt((a.id || '').replace(/\D/g, '')) || 0;
      const idB = parseInt((b.id || '').replace(/\D/g, '')) || 0;
      return idB - idA;
    });
  } else if (currentJobsSort === 'high-salary') {
    filteredJobs.sort((a, b) => parseSalaryValue(b.salary) - parseSalaryValue(a.salary));
  }

  // Update active tab class in UI
  document.querySelectorAll('.filter-tab-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeTab = document.getElementById(`tab-sort-${currentJobsSort}`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Update count info
  const countInfo = document.getElementById('jobsCountInfo');
  if (countInfo) {
    const totalApproved = state.jobs.filter(j => j.status === 'approved').length;
    if (filteredJobs.length > 0) {
      countInfo.textContent = `Việc 1 - ${filteredJobs.length} / ${totalApproved}`;
    } else {
      countInfo.textContent = `Việc 0 - 0 / ${totalApproved}`;
    }
  }

  if (filteredJobs.length === 0) {
    jobsList.innerHTML = `
      <div class="db-panel" style="grid-column: span 2; text-align:center; padding: 48px;">
        <h3>🔍 Không tìm thấy công việc nào phù hợp</h3>
        <p style="color: var(--text-muted); margin-top: 8px;">Vui lòng thay đổi từ khóa hoặc bộ lọc tìm kiếm của bạn.</p>
      </div>
    `;
    return;
  }

  filteredJobs.forEach(job => {
    const isSaved = state.currentUser ? state.savedJobs.some(sj => sj.userId === state.currentUser.id && sj.jobId === job.id) : false;

    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <div class="job-card-top">
        <div class="company-logo">${getCompanyLogoHtml(job.companyName, job.companyId)}</div>
        <div class="job-info">
          <h3 onclick="viewJobDetails('${job.id}')">${job.title}</h3>
          <div class="job-company">${job.companyName}</div>
          <div class="job-badges">
            <span class="badge badge-salary">💵 ${job.salary}</span>
            <span class="badge badge-location">📍 ${job.location}</span>
            <span class="badge badge-type">💼 ${job.type}</span>
          </div>
        </div>
      </div>
      <div class="job-card-bottom">
        <span class="job-deadline">⏳ Hạn nộp: ${formatDate(job.deadline)}</span>
        <div class="job-actions">
          <button class="bookmark-btn ${isSaved ? 'active' : ''}" onclick="toggleSaveJob(event, '${job.id}')" title="Lưu việc làm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
          <button class="btn btn-primary" onclick="viewJobDetails('${job.id}')">Xem chi tiết</button>
        </div>
      </div>
    `;
    jobsList.appendChild(card);
  });
}

function handleSearch(e) {
  if (e) e.preventDefault();
  
  // Đồng bộ giá trị tìm kiếm từ Trang chủ sang trang Việc làm
  const keyword = document.getElementById('searchKeyword').value;
  const location = document.getElementById('searchLocation').value;
  const type = document.getElementById('searchType').value;
  
  document.getElementById('jobsBoardKeyword').value = keyword;
  document.getElementById('jobsBoardLocation').value = location;
  document.getElementById('jobsBoardType').value = type;
  
  navigateTo('jobs');
  renderJobsBoard();
}

// ----------------- COMPANIES VIEW RENDERING -----------------
function renderCompaniesView(categoryFilter = '') {
  const container = document.getElementById('companiesListContainer');
  container.innerHTML = '';

  let filteredCompanies = state.companies;
  if (categoryFilter) {
    const filterLower = categoryFilter.toLowerCase();
    if (filterLower !== 'tiêu biểu' && filterLower !== 'nổi bật') {
      filteredCompanies = state.companies.filter(comp => {
        const name = (comp.name || '').toLowerCase();
        const desc = (comp.desc || comp.description || '').toLowerCase();
        
        // Mapped robust filtering by company ID and keywords
        if (filterLower === 'công nghệ') {
          return comp.id === 'c1' || comp.id === 'c2' || comp.id === 'c3' || comp.id === 'c4' || comp.id === 'c5' || 
                 name.includes('fpt software') || name.includes('vng') || name.includes('viettel') || name.includes('kms') || name.includes('vingroup');
        }
        if (filterLower === 'ngân hàng') {
          return comp.id === 'c_vcb' || name.includes('vietcombank') || name.includes('bank') || name.includes('ngân hàng') || name.includes('ngan hang');
        }
        if (filterLower === 'bảo hiểm') {
          return comp.id === 'c_pru' || name.includes('prudential') || name.includes('insurance') || name.includes('bảo hiểm') || name.includes('bao hiem');
        }
        if (filterLower === 'xây dựng') {
          return comp.id === 'c_cotec' || name.includes('coteccons') || name.includes('xây dựng') || name.includes('xay dung') || name.includes('construction');
        }
        if (filterLower === 'sản xuất') {
          return comp.id === 'c_vinfast' || name.includes('vinfast') || name.includes('sản xuất') || name.includes('san xuat') || name.includes('manufacturing');
        }
        if (filterLower === 'nhà hàng') {
          return comp.id === 'c_gg' || name.includes('golden gate') || name.includes('nhà hàng') || name.includes('nha hang') || name.includes('restaurant');
        }
        if (filterLower === 'khách sạn') {
          return comp.id === 'c_vinpearl' || name.includes('vinpearl') || name.includes('khách sạn') || name.includes('khach san') || name.includes('hotel');
        }
        if (filterLower === 'y tế') {
          return comp.id === 'c_vinmec' || name.includes('vinmec') || name.includes('y tế') || name.includes('y te') || name.includes('hospital') || name.includes('bệnh viện');
        }
        if (filterLower === 'bất động sản') {
          return comp.id === 'c_vinhomes' || name.includes('vinhomes') || name.includes('bất động sản') || name.includes('bat dong san') || name.includes('real estate');
        }
        if (filterLower === 'giáo dục') {
          return comp.id === 'c_fptedu' || name.includes('fpt education') || name.includes('giáo dục') || name.includes('giao duc') || name.includes('education');
        }
        
        return name.includes(filterLower) || desc.includes(filterLower);
      });
    }
  }

  if (filteredCompanies.length === 0) {
    container.innerHTML = `
      <div class="db-panel" style="grid-column: span 3; text-align:center; padding: 48px; border-radius: var(--radius-lg); background-color: var(--bg-secondary);">
        <h3 style="font-size: 20px; color: var(--text-main); margin-bottom: 8px;">🔍 Không tìm thấy công ty nào</h3>
        <p style="color: var(--text-muted); font-size:14px;">Chưa có nhà tuyển dụng nào thuộc nhóm: <strong>${categoryFilter}</strong></p>
      </div>
    `;
    return;
  }

  filteredCompanies.forEach(comp => {
    const jobsCount = state.jobs.filter(j => j.companyId === comp.id && j.status === 'approved').length;
    const descriptionText = comp.desc || comp.description || '';
    
    const card = document.createElement('div');
    card.className = 'company-card';
    card.innerHTML = `
      <div class="company-logo" style="width: 80px; height: 80px; font-size: 28px; margin-bottom: 20px; padding:0; overflow:hidden;">${getCompanyLogoHtml(comp.name, comp.id)}</div>
      <h3 style="font-size: 18px; margin-bottom: 8px;">${comp.name}</h3>
      <p style="margin-bottom: 20px; font-size: 14px;">${descriptionText}</p>
      <div style="display:flex; justify-content:space-between; width: 100%; border-top: 1px solid var(--border-color); padding-top: 16px; font-size: 13px; color: var(--text-muted);">
        <span>📍 ${comp.location}</span>
        <span style="color:var(--primary); font-weight:600;">${jobsCount} vị trí đang mở</span>
      </div>
    `;
    container.appendChild(card);
  });
}

// ----------------- VIEW JOB DETAILS (JobsGO Style) -----------------
function viewJobDetails(jobId) {
  navigateTo(`job-detail?id=${jobId}`);
}

function getQueryParam(param) {
  const hash = window.location.hash;
  const qIdx = hash.indexOf('?');
  if (qIdx === -1) return null;
  const paramsStr = hash.substring(qIdx + 1);
  const params = new URLSearchParams(paramsStr);
  return params.get(param);
}

function renderJobDetailView() {
  const jobId = getQueryParam('id');
  if (!jobId) {
    navigateTo('home');
    return;
  }
  
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) {
    navigateTo('home');
    return;
  }

  // Add to recently viewed list
  addToRecentlyViewed(jobId);

  const comp = state.companies.find(c => c.id === job.companyId || c.name === job.companyName);
  const compName = comp ? comp.name : (job.companyName || 'Công ty thành viên');
  const compLocation = comp ? comp.location : (job.location || 'Hà Nội');
  
  // Breadcrumbs
  const breadcrumbs = document.getElementById('jobDetailBreadcrumbs');
  breadcrumbs.innerHTML = `
    <a href="#" onclick="event.preventDefault(); navigateTo('home')">JobsGO</a> / 
    <a href="#" onclick="event.preventDefault(); navigateTo('jobs')">Việc làm</a> / 
    <a href="#" onclick="event.preventDefault(); navigateTo('companies')">${compName}</a> / 
    <span style="color:#64748b;">${job.title}</span>
  `;

  // Title and main details
  document.getElementById('jobDetailTitle').textContent = job.title;
  document.getElementById('jobDetailSalary').textContent = job.salary;
  document.getElementById('jobDetailLocation').textContent = job.location;
  
  let expVal = "Không yêu cầu";
  let degreeVal = "Cao đẳng trở lên";
  if (job.requirements) {
    if (job.requirements.toLowerCase().includes('kinh nghiệm') || job.requirements.toLowerCase().includes('năm')) {
      const match = job.requirements.match(/\d+\s+năm/i);
      expVal = match ? match[0] : "1 - 3 năm kinh nghiệm";
    }
    if (job.requirements.toLowerCase().includes('đại học')) {
      degreeVal = "Đại học trở lên";
    } else if (job.requirements.toLowerCase().includes('thạc sĩ')) {
      degreeVal = "Thạc sĩ trở lên";
    }
  }
  document.getElementById('jobDetailExp').textContent = expVal;
  document.getElementById('jobDetailDegree').textContent = degreeVal;

  // Hạn nộp
  const deadlineDate = new Date(job.deadline);
  const today = new Date();
  const diffTime = deadlineDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  let deadlineStr = `Hạn nộp hồ sơ: <strong>${formatDate(job.deadline)}</strong>`;
  if (diffDays > 0) {
    deadlineStr += ` (Còn ${diffDays} ngày)`;
  } else if (diffDays === 0) {
    deadlineStr += ` (Hôm nay)`;
  } else {
    deadlineStr += ` (Đã hết hạn)`;
  }
  document.getElementById('jobDetailDeadline').innerHTML = deadlineStr;

  // Work city and address
  document.getElementById('jobDetailWorkCity').textContent = compLocation;
  const detailedAddress = comp && comp.description ? 
    (comp.description.includes('trụ sở') || comp.description.includes('tại') ? comp.description.substring(0, 100) + '...' : `Khu vực ${compLocation}`)
    : `Địa chỉ chi tiết công ty tại ${compLocation}`;
  document.getElementById('jobDetailWorkAddress').innerHTML = `
    <strong>Địa chỉ:</strong> ${detailedAddress}<br>
    <span style="font-size:12px; color:#64748b; font-style:italic;">(Vui lòng liên hệ trực tiếp Nhà tuyển dụng để nhận hướng dẫn đường đi chi tiết)</span>
  `;

  // Action binding
  const isSaved = state.currentUser ? state.savedJobs.some(sj => sj.userId === state.currentUser.id && sj.jobId === job.id) : false;
  
  const setupActionButtons = (applyBtnId, chatBtnId, bookmarkBtnId, shareBtnId) => {
    const applyBtn = document.getElementById(applyBtnId);
    const chatBtn = document.getElementById(chatBtnId);
    const bookmarkBtn = document.getElementById(bookmarkBtnId);
    const shareBtn = document.getElementById(shareBtnId);

    applyBtn.onclick = () => openApplyModal(job.id);
    chatBtn.onclick = () => openChatWithNTD(job.companyName);
    
    // Bookmark button state
    if (isSaved) {
      bookmarkBtn.classList.add('active');
      bookmarkBtn.querySelector('svg').setAttribute('fill', 'currentColor');
    } else {
      bookmarkBtn.classList.remove('active');
      bookmarkBtn.querySelector('svg').setAttribute('fill', 'none');
    }

    bookmarkBtn.onclick = async (e) => {
      await toggleSaveJob(e, job.id);
      renderJobDetailView(); // re-render to update saved state
    };

    shareBtn.onclick = () => {
      navigator.clipboard.writeText(window.location.href);
      showToast('Đã sao chép liên kết việc làm này!', 'success');
    };
  };

  setupActionButtons('jobDetailApplyBtn', 'jobDetailChatBtn', 'jobDetailBookmarkBtn', 'jobDetailShareBtn');
  setupActionButtons('jobDetailApplyBtnBottom', 'jobDetailChatBtnBottom', 'jobDetailBookmarkBtnBottom', 'jobDetailShareBtnBottom');

  // AI Matching Banner
  const aiBannerText = document.getElementById('jobDetailAiBannerText');
  const aiBannerBtn = document.getElementById('jobDetailAiBannerBtn');
  
  if (state.currentUser) {
    if (state.currentUser.role === 'candidate') {
      aiBannerText.textContent = "AI sẵn sàng! Bấm nút để đánh giá độ tương thích ATS và nhận gợi ý nâng cấp hồ sơ.";
      aiBannerBtn.textContent = "Đánh giá ngay!";
      aiBannerBtn.style.display = 'block';
      aiBannerBtn.onclick = () => {
        openAiCVEvaluatorFromDetail();
      };
    } else {
      aiBannerText.textContent = "Tính năng Đánh giá CV bằng AI dành riêng cho tài khoản Ứng viên.";
      aiBannerBtn.textContent = "Chế độ ứng viên";
      aiBannerBtn.style.display = 'none';
    }
  } else {
    aiBannerText.textContent = "Hãy đăng nhập để xem đánh giá độ tương thích ATS bằng AI của bạn!";
    aiBannerBtn.textContent = "Đăng nhập để xem đánh giá!";
    aiBannerBtn.style.display = 'block';
    aiBannerBtn.onclick = () => {
      showToast('Vui lòng đăng nhập để sử dụng tính năng đánh giá AI!', 'warning');
      navigateTo('login');
    };
  }

  // Job detail sections lists
  const formatToListHTML = (text) => {
    if (!text) return '<li>Đang cập nhật...</li>';
    return text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => `<li>${line.startsWith('•') || line.startsWith('-') ? line.substring(1).trim() : line}</li>`)
      .join('');
  };

  document.getElementById('jobDetailDescription').innerHTML = formatToListHTML(job.description);
  document.getElementById('jobDetailRequirements').innerHTML = formatToListHTML(job.requirements);
  document.getElementById('jobDetailBenefits').innerHTML = formatToListHTML(job.benefits);

  // Category badges
  const categoryContainer = document.getElementById('jobDetailCategoryBadges');
  categoryContainer.innerHTML = '';
  const industries = ['Bán hàng', 'Kinh doanh', 'Tư vấn Bảo hiểm', 'Phát triển Phần mềm', 'Công nghệ thông tin', 'Thiết kế đồ họa', 'Quản trị nhân sự', 'Ẩm thực & F&B'];
  let matched = [];
  industries.forEach(ind => {
    if (job.title.toLowerCase().includes(ind.toLowerCase()) || 
        (job.description && job.description.toLowerCase().includes(ind.toLowerCase())) || 
        (job.requirements && job.requirements.toLowerCase().includes(ind.toLowerCase()))) {
      matched.push(ind);
    }
  });
  if (matched.length === 0) matched = ['Tuyển dụng mới', 'Môi trường tốt'];
  matched.forEach(ind => {
    const badge = document.createElement('a');
    badge.href = '#';
    badge.className = 'job-go-badge-category';
    badge.textContent = ind;
    badge.onclick = (e) => {
      e.preventDefault();
      navigateTo('jobs');
      const searchBox = document.getElementById('searchKeyword');
      if (searchBox) {
        searchBox.value = ind;
        const searchBtn = document.querySelector('.search-btn');
        if (searchBtn) searchBtn.click();
      }
    };
    categoryContainer.appendChild(badge);
  });

  // Sidebar Company Logo and Info
  const sidebarLogo = document.getElementById('jobDetailSidebarLogo');
  sidebarLogo.innerHTML = getCompanyLogoHtml(job.companyName, job.companyId);
  sidebarLogo.style.cursor = 'pointer';
  sidebarLogo.onclick = () => {
    navigateTo('companies');
    renderCompaniesView(job.companyName);
  };
  
  const sidebarCompName = document.getElementById('jobDetailSidebarCompName');
  sidebarCompName.textContent = compName;
  sidebarCompName.style.cursor = 'pointer';
  sidebarCompName.onclick = () => {
    navigateTo('companies');
    renderCompaniesView(job.companyName);
  };

  const fieldText = comp && comp.description ? 
    (comp.description.includes('bảo hiểm') ? 'Bảo hiểm' : (comp.description.includes('phần mềm') || comp.description.includes('viễn thông') ? 'Công nghệ thông tin' : 'Dịch vụ'))
    : 'Dịch vụ';
  document.getElementById('jobDetailSidebarCompField').textContent = `Lĩnh vực: ${fieldText}`;

  // Common Info
  document.getElementById('jobDetailInfoType').textContent = job.type || 'Toàn thời gian';
  document.getElementById('jobDetailInfoLevel').textContent = job.title.toLowerCase().includes('intern') ? 'Thực tập sinh' : (job.title.toLowerCase().includes('senior') || job.title.toLowerCase().includes('lead') ? 'Trưởng nhóm/Senior' : 'Nhân viên/Chuyên viên');
  document.getElementById('jobDetailInfoDate').textContent = formatDate(job.createdAt || '2026-06-25');

  // Sidebar AI Eval click
  document.getElementById('jobDetailSidebarAiBanner').onclick = () => {
    openAiCVEvaluatorFromDetail();
  };

  // Rendering suggested jobs (3 cards)
  const suggestedContainer = document.getElementById('jobDetailSuggestedJobs');
  suggestedContainer.innerHTML = '';
  const suggestedJobs = state.jobs
    .filter(j => j.status === 'approved' && j.id !== job.id)
    .slice(0, 3);
  
  if (suggestedJobs.length === 0) {
    suggestedContainer.innerHTML = `<div style="grid-column: span 3; text-align:center; color:#94a3b8; font-size:13px; padding:12px;">Không có việc làm gợi ý nào khác.</div>`;
  } else {
    suggestedJobs.forEach(sj => {
      const card = document.createElement('div');
      card.className = 'job-go-suggested-card';
      card.onclick = () => viewJobDetails(sj.id);

      card.innerHTML = `
        <div class="job-go-suggested-logo">${getCompanyLogoHtml(sj.companyName, sj.companyId)}</div>
        <div class="job-go-suggested-title" title="${sj.title}">${sj.title}</div>
        <div class="job-go-suggested-company">${sj.companyName}</div>
        <div class="job-go-suggested-meta">
          <span style="color:#059669; font-weight:700;">${sj.salary}</span>
          <span style="color:#64748b;">📍 ${sj.location}</span>
        </div>
      `;
      suggestedContainer.appendChild(card);
    });
  }

  // Rendering similar jobs in sidebar (4 items)
  const similarContainer = document.getElementById('jobDetailSimilarJobs');
  similarContainer.innerHTML = '';
  const similarJobs = state.jobs
    .filter(j => j.status === 'approved' && j.id !== job.id && (j.location === job.location || j.companyName === job.companyName))
    .slice(0, 4);

  if (similarJobs.length === 0) {
    similarContainer.innerHTML = `<div style="text-align:center; color:#94a3b8; font-size:12px; padding:8px;">Không có việc làm tương tự khác.</div>`;
  } else {
    similarJobs.forEach(sj => {
      const item = document.createElement('div');
      item.className = 'job-go-sidebar-item';
      item.onclick = () => viewJobDetails(sj.id);

      item.innerHTML = `
        <div class="job-go-sidebar-item-logo">${getCompanyLogoHtml(sj.companyName, sj.companyId)}</div>
        <div class="job-go-sidebar-item-content">
          <div class="job-go-sidebar-item-title" title="${sj.title}">${sj.title}</div>
          <div class="job-go-sidebar-item-company">${sj.companyName}</div>
          <div class="job-go-sidebar-item-meta">
            <span style="color:#dc2626; font-weight:700;">${sj.salary}</span>
            <span style="color:#94a3b8;">📍 ${sj.location}</span>
          </div>
        </div>
      `;
      similarContainer.appendChild(item);
    });
  }

  // Rendering recently viewed jobs
  renderRecentlyViewed();
}

function addToRecentlyViewed(jobId) {
  let rv = [];
  const localRv = localStorage.getItem('premiumjob_recently_viewed');
  if (localRv) {
    rv = JSON.parse(localRv);
  }
  rv = rv.filter(id => id !== jobId);
  rv.unshift(jobId);
  rv = rv.slice(0, 3);
  localStorage.setItem('premiumjob_recently_viewed', JSON.stringify(rv));
}

function renderRecentlyViewed() {
  const container = document.getElementById('jobDetailRecentlyViewed');
  if (!container) return;
  container.innerHTML = '';
  
  let rv = [];
  const localRv = localStorage.getItem('premiumjob_recently_viewed');
  if (localRv) {
    rv = JSON.parse(localRv);
  }
  
  const currentJobId = getQueryParam('id');
  const viewableIds = rv.filter(id => id !== currentJobId);

  if (viewableIds.length === 0) {
    container.innerHTML = `<div style="text-align:center; color:#94a3b8; font-size:12px; padding:8px;">Chưa xem việc làm nào khác.</div>`;
    return;
  }

  viewableIds.forEach(id => {
    const sj = state.jobs.find(j => j.id === id);
    if (!sj) return;
    
    const item = document.createElement('div');
    item.className = 'job-go-sidebar-item';
    item.onclick = () => viewJobDetails(sj.id);

    item.innerHTML = `
      <div class="job-go-sidebar-item-logo">${getCompanyLogoHtml(sj.companyName, sj.companyId)}</div>
      <div class="job-go-sidebar-item-content">
        <div class="job-go-sidebar-item-title" title="${sj.title}">${sj.title}</div>
        <div class="job-go-sidebar-item-company">${sj.companyName}</div>
        <div class="job-go-sidebar-item-meta">
          <span style="color:#059669; font-weight:700;">${sj.salary}</span>
          <span style="color:#94a3b8;">📍 ${sj.location}</span>
        </div>
      </div>
    `;
    container.appendChild(item);
  });
}

function openChatWithNTD(companyName) {
  const supportWidget = document.querySelector('.floating-widget-item.support-widget');
  if (supportWidget) {
    supportWidget.click();
    setTimeout(() => {
      const chatInput = document.getElementById('chatbotInput');
      if (chatInput) {
        chatInput.value = `Xin chào NTD ${companyName}! Tôi muốn tìm hiểu thêm về việc làm của quý công ty.`;
        const sendBtn = document.getElementById('chatbotSendBtn');
        if (sendBtn) sendBtn.click();
      }
    }, 500);
  } else {
    showToast(`Đang kết nối chat với Nhà tuyển dụng ${companyName}...`, 'success');
  }
}

function openFeedbackModalFromJobDetail() {
  const feedbackWidget = document.querySelector('.floating-widget-item.feedback-widget');
  if (feedbackWidget) {
    feedbackWidget.click();
    const messageArea = document.getElementById('feedbackMessage');
    if (messageArea) {
      const jobId = getQueryParam('id');
      const job = state.jobs.find(j => j.id === jobId);
      messageArea.value = `Tôi muốn báo cáo tin tuyển dụng "${job ? job.title : ''}" của công ty "${job ? job.companyName : ''}" vì lý do: `;
    }
  } else {
    const feedbackModal = document.getElementById('feedbackModal');
    if (feedbackModal) feedbackModal.classList.add('active');
  }
}

function openAiCVEvaluatorFromDetail() {
  if (!state.currentUser) {
    showToast('Vui lòng đăng nhập để chấm điểm CV của bạn với tin tuyển dụng này!', 'warning');
    navigateTo('login');
    return;
  }
  if (state.currentUser.role !== 'candidate') {
    showToast('Tính năng này chỉ dành cho tài khoản Ứng viên!', 'warning');
    return;
  }
  const evaluatorModal = document.getElementById('aiCVEvaluatorModal');
  if (evaluatorModal) {
    const jobId = getQueryParam('id');
    const job = state.jobs.find(j => j.id === jobId);
    if (job) {
      evaluatorModal.classList.add('active');
      evaluateMyCV(job.id);
    }
  }
}

function evaluateMyCV(jobId) {
  const modal = document.getElementById('aiCVEvaluatorModal');
  const body = document.getElementById('aiCVEvaluatorBody');
  if (!modal || !body) return;

  const user = state.currentUser;
  if (!user) return;
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) {
    openAiCVEvaluatorModal();
    return;
  }

  const userSkills = user.skills ? user.skills.split(',').map(s => s.trim().toLowerCase()) : [];
  const jobRequirements = job.requirements ? job.requirements.toLowerCase() : '';
  const jobDesc = job.description ? job.description.toLowerCase() : '';
  const jobTitle = job.title.toLowerCase();

  let matchedSkills = [];
  userSkills.forEach(skill => {
    if (skill && (jobRequirements.includes(skill) || jobDesc.includes(skill) || jobTitle.includes(skill))) {
      matchedSkills.push(skill);
    }
  });

  let score = 50;
  if (user.cvName) score += 10;
  if (userSkills.length > 0) {
    score += Math.round((matchedSkills.length / userSkills.length) * 35);
  }
  score = Math.min(98, score);
  score = Math.max(35, score);

  let scoreClass = 'danger';
  if (score >= 80) scoreClass = 'success';
  else if (score >= 60) scoreClass = 'warning';

  let strengths = [];
  let recommendations = [];

  if (matchedSkills.length > 0) {
    strengths.push(`Kỹ năng trùng khớp với yêu cầu: ${matchedSkills.slice(0, 3).join(', ')}.`);
  } else {
    recommendations.push('Kỹ năng hiện tại chưa trùng khớp nhiều với yêu cầu công việc. Nên bổ sung thêm kỹ năng phù hợp.');
  }

  if (user.cvName) {
    strengths.push('Đã tải lên CV định dạng PDF tương thích ATS.');
  } else {
    recommendations.push('Hãy đính kèm file CV PDF để robot ATS có thể quét được thông tin.');
  }

  if (user.title && job.title.toLowerCase().includes(user.title.toLowerCase())) {
    strengths.push(`Vị trí mong muốn của bạn (${user.title}) hoàn toàn tương thích với chức danh công việc.`);
  } else {
    recommendations.push(`Cân nhắc điều chỉnh tiêu đề vị trí mong muốn phù hợp với tin tuyển dụng này.`);
  }

  body.innerHTML = `
    <div style="text-align: center; margin-bottom: 24px;">
      <div class="ats-score-circle ${scoreClass}" style="margin: 0 auto 16px;">
        <span class="score-num">${score}</span>
        <span class="score-percent">%</span>
      </div>
      <h3 style="font-size:18px; font-weight:700; color:var(--text-main);">Mức Độ Tương Thích ATS</h3>
      <p style="font-size:13.5px; color:var(--text-muted); margin-top:6px;">
        Hồ sơ của bạn phù hợp <strong>${score}%</strong> so với yêu cầu của việc làm <strong>${job.title}</strong>
      </p>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom:20px;">
      <div class="db-panel" style="padding:16px; border:1px solid #bbf7d0; background:#f0fdf4;">
        <h4 style="color:#16a34a; font-size:13.5px; font-weight:700; margin-bottom:10px;">🌟 Điểm mạnh hồ sơ:</h4>
        <ul style="padding-left:14px; font-size:12.5px; color:#166534; line-height:1.5; list-style:disc;">
          ${strengths.map(s => `<li style="margin-bottom:6px;">${s}</li>`).join('')}
        </ul>
      </div>
      <div class="db-panel" style="padding:16px; border:1px solid #fde047; background:#fefce8;">
        <h4 style="color:#a16207; font-size:13.5px; font-weight:700; margin-bottom:10px;">💡 Gợi ý cải thiện:</h4>
        <ul style="padding-left:14px; font-size:12.5px; color:#854d0e; line-height:1.5; list-style:disc;">
          ${recommendations.map(r => `<li style="margin-bottom:6px;">${r}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function executeJobDetailSearch() {
  const keyword = document.getElementById('jobDetailSearchKeyword').value.trim();
  const location = document.getElementById('jobDetailSearchLocation').value.trim();
  navigateTo('jobs');
  
  setTimeout(() => {
    const searchKeyword = document.getElementById('searchKeyword');
    const searchLoc = document.getElementById('searchLocation');
    if (searchKeyword) searchKeyword.value = keyword;
    if (searchLoc) searchLoc.value = location;
    
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) searchBtn.click();
  }, 100);
}

function closeJobDetailModal() {
  const detailModal = document.getElementById('jobDetailModal');
  if (detailModal) detailModal.classList.remove('active');
}

// ----------------- CANDIDATE ACTIONS & DASHBOARD -----------------
async function toggleSaveJob(event, jobId) {
  if (event) event.stopPropagation();

  if (!checkAccess('save')) return;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/saved-jobs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: state.currentUser.id, jobId })
      });
      if (res.ok) {
        const data = await res.json();
        if (data.saved) {
          state.savedJobs.push({ userId: state.currentUser.id, jobId });
          showToast('Đã lưu việc làm thành công!', 'success');
        } else {
          state.savedJobs = state.savedJobs.filter(sj => !(sj.userId === state.currentUser.id && sj.jobId === jobId));
          showToast('Đã bỏ lưu việc làm này!', 'warning');
        }
        updateFloatingWidgets();
        const hash = window.location.hash.substring(1) || 'home';
        if (hash === 'home') renderHome();
        else if (hash === 'jobs') renderJobsBoard();
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu!', 'error');
    }
    return;
  }

  const savedIndex = state.savedJobs.findIndex(sj => sj.userId === state.currentUser.id && sj.jobId === jobId);

  if (savedIndex !== -1) {
    state.savedJobs.splice(savedIndex, 1);
    showToast('Đã bỏ lưu việc làm này!', 'warning');
  } else {
    state.savedJobs.push({ userId: state.currentUser.id, jobId });
    showToast('Đã lưu việc làm thành công!', 'success');
  }
  saveState();
  updateFloatingWidgets();
  
  // Refresh current view to update icons
  const hash = window.location.hash.substring(1) || 'home';
  if (hash === 'home') renderHome();
  else if (hash === 'jobs') renderJobsBoard();
}

let activeApplyJobId = '';
function openApplyModal(jobId) {
  closeJobDetailModal(); // Close details modal first
  
  if (!checkAccess('apply')) return;

  activeApplyJobId = jobId;
  const applyModal = document.getElementById('applyJobModal');
  if (applyModal) {
    // Prefill details
    const user = state.currentUser;
    document.getElementById('applyName').value = user.name || '';
    document.getElementById('applyEmail').value = user.email || '';
    document.getElementById('applyPhone').value = user.phone || '';
    
    const cvBox = document.getElementById('applyCVPreview');
    if (user.cvName) {
      cvBox.innerHTML = `
        <div class="cv-info">
          <span class="cv-icon">📄</span>
          <div>
            <div class="cv-name">${user.cvName}</div>
            <div class="cv-size">${user.cvSize}</div>
          </div>
        </div>
      `;
    } else {
      cvBox.innerHTML = `<span style="color:var(--text-muted); font-size:13px;">Bạn chưa tải lên CV. Hãy tải CV giả lập ở dưới hoặc nhấn Ứng tuyển để gửi hồ sơ cơ bản.</span>`;
    }
    applyModal.classList.add('active');
  }
}

function closeApplyModal() {
  const applyModal = document.getElementById('applyJobModal');
  if (applyModal) applyModal.classList.remove('active');
  activeApplyJobId = '';
}

async function submitApplyAction(e) {
  if (e) e.preventDefault();

  if (!activeApplyJobId) return;

  const job = state.jobs.find(j => j.id === activeApplyJobId);
  if (!job) return;

  // Validate fields
  const name = document.getElementById('applyName').value.trim();
  const email = document.getElementById('applyEmail').value.trim();
  const phone = document.getElementById('applyPhone').value.trim();
  const cvFile = document.getElementById('applyCVUpload').files[0];

  if (!name || !email || !phone) {
    showToast('Vui lòng điền thông tin liên hệ đầy đủ!', 'error');
    return;
  }

  if (isBackendConnected) {
    const newApp = {
      id: 'a_' + Date.now(),
      jobId: activeApplyJobId,
      jobTitle: job.title,
      companyName: job.companyName,
      candidateEmail: state.currentUser.email,
      candidateName: name,
      candidatePhone: phone,
      cvName: state.currentUser.cvName || 'Profile_Tuyendung.pdf',
      status: 'pending'
    };
    if (cvFile) {
      newApp.cvName = cvFile.name;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newApp)
      });
      if (res.ok) {
        const savedApp = await res.json();
        state.applications.push(savedApp);
        showToast(`Đã nộp hồ sơ ứng tuyển vị trí ${job.title} thành công!`, 'success');
        closeApplyModal();
        if (window.location.hash.includes('candidate-dashboard')) {
          renderCandidateDashboard('tracking');
        }
      } else {
        const errData = await res.json();
        showToast(errData.message || 'Lỗi khi gửi đơn ứng tuyển!', 'error');
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu!', 'error');
    }
    return;
  }

  // Check if candidate already applied to this job
  const alreadyApplied = state.applications.some(a => a.jobId === activeApplyJobId && a.candidateEmail.toLowerCase() === state.currentUser.email.toLowerCase());
  if (alreadyApplied) {
    showToast('Bạn đã nộp đơn ứng tuyển cho công việc này rồi!', 'warning');
    closeApplyModal();
    return;
  }

  let cvName = state.currentUser.cvName || 'Profile_Tuyendung.pdf';
  if (cvFile) {
    cvName = cvFile.name;
    state.currentUser.cvName = cvName;
    state.currentUser.cvSize = (cvFile.size / (1024 * 1024)).toFixed(1) + ' MB';
  }

  // Create application record
  const newApp = {
    id: 'a_' + Date.now(),
    jobId: activeApplyJobId,
    jobTitle: job.title,
    companyName: job.companyName,
    candidateEmail: state.currentUser.email,
    candidateName: name,
    candidatePhone: phone,
    cvName: cvName,
    status: 'pending', // pending, approved, rejected
    appliedAt: new Date().toISOString().substring(0, 10)
  };

  state.applications.push(newApp);
  saveState();

  showToast(`Đã nộp hồ sơ ứng tuyển vị trí ${job.title} thành công!`, 'success');
  closeApplyModal();

  // Redirect to application status tracking if in dashboard
  if (window.location.hash.includes('candidate-dashboard')) {
    renderCandidateDashboard('tracking');
  }
}

// SIMULATED FILE SELECTOR UPDATES PREVIEW
function handleApplyCVSelect(input) {
  const preview = document.getElementById('applyCVPreview');
  if (input.files && input.files[0]) {
    const file = input.files[0];
    preview.innerHTML = `
      <div class="cv-info">
        <span class="cv-icon" style="color:var(--danger)">📄</span>
        <div>
          <div class="cv-name">${file.name}</div>
          <div class="cv-size">${(file.size / 1024).toFixed(0)} KB</div>
        </div>
      </div>
    `;
  }
}

// RENDERING CANDIDATE DASHBOARD VIEWS
function renderCandidateDashboard(tab = 'profile') {
  // Update sidebar active states
  const menuItems = document.querySelectorAll('#candidateSidebar .sidebar-item');
  menuItems.forEach(item => {
    if (item.dataset.tab === tab) item.classList.add('active');
    else item.classList.remove('active');
  });

  // Hide all sections
  document.getElementById('candidateProfileTab').style.display = 'none';
  document.getElementById('candidateTrackingTab').style.display = 'none';
  document.getElementById('candidateSavedTab').style.display = 'none';
  document.getElementById('candidatePasswordTab').style.display = 'none';

  const user = state.currentUser;
  
  if (tab === 'profile') {
    document.getElementById('candidateProfileTab').style.display = 'block';
    
    // Fill values
    document.getElementById('candAvatarPreview').textContent = user.name.charAt(0).toUpperCase();
    document.getElementById('candProfileName').textContent = user.name;
    document.getElementById('candProfileTitle').textContent = user.title || 'Chưa cập nhật tiêu đề';
    
    document.getElementById('candNameInput').value = user.name;
    document.getElementById('candEmailInput').value = user.email;
    document.getElementById('candPhoneInput').value = user.phone;
    document.getElementById('candTitleInput').value = user.title || '';
    document.getElementById('candExpInput').value = user.experience || '';
    document.getElementById('candSkillsInput').value = user.skills || '';
    
    // CV block
    const cvBlock = document.getElementById('candCVBlock');
    if (user.cvName) {
      cvBlock.innerHTML = `
        <div class="cv-preview-box">
          <div class="cv-info">
            <span class="cv-icon" style="font-size:24px;">📄</span>
            <div>
              <div class="cv-name">${user.cvName}</div>
              <div class="cv-size">${user.cvSize}</div>
            </div>
          </div>
          <button class="btn btn-danger" onclick="deleteCVSimulation()" style="padding: 6px 12px; font-size: 12px;">Xóa</button>
        </div>
      `;
    } else {
      cvBlock.innerHTML = `
        <div style="border: 2px dashed var(--border-color); border-radius: var(--radius-md); padding: 20px; text-align: center; color: var(--text-muted); font-size:13px;">
          <p style="margin-bottom:12px;">Bạn chưa tải lên CV cá nhân</p>
          <label class="btn btn-outline" style="cursor:pointer; display:inline-flex;">
            Tải lên CV (PDF)
            <input type="file" accept=".pdf" style="display:none;" onchange="uploadCVSimulation(this)">
          </label>
        </div>
      `;
    }
  } 
  else if (tab === 'tracking') {
    document.getElementById('candidateTrackingTab').style.display = 'block';
    
    const tableBody = document.getElementById('candidateAppTableBody');
    tableBody.innerHTML = '';

    const candApps = state.applications.filter(a => a.candidateEmail.toLowerCase() === user.email.toLowerCase());
    
    if (candApps.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 24px; color:var(--text-muted);">Bạn chưa nộp đơn ứng tuyển nào.</td></tr>`;
      return;
    }

    candApps.forEach((app, idx) => {
      let statusBadge = '';
      if (app.status === 'pending') statusBadge = '<span class="badge badge-pending">Đang xét duyệt</span>';
      else if (app.status === 'approved') statusBadge = '<span class="badge badge-approved">Đã chấp nhận</span>';
      else if (app.status === 'rejected') statusBadge = '<span class="badge badge-rejected">Từ chối</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td style="font-weight:600;">${app.jobTitle}</td>
        <td>${app.companyName}</td>
        <td>${formatDate(app.appliedAt)}</td>
        <td>${statusBadge}</td>
      `;
      tableBody.appendChild(tr);
    });
  } 
  else if (tab === 'saved') {
    document.getElementById('candidateSavedTab').style.display = 'block';
    
    const savedList = document.getElementById('candidateSavedList');
    savedList.innerHTML = '';

    const userSavedJobs = state.savedJobs.filter(sj => sj.userId === user.id);
    
    if (userSavedJobs.length === 0) {
      savedList.innerHTML = `<div style="grid-column: span 2; text-align:center; padding: 32px; color:var(--text-muted);">Bạn chưa lưu việc làm nào.</div>`;
      return;
    }

    userSavedJobs.forEach(sj => {
      const job = state.jobs.find(j => j.id === sj.jobId);
      if (!job) return; // Skip if job was deleted

      const card = document.createElement('div');
      card.className = 'job-card';
      card.innerHTML = `
        <div class="job-card-top">
          <div class="company-logo">${getCompanyLogoHtml(job.companyName, job.companyId)}</div>
          <div class="job-info">
            <h3 onclick="viewJobDetails('${job.id}')">${job.title}</h3>
            <div class="job-company">${job.companyName}</div>
            <div class="job-badges">
              <span class="badge badge-salary">💵 ${job.salary}</span>
              <span class="badge badge-location">📍 ${job.location}</span>
            </div>
          </div>
        </div>
        <div class="job-card-bottom">
          <span class="job-deadline">⏳ Hạn: ${formatDate(job.deadline)}</span>
          <div class="job-actions">
            <button class="btn btn-outline btn-danger" onclick="toggleSaveJob(event, '${job.id}'); renderCandidateDashboard('saved');" style="padding: 6px 12px; font-size:12px;">Bỏ lưu</button>
            <button class="btn btn-primary" onclick="viewJobDetails('${job.id}')" style="padding: 6px 12px; font-size:12px;">Xem chi tiết</button>
          </div>
        </div>
      `;
      savedList.appendChild(card);
    });
  } 
  else if (tab === 'password') {
    document.getElementById('candidatePasswordTab').style.display = 'block';
  }
}

// CANDIDATE PROFILE ACTIONS
function saveCandidateProfile(e) {
  if (e) e.preventDefault();
  
  const user = state.currentUser;
  user.name = document.getElementById('candNameInput').value.trim();
  user.phone = document.getElementById('candPhoneInput').value.trim();
  user.title = document.getElementById('candTitleInput').value.trim();
  user.experience = document.getElementById('candExpInput').value.trim();
  user.skills = document.getElementById('candSkillsInput').value.trim();

  // Find index in user db and update
  const idx = state.users.findIndex(u => u.id === user.id);
  if (idx !== -1) {
    state.users[idx] = user;
  }
  
  saveState();
  showToast('Cập nhật hồ sơ cá nhân thành công!', 'success');
  renderCandidateDashboard('profile');
}

function uploadCVSimulation(input) {
  if (input.files && input.files[0]) {
    const file = input.files[0];
    state.currentUser.cvName = file.name;
    state.currentUser.cvSize = (file.size / (1024 * 1024)).toFixed(1) + ' MB';
    
    // Sync DB
    const idx = state.users.findIndex(u => u.id === state.currentUser.id);
    if (idx !== -1) state.users[idx] = state.currentUser;
    
    saveState();
    showToast('Tải lên CV thành công!', 'success');
    renderCandidateDashboard('profile');
  }
}

function deleteCVSimulation() {
  state.currentUser.cvName = '';
  state.currentUser.cvSize = '';
  
  const idx = state.users.findIndex(u => u.id === state.currentUser.id);
  if (idx !== -1) state.users[idx] = state.currentUser;
  
  saveState();
  showToast('Đã xóa CV thành công!', 'warning');
  renderCandidateDashboard('profile');
}

function changePasswordAction(role) {
  const currentPass = document.getElementById(`${role}OldPass`).value;
  const newPass = document.getElementById(`${role}NewPass`).value;
  const confirmPass = document.getElementById(`${role}ConfirmNewPass`).value;

  if (!currentPass || !newPass || !confirmPass) {
    showToast('Vui lòng nhập đầy đủ các trường mật khẩu!', 'error');
    return;
  }

  if (state.currentUser.password !== currentPass) {
    showToast('Mật khẩu hiện tại không chính xác!', 'error');
    return;
  }

  if (newPass !== confirmPass) {
    showToast('Mật khẩu mới xác nhận không khớp!', 'error');
    return;
  }

  state.currentUser.password = newPass;
  const idx = state.users.findIndex(u => u.id === state.currentUser.id);
  if (idx !== -1) state.users[idx] = state.currentUser;
  
  saveState();
  showToast('Thay đổi mật khẩu thành công!', 'success');
  
  // Clear forms
  document.getElementById(`${role}OldPass`).value = '';
  document.getElementById(`${role}NewPass`).value = '';
  document.getElementById(`${role}ConfirmNewPass`).value = '';
}


// ----------------- RECRUITER ACTIONS & DASHBOARD -----------------
function renderRecruiterDashboard(tab = 'stats') {
  const menuItems = document.querySelectorAll('#recruiterSidebar .sidebar-item');
  menuItems.forEach(item => {
    if (item.dataset.tab === tab) item.classList.add('active');
    else item.classList.remove('active');
  });

  // Hide all sections
  document.getElementById('recruiterStatsTab').style.display = 'none';
  document.getElementById('recruiterPostTab').style.display = 'none';
  document.getElementById('recruiterJobsTab').style.display = 'none';
  document.getElementById('recruiterCandidatesTab').style.display = 'none';
  document.getElementById('recruiterCompanyTab').style.display = 'none';
  document.getElementById('recruiterPasswordTab').style.display = 'none';

  const user = state.currentUser;

  if (tab === 'stats') {
    document.getElementById('recruiterStatsTab').style.display = 'block';
    
    // Dynamic Stats Cards
    const companyJobs = state.jobs.filter(j => (j.companyId === user.companyId || j.companyName === user.companyName));
    const companyJobIds = companyJobs.map(j => j.id);
    const companyApps = state.applications.filter(a => companyJobIds.includes(a.jobId));
    
    document.getElementById('recTotalPosts').textContent = companyJobs.length;
    document.getElementById('recTotalPendingPosts').textContent = companyJobs.filter(j => j.status === 'pending').length;
    document.getElementById('recTotalApps').textContent = companyApps.length;
    document.getElementById('recPendingApps').textContent = companyApps.filter(a => a.status === 'pending').length;

    // Render Recruiter Stats Chart
    renderRecruiterStatsChart();
  } 
  else if (tab === 'post') {
    document.getElementById('recruiterPostTab').style.display = 'block';
    // Clear form or set for new job
    document.getElementById('jobPostFormHeader').textContent = 'Đăng tin tuyển dụng mới';
    document.getElementById('postIdInput').value = '';
    document.getElementById('postTitle').value = '';
    document.getElementById('postSalary').value = '';
    document.getElementById('postLocation').value = 'Đà Nẵng';
    document.getElementById('postType').value = 'Full-time';
    document.getElementById('postDeadline').value = '';
    document.getElementById('postDesc').value = '';
    document.getElementById('postReq').value = '';
    document.getElementById('postBene').value = '';
    document.getElementById('btnSubmitPost').textContent = 'Đăng tin tuyển dụng';
  } 
  else if (tab === 'jobs') {
    document.getElementById('recruiterJobsTab').style.display = 'block';
    
    const tableBody = document.getElementById('recruiterJobsTableBody');
    tableBody.innerHTML = '';

    const companyJobs = state.jobs.filter(j => (j.companyId === user.companyId || j.companyName === user.companyName));

    if (companyJobs.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color:var(--text-muted);">Bạn chưa đăng tin tuyển dụng nào.</td></tr>`;
      return;
    }

    companyJobs.forEach((job, idx) => {
      let statusBadge = '';
      if (job.status === 'pending') statusBadge = '<span class="badge badge-pending">Chờ duyệt</span>';
      else if (job.status === 'approved') statusBadge = '<span class="badge badge-approved">Đang hiển thị</span>';

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td style="font-weight:600;">${job.title}</td>
        <td>📍 ${job.location}</td>
        <td>💵 ${job.salary}</td>
        <td>${statusBadge}</td>
        <td>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-outline" onclick="editJobPost('${job.id}')" style="padding: 6px 12px; font-size:12px;">Sửa</button>
            <button class="btn btn-danger" onclick="deleteJobPost('${job.id}')" style="padding: 6px 12px; font-size:12px;">Xóa</button>
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  } 
  else if (tab === 'candidates') {
    document.getElementById('recruiterCandidatesTab').style.display = 'block';
    
    const tableBody = document.getElementById('recruiterCandidatesTableBody');
    tableBody.innerHTML = '';

    // Find jobs of this recruiter
    const companyJobs = state.jobs.filter(j => (j.companyId === user.companyId || j.companyName === user.companyName));
    const companyJobIds = companyJobs.map(j => j.id);
    const companyApps = state.applications.filter(a => companyJobIds.includes(a.jobId));

    if (companyApps.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 24px; color:var(--text-muted);">Chưa có ứng viên nào nộp hồ sơ.</td></tr>`;
      return;
    }

    companyApps.forEach((app, idx) => {
      let statusBadge = '';
      let actionButtons = '';
      
      if (app.status === 'pending') {
        statusBadge = '<span class="badge badge-pending">Đang duyệt</span>';
        actionButtons = `
          <button class="btn btn-success" onclick="updateAppStatus('${app.id}', 'approved')" style="padding: 4px 8px; font-size: 11px;">Nhận</button>
          <button class="btn btn-danger" onclick="updateAppStatus('${app.id}', 'rejected')" style="padding: 4px 8px; font-size: 11px;">Từ chối</button>
        `;
      } else if (app.status === 'approved') {
        statusBadge = '<span class="badge badge-approved">Đã nhận</span>';
        actionButtons = `<span style="font-size:12px; color:var(--success);">✔️ Đã duyệt nhận</span>`;
      } else if (app.status === 'rejected') {
        statusBadge = '<span class="badge badge-rejected">Đã từ chối</span>';
        actionButtons = `<span style="font-size:12px; color:var(--danger);">❌ Đã từ chối</span>`;
      }

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td style="font-weight:600;">${app.candidateName}</td>
        <td>${app.jobTitle}</td>
        <td>${app.candidatePhone}</td>
        <td><a href="#" onclick="event.preventDefault(); simulateViewCV('${app.candidateEmail}', '${app.cvName}')" style="color:var(--primary); text-decoration:underline;">📄 ${app.cvName}</a></td>
        <td>${statusBadge}</td>
        <td><div style="display:flex; gap:6px;">${actionButtons}</div></td>
      `;
      tableBody.appendChild(tr);
    });
  } 
  else if (tab === 'company') {
    document.getElementById('recruiterCompanyTab').style.display = 'block';
    
    // Find recruiter company in DB
    const comp = state.companies.find(c => c.name === user.companyName) || {};
    
    document.getElementById('recCompLogoPreview').innerHTML = getCompanyLogoHtml(comp.name, comp.id);
    document.getElementById('recCompTitle').textContent = comp.name || user.companyName;
    document.getElementById('recCompNameInput').value = comp.name || user.companyName;
    document.getElementById('recCompLogoInput').value = comp.logo || '';
    document.getElementById('recCompLocInput').value = comp.location || '';
    document.getElementById('recCompDescInput').value = comp.desc || '';
  } 
  else if (tab === 'password') {
    document.getElementById('recruiterPasswordTab').style.display = 'block';
  }
}

// RECRUITER ACTIONS
async function submitJobPost(e) {
  if (e) e.preventDefault();

  const id = document.getElementById('postIdInput').value;
  const title = document.getElementById('postTitle').value.trim();
  const salary = document.getElementById('postSalary').value.trim();
  const location = document.getElementById('postLocation').value;
  const type = document.getElementById('postType').value;
  const deadline = document.getElementById('postDeadline').value;
  const description = document.getElementById('postDesc').value.trim();
  const requirements = document.getElementById('postReq').value.trim();
  const benefits = document.getElementById('postBene').value.trim();

  if (!title || !salary || !deadline || !description || !requirements || !benefits) {
    showToast('Vui lòng điền đầy đủ thông tin tin tuyển dụng!', 'error');
    return;
  }

  // Find recruiter's company detail
  const user = state.currentUser;
  const comp = state.companies.find(c => c.name === user.companyName) || { id: user.companyId || 'c_new', name: user.companyName || 'Công ty mới đăng ký' };

  if (isBackendConnected) {
    try {
      if (id) {
        // Edit Mode
        const res = await fetch(`${API_BASE_URL}/jobs/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, salary, location, type, deadline, description, requirements, benefits })
        });
        if (res.ok) {
          const updated = await res.json();
          const idx = state.jobs.findIndex(j => j.id === id);
          if (idx !== -1) {
            state.jobs[idx] = updated;
          }
          showToast('Cập nhật tin tuyển dụng và gửi phê duyệt thành công!', 'success');
        } else {
          showToast('Lỗi cập nhật tin tuyển dụng trên backend!', 'error');
        }
      } else {
        // New Post Mode
        const res = await fetch(`${API_BASE_URL}/jobs`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title,
            companyId: comp.id,
            companyName: comp.name,
            salary,
            location,
            type,
            deadline,
            description,
            requirements,
            benefits,
            status: 'pending'
          })
        });
        if (res.ok) {
          const saved = await res.json();
          state.jobs.push(saved);
          showToast('Đăng tin tuyển dụng mới thành công! Chờ Admin phê duyệt.', 'success');
        } else {
          showToast('Lỗi đăng tin tuyển dụng lên backend!', 'error');
        }
      }
      // Reload jobs
      const reloadJobsRes = await fetch(`${API_BASE_URL}/jobs`);
      state.jobs = await reloadJobsRes.json();
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
    }
    renderRecruiterDashboard('jobs');
    return;
  }

  if (id) {
    // Edit Mode
    const jobIdx = state.jobs.findIndex(j => j.id === id);
    if (jobIdx !== -1) {
      state.jobs[jobIdx] = {
        ...state.jobs[jobIdx],
        title,
        salary,
        location,
        type,
        deadline,
        description,
        requirements,
        benefits,
        status: 'pending' // Re-moderation by Admin on edit!
      };
      showToast('Cập nhật tin tuyển dụng và gửi phê duyệt thành công!', 'success');
    }
  } else {
    // New Post Mode
    const newJob = {
      id: 'j_' + Date.now(),
      title,
      companyId: comp.id,
      companyName: comp.name,
      salary,
      location,
      type,
      deadline,
      description,
      requirements,
      benefits,
      status: 'pending', // Awaiting Admin Approval
      createdAt: new Date().toISOString().substring(0, 10)
    };
    state.jobs.push(newJob);
    showToast('Đăng tin tuyển dụng mới thành công! Chờ Admin phê duyệt.', 'success');
  }

  saveState();
  renderRecruiterDashboard('jobs');
}

function editJobPost(jobId) {
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) return;

  // Open the post tab
  renderRecruiterDashboard('post');

  // Fill in the form
  document.getElementById('jobPostFormHeader').textContent = 'Chỉnh sửa tin tuyển dụng';
  document.getElementById('postIdInput').value = job.id;
  document.getElementById('postTitle').value = job.title;
  document.getElementById('postSalary').value = job.salary;
  document.getElementById('postLocation').value = job.location;
  document.getElementById('postType').value = job.type;
  document.getElementById('postDeadline').value = job.deadline;
  document.getElementById('postDesc').value = job.description;
  document.getElementById('postReq').value = job.requirements;
  document.getElementById('postBene').value = job.benefits;
  document.getElementById('btnSubmitPost').textContent = 'Cập nhật tin tuyển dụng';
}

async function deleteJobPost(jobId) {
  if (confirm('Bạn có chắc chắn muốn xóa tin tuyển dụng này?')) {
    if (isBackendConnected) {
      try {
        const res = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          state.jobs = state.jobs.filter(j => j.id !== jobId);
          state.applications = state.applications.filter(a => a.jobId !== jobId);
          showToast('Đã xóa tin tuyển dụng thành công!', 'success');
        } else {
          showToast('Lỗi khi xóa tin tuyển dụng trên backend!', 'error');
        }
      } catch (err) {
        showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
      }
      renderRecruiterDashboard('jobs');
      return;
    }

    const idx = state.jobs.findIndex(j => j.id === jobId);
    if (idx !== -1) {
      state.jobs.splice(idx, 1);
      // Clean up applications related to this job
      state.applications = state.applications.filter(a => a.jobId !== jobId);
      saveState();
      showToast('Đã xóa tin tuyển dụng thành công!', 'success');
      renderRecruiterDashboard('jobs');
    }
  }
}

function updateAppStatus(appId, newStatus) {
  const app = state.applications.find(a => a.id === appId);
  if (app) {
    app.status = newStatus;
    saveState();
    showToast(`Đã ${newStatus === 'approved' ? 'chấp nhận' : 'từ chối'} ứng viên ${app.candidateName}!`, 'success');
    renderRecruiterDashboard('candidates');
  }
}

async function saveRecruiterCompany(e) {
  if (e) e.preventDefault();

  const newCompName = document.getElementById('recCompNameInput').value.trim();
  const logo = document.getElementById('recCompLogoInput').value.trim();
  const location = document.getElementById('recCompLocInput').value.trim();
  const desc = document.getElementById('recCompDescInput').value.trim();

  if (!newCompName || !logo || !location || !desc) {
    showToast('Vui lòng điền đầy đủ các trường thông tin công ty!', 'error');
    return;
  }

  const user = state.currentUser;
  
  let companyData = {
    name: newCompName,
    logo,
    location,
    desc
  };

  const compIdx = state.companies.findIndex(c => c.name === user.companyName);
  if (compIdx !== -1) {
    companyData.id = state.companies[compIdx].id;
    state.companies[compIdx].name = newCompName;
    state.companies[compIdx].logo = logo;
    state.companies[compIdx].location = location;
    state.companies[compIdx].desc = desc;
  } else {
    companyData.id = 'c_' + Date.now();
    state.companies.push(companyData);
  }

  if (isBackendConnected) {
    try {
      await fetch(`${API_BASE_URL}/companies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(companyData)
      });
      await fetch(`${API_BASE_URL}/users/${user.id}/company`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ companyName: newCompName, companyId: companyData.id })
      });
      const reloadCompsRes = await fetch(`${API_BASE_URL}/companies`);
      state.companies = await reloadCompsRes.json();
      const usersRes = await fetch(`${API_BASE_URL}/users`);
      state.users = await usersRes.json();
    } catch (err) {
      console.error(err);
    }
  }

  user.companyName = newCompName;
  user.companyId = companyData.id;
  const userIdx = state.users.findIndex(u => u.id === user.id);
  if (userIdx !== -1) {
    state.users[userIdx].companyName = newCompName;
    state.users[userIdx].companyId = companyData.id;
  }

  state.jobs.forEach(j => {
    if (j.companyId === user.companyId || (j.companyId === user.companyId || j.companyName === user.companyName)) {
      j.companyName = newCompName;
    }
  });

  saveState();
  showToast('Cập nhật thông tin công ty thành công!', 'success');
  renderRecruiterDashboard('company');
}

// Candidate Profile Inspector Simulation for Recruiters
function simulateViewCV(candidateEmail, cvName) {
  const candidate = state.users.find(u => u.email === candidateEmail && u.role === 'candidate');
  if (!candidate) {
    showToast('Không tìm thấy thông tin ứng viên!', 'error');
    return;
  }

  const inspectorModal = document.getElementById('candidateInspectorModal');
  const detailsContent = document.getElementById('candidateInspectorContent');

  if (!inspectorModal || !detailsContent) return;

  detailsContent.innerHTML = `
    <div class="profile-layout" style="grid-template-columns: 1fr; gap: 20px;">
      <div style="text-align: center; border-bottom:1px solid var(--border-color); padding-bottom: 20px;">
        <div class="avatar-preview" style="width: 80px; height: 80px; font-size: 28px; margin: 0 auto 12px;">${candidate.name.charAt(0).toUpperCase()}</div>
        <h3 style="font-size: 20px;">${candidate.name}</h3>
        <p style="color:var(--primary); font-weight:600; font-size:13px; margin-top:4px;">${candidate.title || 'Chưa cập nhật'}</p>
      </div>
      
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; font-size:13px;">
        <div>
          <span style="color:var(--text-muted); display:block; margin-bottom:4px; text-transform:uppercase;">📧 Email liên hệ</span>
          <strong>${candidate.email}</strong>
        </div>
        <div>
          <span style="color:var(--text-muted); display:block; margin-bottom:4px; text-transform:uppercase;">📞 Số điện thoại</span>
          <strong>${candidate.phone}</strong>
        </div>
      </div>

      <div style="border-top:1px solid var(--border-color); padding-top: 16px;">
        <h4 style="font-size:14px; margin-bottom:8px;">Kinh nghiệm làm việc</h4>
        <p style="font-size:13px; color:var(--text-muted); line-height:1.5;">${candidate.experience || 'Chưa cập nhật thông tin kinh nghiệm.'}</p>
      </div>

      <div style="border-top:1px solid var(--border-color); padding-top: 16px;">
        <h4 style="font-size:14px; margin-bottom:8px;">Kỹ năng chuyên môn</h4>
        <p style="font-size:13px; color:var(--text-muted); line-height:1.5;">${candidate.skills || 'Chưa cập nhật kỹ năng.'}</p>
      </div>

      <div style="border-top:1px solid var(--border-color); padding-top: 16px;">
        <h4 style="font-size:14px; margin-bottom:8px;">CV Đính kèm</h4>
        <div class="cv-preview-box">
          <div class="cv-info">
            <span class="cv-icon" style="font-size:20px;">📄</span>
            <div>
              <div class="cv-name">${cvName}</div>
              <div class="cv-size">${candidate.cvSize || 'Kích thước chưa rõ'}</div>
            </div>
          </div>
          <button class="btn btn-outline" onclick="showToast('Đang tải xuống CV...', 'info')" style="padding: 6px 12px; font-size:12px;">Tải xuống</button>
        </div>
      </div>
    </div>
  `;

  inspectorModal.classList.add('active');
}

function closeInspectorModal() {
  const inspectorModal = document.getElementById('candidateInspectorModal');
  if (inspectorModal) inspectorModal.classList.remove('active');
}

// ----------------- ADMIN ACTIONS & DASHBOARD -----------------
async function renderAdminDashboard(tab = 'stats') {
  const menuItems = document.querySelectorAll('#adminSidebar .sidebar-item');
  menuItems.forEach(item => {
    if (item.dataset.tab === tab) item.classList.add('active');
    else item.classList.remove('active');
  });

  // Hide all sections
  document.getElementById('adminStatsTab').style.display = 'none';
  document.getElementById('adminUsersTab').style.display = 'none';
  document.getElementById('adminJobsTab').style.display = 'none';
  document.getElementById('adminViolationsTab').style.display = 'none';
  document.getElementById('adminPasswordTab').style.display = 'none';

  if (tab === 'stats') {
    document.getElementById('adminStatsTab').style.display = 'block';
    
    // Total numbers
    document.getElementById('admTotalUsers').textContent = state.users.length;
    document.getElementById('admTotalJobs').textContent = state.jobs.length;
    document.getElementById('admTotalApps').textContent = state.applications.length;
    document.getElementById('admTotalPendingJobs').textContent = state.jobs.filter(j => j.status === 'pending').length;

    // Render Admin charts
    renderAdminStatsCharts();
  } 
  else if (tab === 'users') {
    document.getElementById('adminUsersTab').style.display = 'block';
    
    const tableBody = document.getElementById('adminUsersTableBody');
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color:var(--text-muted);">Đang tải danh sách người dùng...</td></tr>`;

    if (isBackendConnected) {
      try {
        const usersRes = await fetch(`${API_BASE_URL}/users`);
        state.users = await usersRes.json();
      } catch (uErr) {
        console.error("Failed to load users from backend", uErr);
      }
    }

    tableBody.innerHTML = '';

    state.users.forEach((u, idx) => {
      // Don't show admin's own lock button
      const actionButton = u.role === 'admin' ? 
        `<span style="color:var(--text-muted); font-size:12px;">Quản trị viên</span>` : 
        `<button class="btn ${u.locked ? 'btn-success' : 'btn-danger'}" onclick="toggleUserLock('${u.id}')" style="padding: 6px 12px; font-size:12px; min-width: 90px;">
          ${u.locked ? 'Mở khóa' : 'Khóa'}
        </button>`;

      const roleBadge = u.role === 'candidate' ? 
        `<span class="badge badge-location" style="background-color:rgba(59, 130, 246, 0.1);">Ứng viên</span>` : 
        (u.role === 'recruiter' ? `<span class="badge badge-salary" style="background-color:rgba(16, 185, 129, 0.1);">Nhà tuyển dụng</span>` : `<span class="badge badge-type" style="background-color:rgba(79, 70, 229, 0.1);">Admin</span>`);

      const statusBadge = u.locked ? 
        `<span class="badge badge-rejected">Đã khóa</span>` : 
        `<span class="badge badge-approved">Hoạt động</span>`;

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td style="font-weight:600;">${u.name}</td>
        <td>${u.email}</td>
        <td>${roleBadge}</td>
        <td>${statusBadge}</td>
        <td>${actionButton}</td>
      `;
      tableBody.appendChild(tr);
    });
  } 
  else if (tab === 'jobs') {
    document.getElementById('adminJobsTab').style.display = 'block';
    
    const tableBody = document.getElementById('adminModerationTableBody');
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color:var(--text-muted);">Đang tải danh sách tin tuyển dụng...</td></tr>`;

    if (isBackendConnected) {
      try {
        const jobsRes = await fetch(`${API_BASE_URL}/jobs`);
        state.jobs = await jobsRes.json();
      } catch (jErr) {
        console.error("Failed to load jobs from backend", jErr);
      }
    }

    tableBody.innerHTML = '';

    const pendingJobs = state.jobs.filter(j => j.status === 'pending');

    if (pendingJobs.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color:var(--text-muted);">Không có tin tuyển dụng nào cần kiểm duyệt.</td></tr>`;
      return;
    }

    pendingJobs.forEach((job, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td style="font-weight:600;"><a href="#" onclick="event.preventDefault(); viewJobDetails('${job.id}')" style="color:var(--primary); text-decoration:underline;">${job.title}</a></td>
        <td>${job.companyName}</td>
        <td>📍 ${job.location}</td>
        <td>⏳ Hạn nộp: ${formatDate(job.deadline)}</td>
        <td>
          <div style="display:flex; gap:6px;">
            <button class="btn btn-success" onclick="approveJob('${job.id}')" style="padding: 6px 12px; font-size:11px;">Phê duyệt</button>
            <button class="btn btn-danger" onclick="rejectJob('${job.id}')" style="padding: 6px 12px; font-size:11px;">Từ chối</button>
          </div>
        </td>
      `;
      tableBody.appendChild(tr);
    });
  } 
  else if (tab === 'violations') {
    document.getElementById('adminViolationsTab').style.display = 'block';
    
    const tableBody = document.getElementById('adminViolationsTableBody');
    tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color:var(--text-muted);">Đang tải danh sách báo cáo vi phạm...</td></tr>`;

    if (isBackendConnected) {
      try {
        const violationsRes = await fetch(`${API_BASE_URL}/violations`);
        state.violations = await violationsRes.json();
      } catch (vErr) {
        console.error("Failed to load violations from backend", vErr);
      }
    }

    tableBody.innerHTML = '';

    if (state.violations.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 24px; color:var(--text-muted);">Không có báo cáo vi phạm nào.</td></tr>`;
      return;
    }

    state.violations.forEach((violation, idx) => {
      const tr = document.createElement('tr');
      tr.className = violation.status === 'resolved' ? 'resolved-row' : '';
      
      const resolveBtn = violation.status === 'pending' ? 
        `<button class="btn btn-success" onclick="resolveViolation('${violation.id}')" style="padding: 6px 12px; font-size:11px;">Đã giải quyết</button>` : 
        `<span style="color:var(--success); font-size:12px;">✔️ Đã xử lý</span>`;

      tr.innerHTML = `
        <td>${idx + 1}</td>
        <td>${violation.reporter}</td>
        <td>${violation.targetName} (${violation.targetType})</td>
        <td style="max-width: 250px; white-space: normal; line-height: 1.4;">${violation.reason}</td>
        <td><span class="badge ${violation.status === 'pending' ? 'badge-pending' : 'badge-approved'}">${violation.status === 'pending' ? 'Chưa xử lý' : 'Đã xử lý'}</span></td>
        <td>${resolveBtn}</td>
      `;
      tableBody.appendChild(tr);
    });
  }
  else if (tab === 'password') {
    document.getElementById('adminPasswordTab').style.display = 'block';
  }
}

// ADMIN ACTIONS
async function toggleUserLock(userId) {
  const user = state.users.find(u => u.id === userId);
  if (!user) return;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/users/${userId}/lock`, {
        method: 'PUT'
      });
      if (res.ok) {
        const updatedUser = await res.json();
        user.locked = updatedUser.locked;
        showToast(`Đã ${user.locked ? 'Khóa' : 'Mở khóa'} tài khoản ${user.name} thành công!`, 'success');
        renderAdminDashboard('users');
      } else {
        showToast('Lỗi khi cập nhật trạng thái tài khoản trên backend!', 'error');
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
    }
    return;
  }

  user.locked = !user.locked;
  saveState();
  showToast(`Đã ${user.locked ? 'Khóa' : 'Mở khóa'} tài khoản ${user.name} thành công!`, 'success');
  renderAdminDashboard('users');
}

async function approveJob(jobId) {
  const job = state.jobs.find(j => j.id === jobId);
  if (!job) return;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/jobs/${jobId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'approved' })
      });
      if (res.ok) {
        job.status = 'approved';
        
        // Sync company job count
        const compIdx = state.companies.findIndex(c => c.name === job.companyName);
        if (compIdx !== -1) {
          state.companies[compIdx].jobsCount = state.jobs.filter(j => j.companyName === job.companyName && j.status === 'approved').length;
        }
        
        showToast(`Phê duyệt thành công tin tuyển dụng: ${job.title}!`, 'success');
      } else {
        showToast('Lỗi khi phê duyệt tin tuyển dụng trên backend!', 'error');
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
    }
    renderAdminDashboard('jobs');
    return;
  }

  job.status = 'approved';
  
  // Sync company job count
  const compIdx = state.companies.findIndex(c => c.name === job.companyName);
  if (compIdx !== -1) {
    state.companies[compIdx].jobsCount = state.jobs.filter(j => j.companyName === job.companyName && j.status === 'approved').length;
  }

  saveState();
  showToast(`Phê duyệt thành công tin tuyển dụng: ${job.title}!`, 'success');
  renderAdminDashboard('jobs');
}

async function rejectJob(jobId) {
  if (confirm('Bạn có chắc muốn từ chối và xóa tin tuyển dụng này?')) {
    if (isBackendConnected) {
      try {
        const res = await fetch(`${API_BASE_URL}/jobs/${jobId}`, {
          method: 'DELETE'
        });
        if (res.ok) {
          state.jobs = state.jobs.filter(j => j.id !== jobId);
          showToast('Đã từ chối và loại bỏ tin tuyển dụng thành công!', 'warning');
        } else {
          showToast('Lỗi khi từ chối tin tuyển dụng trên backend!', 'error');
        }
      } catch (err) {
        showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
      }
      renderAdminDashboard('jobs');
      return;
    }

    const idx = state.jobs.findIndex(j => j.id === jobId);
    if (idx !== -1) {
      state.jobs.splice(idx, 1);
      saveState();
      showToast('Đã từ chối và loại bỏ tin tuyển dụng thành công!', 'warning');
      renderAdminDashboard('jobs');
    }
  }
}

async function resolveViolation(violationId) {
  const violation = state.violations.find(v => v.id === violationId);
  if (!violation) return;

  if (isBackendConnected) {
    try {
      const res = await fetch(`${API_BASE_URL}/violations/${violationId}/resolve`, {
        method: 'PUT'
      });
      if (res.ok) {
        violation.status = 'resolved';
        showToast('Đã cập nhật trạng thái xử lý báo cáo!', 'success');
      } else {
        showToast('Lỗi khi giải quyết báo cáo trên backend!', 'error');
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu backend!', 'error');
    }
    renderAdminDashboard('violations');
    return;
  }

  violation.status = 'resolved';
  saveState();
  showToast('Đã cập nhật trạng thái xử lý báo cáo!', 'success');
  renderAdminDashboard('violations');
}

// ----------------- SVG CHARTS RENDERING FUNCTIONS -----------------
function renderRecruiterStatsChart() {
  const chartContainer = document.getElementById('recruiterChartContainer');
  if (!chartContainer) return;

  // Let's create a beautiful SVG bar chart representing Application counts per Job Title
  const user = state.currentUser;
  const companyJobs = state.jobs.filter(j => (j.companyId === user.companyId || j.companyName === user.companyName)).slice(0, 5); // take max 5
  
  if (companyJobs.length === 0) {
    chartContainer.innerHTML = `<div style="text-align:center; padding: 48px; color:var(--text-muted); font-size:14px;">Đăng tuyển công việc để hiển thị biểu đồ thống kê ứng viên.</div>`;
    return;
  }

  const chartData = companyJobs.map(job => {
    const appCount = state.applications.filter(a => a.jobId === job.id).length;
    return {
      title: job.title.length > 15 ? job.title.substring(0, 15) + '...' : job.title,
      count: appCount
    };
  });

  const maxVal = Math.max(...chartData.map(d => d.count), 5); // min ceiling is 5
  
  let svgBars = '';
  let svgLabels = '';
  
  chartData.forEach((d, idx) => {
    const barWidth = 36;
    const barSpacing = 70;
    const chartHeight = 150;
    const xPos = 50 + idx * barSpacing;
    const barHeight = (d.count / maxVal) * chartHeight;
    const yPos = 170 - barHeight;

    svgBars += `
      <rect x="${xPos}" y="${yPos}" width="${barWidth}" height="${barHeight}" fill="url(#recChartGradient)" rx="4" class="svg-bar">
        <title>Công việc: ${d.title} - ${d.count} hồ sơ</title>
      </rect>
      <text x="${xPos + barWidth/2}" y="${yPos - 8}" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">${d.count}</text>
    `;
    
    svgLabels += `
      <text x="${xPos + barWidth/2}" y="190" text-anchor="middle" fill="var(--text-muted)" font-size="9" transform="rotate(-15, ${xPos + barWidth/2}, 190)">${d.title}</text>
    `;
  });

  chartContainer.innerHTML = `
    <svg class="svg-chart" viewBox="0 0 420 220" style="background-color:var(--bg-primary); border-radius:var(--radius-md);">
      <defs>
        <linearGradient id="recChartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#00b14f" />
          <stop offset="100%" stop-color="#14a800" />
        </linearGradient>
      </defs>
      <!-- Grid lines -->
      <line x1="30" y1="170" x2="400" y2="170" stroke="var(--border-color)" stroke-width="1" />
      <line x1="30" y1="95" x2="400" y2="95" stroke="var(--border-color)" stroke-dasharray="4" stroke-width="1" />
      <line x1="30" y1="20" x2="400" y2="20" stroke="var(--border-color)" stroke-dasharray="4" stroke-width="1" />
      
      <!-- Bars & Count Labels -->
      ${svgBars}
      
      <!-- Axis labels -->
      ${svgLabels}
    </svg>
  `;
}

function renderAdminStatsCharts() {
  const chart1 = document.getElementById('adminChartContainer1');
  const chart2 = document.getElementById('adminChartContainer2');

  if (!chart1 || !chart2) return;

  // Chart 1: User registrations monthly trend (SVG Line Chart simulation)
  // Let's create an elegant smooth area/line path
  chart1.innerHTML = `
    <svg class="svg-chart" viewBox="0 0 400 200" style="background-color:var(--bg-primary); border-radius:var(--radius-md); padding:10px;">
      <defs>
        <linearGradient id="adminLineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#00b14f" />
          <stop offset="100%" stop-color="#14a800" />
        </linearGradient>
        <linearGradient id="adminAreaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(0, 177, 79, 0.2)" />
          <stop offset="100%" stop-color="rgba(0, 177, 79, 0)" />
        </linearGradient>
      </defs>
      <!-- Grid -->
      <line x1="30" y1="160" x2="380" y2="160" stroke="var(--border-color)" />
      <line x1="30" y1="90" x2="380" y2="90" stroke="var(--border-color)" stroke-dasharray="3" />
      <line x1="30" y1="20" x2="380" y2="20" stroke="var(--border-color)" stroke-dasharray="3" />
      
      <!-- Path & Area -->
      <path d="M 40 140 Q 100 120 160 50 T 280 80 T 370 30 L 370 160 L 40 160 Z" fill="url(#adminAreaGrad)" />
      <path d="M 40 140 Q 100 120 160 50 T 280 80 T 370 30" fill="none" stroke="url(#adminLineGrad)" stroke-width="4" stroke-linecap="round" />
      
      <!-- Dots -->
      <circle cx="40" cy="140" r="4" fill="#00b14f" stroke="#fff" stroke-width="1" />
      <circle cx="100" cy="120" r="4" fill="#00b14f" stroke="#fff" stroke-width="1" />
      <circle cx="160" cy="50" r="4" fill="#14a800" stroke="#fff" stroke-width="1" />
      <circle cx="280" cy="80" r="4" fill="#14a800" stroke="#fff" stroke-width="1" />
      <circle cx="370" cy="30" r="4" fill="#14a800" stroke="#fff" stroke-width="1" />

      <!-- Labels -->
      <text x="40" y="180" text-anchor="middle" fill="var(--text-muted)" font-size="10">T2</text>
      <text x="100" y="180" text-anchor="middle" fill="var(--text-muted)" font-size="10">T3</text>
      <text x="160" y="180" text-anchor="middle" fill="var(--text-muted)" font-size="10">T4</text>
      <text x="280" y="180" text-anchor="middle" fill="var(--text-muted)" font-size="10">T5</text>
      <text x="370" y="180" text-anchor="middle" fill="var(--text-muted)" font-size="10">T6</text>
    </svg>
  `;

  // Chart 2: Applications per category distribution (SVG Bar Chart)
  const appData = [
    { cat: 'Java', count: 12 },
    { cat: 'Frontend', count: 18 },
    { cat: 'Mobile', count: 8 },
    { cat: 'DevOps', count: 5 },
    { cat: 'UI/UX', count: 9 }
  ];

  let bars = '';
  appData.forEach((d, idx) => {
    const xPos = 40 + idx * 70;
    const barHeight = d.count * 7;
    const yPos = 160 - barHeight;
    bars += `
      <rect x="${xPos}" y="${yPos}" width="30" height="${barHeight}" fill="var(--primary)" rx="3" class="svg-bar" />
      <text x="${xPos + 15}" y="${yPos - 6}" text-anchor="middle" fill="#fff" font-size="10" font-weight="600">${d.count}</text>
      <text x="${xPos + 15}" y="178" text-anchor="middle" fill="var(--text-muted)" font-size="9">${d.cat}</text>
    `;
  });

  chart2.innerHTML = `
    <svg class="svg-chart" viewBox="0 0 400 200" style="background-color:var(--bg-primary); border-radius:var(--radius-md); padding:10px;">
      <!-- Grid -->
      <line x1="30" y1="160" x2="380" y2="160" stroke="var(--border-color)" />
      <line x1="30" y1="95" x2="380" y2="95" stroke="var(--border-color)" stroke-dasharray="3" />
      <line x1="30" y1="30" x2="380" y2="30" stroke="var(--border-color)" stroke-dasharray="3" />
      
      <!-- Bars & Labels -->
      ${bars}
    </svg>
  `;
}

// ----------------- UTILITIES -----------------
function formatDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}

// INITIAL STARTUP
window.onload = async function() {
  await loadState();
  handleRouting();
};

window.onhashchange = handleRouting;

// ----------------- FLOATING WIDGETS LOGIC & DIALOGS (TopCV Style) -----------------
function updateFloatingWidgets() {
  const badge = document.getElementById('floatingSavedBadge');
  if (!badge) return;
  if (state.currentUser) {
    const count = state.savedJobs.filter(sj => sj.userId === state.currentUser.id).length;
    badge.textContent = count;
  } else {
    badge.textContent = 0;
  }
}

function handleFloatingSavedJobsClick() {
  if (!state.currentUser) {
    showToast('Vui lòng đăng nhập để xem danh sách việc làm đã lưu!', 'warning');
    navigateTo('login');
    return;
  }
  if (state.currentUser.role === 'candidate') {
    navigateTo('candidate-dashboard');
    setTimeout(() => {
      // Toggle sidebar tab active state
      document.querySelectorAll('#candidateSidebar .sidebar-item').forEach(item => {
        if (item.getAttribute('data-tab') === 'saved') {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      // Sửa hiển thị tab tương ứng
      const profileTab = document.getElementById('candidateProfileTab');
      const trackingTab = document.getElementById('candidateTrackingTab');
      const savedTab = document.getElementById('candidateSavedTab');
      const passwordTab = document.getElementById('candidatePasswordTab');
      
      if (profileTab) profileTab.style.display = 'none';
      if (trackingTab) trackingTab.style.display = 'none';
      if (savedTab) savedTab.style.display = 'block';
      if (passwordTab) passwordTab.style.display = 'none';
      
      // Render saved jobs
      renderCandidateSavedJobs();
    }, 150);
  } else {
    showToast('Chức năng này dành cho tài khoản Ứng viên!', 'info');
  }
}

// Custom renderer for candidate saved jobs helper
function renderCandidateSavedJobs() {
  const container = document.getElementById('candidateSavedList');
  if (!container) return;
  container.innerHTML = '';

  const userSaved = state.savedJobs.filter(sj => sj.userId === state.currentUser.id);
  const savedJobIds = userSaved.map(sj => sj.jobId);
  const jobsToRender = state.jobs.filter(j => savedJobIds.includes(j.id) && j.status === 'approved');

  if (jobsToRender.length === 0) {
    container.innerHTML = `<div class="db-panel" style="grid-column: span 2; text-align:center; padding: 32px; color:var(--text-muted);">Bạn chưa lưu công việc nào.</div>`;
    return;
  }

  jobsToRender.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';
    card.innerHTML = `
      <div class="job-card-top">
        <div class="company-logo">${getCompanyLogoHtml(job.companyName, job.companyId)}</div>
        <div class="job-info">
          <h3 onclick="viewJobDetails('${job.id}')">${job.title}</h3>
          <div class="job-company">${job.companyName}</div>
          <div class="job-badges">
            <span class="badge badge-salary">💵 ${job.salary}</span>
            <span class="badge badge-location">📍 ${job.location}</span>
          </div>
        </div>
      </div>
      <div class="job-card-bottom">
        <span class="job-deadline">⏳ Hạn nộp: ${formatDate(job.deadline)}</span>
        <div class="job-actions">
          <button class="bookmark-btn active" onclick="toggleSaveJob(event, '${job.id}'); renderCandidateSavedJobs();" title="Bỏ lưu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
          <button class="btn btn-primary" onclick="viewJobDetails('${job.id}')">Xem chi tiết</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function copySiteLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('Đã sao chép liên kết trang web vào bộ nhớ tạm!', 'success');
  }).catch(() => {
    showToast('Không thể tự động sao chép liên kết, vui lòng copy trên thanh địa chỉ!', 'warning');
  });
}

// FEEDBACK MODAL DIALOG
let selectedFeedbackRating = 5;

function openFeedbackDialog() {
  const modal = document.getElementById('feedbackModal');
  if (modal) {
    modal.classList.add('active');
    // Prefill name and email if logged in
    if (state.currentUser) {
      document.getElementById('feedbackName').value = state.currentUser.name;
      document.getElementById('feedbackEmail').value = state.currentUser.email;
    } else {
      document.getElementById('feedbackName').value = '';
      document.getElementById('feedbackEmail').value = '';
    }
    document.getElementById('feedbackMessage').value = '';
    setFeedbackRating(5);
  }
}

function closeFeedbackDialog() {
  const modal = document.getElementById('feedbackModal');
  if (modal) modal.classList.remove('active');
}

function setFeedbackRating(rating) {
  selectedFeedbackRating = rating;
  const stars = document.querySelectorAll('#feedbackStars .star-icon');
  stars.forEach((star, idx) => {
    if (idx < rating) {
      star.classList.add('active');
    } else {
      star.classList.remove('active');
    }
  });
}

async function submitFeedbackAction(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('feedbackName').value.trim();
  const email = document.getElementById('feedbackEmail').value.trim();
  const message = document.getElementById('feedbackMessage').value.trim();

  if (isBackendConnected) {
    const feedback = {
      name,
      email,
      rating: selectedFeedbackRating,
      message
    };
    try {
      const res = await fetch(`${API_BASE_URL}/feedbacks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      });
      if (res.ok) {
        const savedFeedback = await res.json();
        if (!state.feedbacks) state.feedbacks = [];
        state.feedbacks.push(savedFeedback);
        showToast('Cảm ơn bạn đã gửi ý kiến đóng góp cho PremiumJob!', 'success');
        closeFeedbackDialog();
      }
    } catch (err) {
      showToast('Lỗi kết nối cơ sở dữ liệu!', 'error');
    }
    return;
  }
  
  if (!state.feedbacks) state.feedbacks = [];
  state.feedbacks.push({
    id: 'fb_' + Date.now(),
    name,
    email,
    rating: selectedFeedbackRating,
    message,
    date: new Date().toISOString().split('T')[0]
  });
  saveState();
  showToast('Cảm ơn bạn đã gửi ý kiến đóng góp cho PremiumJob!', 'success');
  closeFeedbackDialog();
}

// SUPPORT MODAL DIALOG
function openSupportDialog() {
  const modal = document.getElementById('supportModal');
  if (modal) {
    modal.classList.add('active');
    // Reset chat
    const chatMsg = document.getElementById('supportChatMessages');
    chatMsg.innerHTML = '<div class="chat-bubble bot">Xin chào! Tôi có thể giúp gì cho bạn hôm nay? Hãy chọn các câu hỏi FAQ trên hoặc nhập tin nhắn của bạn bên dưới.</div>';
    document.getElementById('supportChatInput').value = '';
  }
}

function closeSupportDialog() {
  const modal = document.getElementById('supportModal');
  if (modal) modal.classList.remove('active');
}

function toggleFaq(element) {
  const answer = element.nextElementSibling;
  const arrow = element.querySelector('span:last-child');
  if (answer.style.display === 'none' || !answer.style.display) {
    answer.style.display = 'block';
    arrow.textContent = '▲';
  } else {
    answer.style.display = 'none';
    arrow.textContent = '▼';
  }
}

function handleChatKeyPress(e) {
  if (e.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('supportChatInput');
  const text = input.value.trim();
  if (!text) return;
  
  const chatMsg = document.getElementById('supportChatMessages');
  
  // Append user message
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.textContent = text;
  chatMsg.appendChild(userBubble);
  
  input.value = '';
  chatMsg.scrollTop = chatMsg.scrollHeight;
  
  // Simulated automated response
  setTimeout(() => {
    const botBubble = document.createElement('div');
    botBubble.className = 'chat-bubble bot';
    
    const lowerText = text.toLowerCase();
    let reply = 'Cảm ơn bạn đã gửi câu hỏi. Chúng tôi đã ghi nhận yêu cầu hỗ trợ của bạn và sẽ phản hồi qua email trong thời gian sớm nhất.';
    
    if (lowerText.includes('lưu') || lowerText.includes('việc làm') || lowerText.includes('saved')) {
      reply = 'Để lưu việc làm, bạn chỉ cần đăng nhập tài khoản Ứng viên và nhấn nút Trái tim trên thẻ tin tuyển dụng.';
    } else if (lowerText.includes('avatar') || lowerText.includes('đổi thông tin') || lowerText.includes('hồ sơ') || lowerText.includes('profile')) {
      reply = 'Bạn hãy vào trang Dashboard Ứng viên -> mục Hồ sơ cá nhân để chỉnh sửa thông tin đại diện và CV của mình.';
    } else if (lowerText.includes('tải cv') || lowerText.includes('cv') || lowerText.includes('pdf')) {
      reply = 'Hệ thống hỗ trợ đính kèm CV định dạng file .pdf trực tiếp khi bạn ứng tuyển hoặc tải lên trong mục Hồ sơ cá nhân.';
    } else if (lowerText.includes('tuyển dụng') || lowerText.includes('đăng tin') || lowerText.includes('recruiter')) {
      reply = 'Nếu bạn là Nhà tuyển dụng, hãy đăng ký tài khoản Nhà tuyển dụng, truy cập Dashboard và chọn mục Đăng tin tuyển dụng.';
    } else if (lowerText.includes('chào') || lowerText.includes('hi') || lowerText.includes('hello')) {
      reply = 'Xin chào! Trợ lý ảo PremiumJob có thể hỗ trợ bạn các thông tin về lưu việc làm, cập nhật CV, ứng tuyển hoặc đăng tin tuyển dụng. Bạn cần hỗ trợ mục nào?';
    }
    
    botBubble.textContent = reply;
    chatMsg.appendChild(botBubble);
    chatMsg.scrollTop = chatMsg.scrollHeight;
  }, 800);
}

// ----------------- FOOTER DIRECTORY FILTERS -----------------
function filterJobsByIndustry(industry) {
  let keyword = industry;
  if (industry.includes("Công Nghệ Thông Tin") || industry.includes("IT")) keyword = "Java";
  else if (industry.includes("Tài Chính") || industry.includes("Ngân Hàng")) keyword = "tài chính";
  else if (industry.includes("Kế Toán")) keyword = "kế toán";
  else if (industry.includes("Marketing")) keyword = "marketing";
  else if (industry.includes("Nhân Sự")) keyword = "nhân sự";
  else if (industry.includes("Xây dựng")) keyword = "xây dựng";
  
  const kwInput = document.getElementById('jobsBoardKeyword');
  if (kwInput) kwInput.value = keyword;
  
  const locSelect = document.getElementById('jobsBoardLocation');
  if (locSelect) locSelect.value = '';
  
  const typeSelect = document.getElementById('jobsBoardType');
  if (typeSelect) typeSelect.value = '';
  
  navigateTo('jobs');
  renderJobsBoard();
}

function filterJobsByLocation(loc) {
  let mappedLoc = loc;
  if (loc.includes("Hồ Chí Minh") || loc.includes("HCM")) mappedLoc = "TP. HCM";
  else if (loc.includes("Hà Nội")) mappedLoc = "Hà Nội";
  else if (loc.includes("Đà Nẵng")) mappedLoc = "Đà Nẵng";
  
  const select = document.getElementById('jobsBoardLocation');
  if (select) {
    let exists = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === mappedLoc) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      const opt = document.createElement('option');
      opt.value = mappedLoc;
      opt.textContent = mappedLoc;
      select.appendChild(opt);
    }
    select.value = mappedLoc;
  }
  
  const kwInput = document.getElementById('jobsBoardKeyword');
  if (kwInput) kwInput.value = '';
  
  const typeSelect = document.getElementById('jobsBoardType');
  if (typeSelect) typeSelect.value = '';
  
  navigateTo('jobs');
  renderJobsBoard();
}

function filterJobsByRequirement(req) {
  const typeSelect = document.getElementById('jobsBoardType');
  const kwInput = document.getElementById('jobsBoardKeyword');
  const locSelect = document.getElementById('jobsBoardLocation');
  
  if (kwInput) kwInput.value = '';
  if (locSelect) locSelect.value = '';
  
  if (req.includes("Part-time")) {
    if (typeSelect) typeSelect.value = "Part-time";
  } else if (req.includes("Remote")) {
    if (typeSelect) typeSelect.value = "Remote";
  } else if (req.includes("Online")) {
    if (typeSelect) typeSelect.value = "Remote";
  } else if (req.includes("Tuyển Gấp")) {
    if (typeSelect) typeSelect.value = "";
    if (kwInput) kwInput.value = "Senior";
  } else if (req.includes("Nổi Bật")) {
    if (typeSelect) typeSelect.value = "";
    if (kwInput) kwInput.value = "Architect";
  } else {
    if (typeSelect) typeSelect.value = "";
  }
  
  navigateTo('jobs');
  renderJobsBoard();
}

function handleCompanyFilter(category) {
  currentCompanyCategoryFilter = category;
  if (window.location.hash === '#companies') {
    renderCompaniesView(category);
  } else {
    navigateTo('companies');
  }
}

function handleCompanyHeaderClick() {
  currentCompanyCategoryFilter = '';
  if (window.location.hash === '#companies') {
    renderCompaniesView('');
  } else {
    navigateTo('companies');
  }
}

// ----------------- CV & AI ACTIONS -----------------
function handleCVAction(action) {
  if (!state.currentUser) {
    checkAccess('cv');
    return;
  }
  if (state.currentUser.role !== 'candidate') {
    showToast('Tính năng này chỉ hỗ trợ tài khoản Ứng viên!', 'warning');
    return;
  }

  if (action === 'create') {
    openCVBuilderModal();
  } else if (action === 'upload') {
    navigateTo('candidate-dashboard');
    renderCandidateDashboard('profile');
    setTimeout(() => {
      const cvBlock = document.getElementById('candCVBlock');
      if (cvBlock) cvBlock.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  } else if (action === 'create-ai') {
    openAiCVGeneratorModal();
  } else if (action === 'evaluate-ai') {
    openAiCVEvaluatorModal();
  }
}

// MODAL CONTROL: CV BUILDER
function openCVBuilderModal() {
  const modal = document.getElementById('cvBuilderModal');
  if (modal) {
    document.getElementById('cvBuildName').value = state.currentUser.name || '';
    document.getElementById('cvBuildTitle').value = state.currentUser.title || '';
    document.getElementById('cvBuildPhone').value = state.currentUser.phone || '';
    document.getElementById('cvBuildEmail').value = state.currentUser.email || '';
    document.getElementById('cvBuildSkills').value = state.currentUser.skills || '';
    document.getElementById('cvBuildExp').value = state.currentUser.experience || '';
    modal.classList.add('active');
  }
}

function closeCVBuilderModal() {
  const modal = document.getElementById('cvBuilderModal');
  if (modal) modal.classList.remove('active');
}

function submitCVBuilder(e) {
  if (e) e.preventDefault();
  
  const user = state.currentUser;
  user.name = document.getElementById('cvBuildName').value.trim();
  user.title = document.getElementById('cvBuildTitle').value.trim();
  user.phone = document.getElementById('cvBuildPhone').value.trim();
  user.skills = document.getElementById('cvBuildSkills').value.trim();
  user.experience = document.getElementById('cvBuildExp').value.trim();
  user.cvName = 'CV_' + user.name.replace(/\s+/g, '') + '.pdf';
  user.cvSize = '1.1 MB';
  
  const idx = state.users.findIndex(u => u.id === user.id);
  if (idx !== -1) state.users[idx] = user;
  
  saveState();
  
  // Sync to database if backend connected
  if (isBackendConnected) {
    fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    }).catch(err => console.log('Sync to backend failed', err));
  }
  
  showToast('Đã khởi tạo và lưu CV thành công!', 'success');
  closeCVBuilderModal();
  
  if (window.location.hash.includes('candidate-dashboard')) {
    renderCandidateDashboard('profile');
  }
}

// MODAL CONTROL: AI CV GENERATOR
function openAiCVGeneratorModal() {
  const modal = document.getElementById('aiCVGeneratorModal');
  if (modal) {
    document.getElementById('aiCVPrompt').value = '';
    document.getElementById('aiCVGeneratingLoader').style.display = 'none';
    document.getElementById('aiCVGeneratorFooter').style.display = 'flex';
    modal.classList.add('active');
  }
}

function closeAiCVGeneratorModal() {
  const modal = document.getElementById('aiCVGeneratorModal');
  if (modal) modal.classList.remove('active');
}

function generateCVWithAI() {
  const prompt = document.getElementById('aiCVPrompt').value.trim();
  if (!prompt) {
    showToast('Vui lòng nhập mô tả vị trí/kỹ năng bạn mong muốn!', 'error');
    return;
  }
  
  document.getElementById('aiCVGeneratingLoader').style.display = 'block';
  document.getElementById('aiCVGeneratorFooter').style.display = 'none';
  
  setTimeout(() => {
    const user = state.currentUser;
    user.cvName = 'CV_AI_' + user.name.replace(/\s+/g, '') + '.pdf';
    user.cvSize = '1.4 MB';
    
    // Parse prompt to extract skills or title
    let detectedTitle = 'AI Professional Specialist';
    let detectedSkills = user.skills || '';
    let detectedExp = user.experience || '';
    
    const lowerPrompt = prompt.toLowerCase();
    if (lowerPrompt.includes('nodejs') || lowerPrompt.includes('node')) {
      detectedTitle = 'NodeJS Developer';
      detectedSkills = (detectedSkills ? detectedSkills + ', ' : '') + 'NodeJS, Express, MongoDB, RESTful API';
      detectedExp = 'Dự án AI CV Builder: Thiết kế hệ thống Backend NodeJS REST API hoàn chỉnh.';
    } else if (lowerPrompt.includes('react') || lowerPrompt.includes('frontend')) {
      detectedTitle = 'ReactJS Developer';
      detectedSkills = (detectedSkills ? detectedSkills + ', ' : '') + 'ReactJS, HTML5, CSS3, TailwindCSS, ES6';
      detectedExp = 'Dự án AI CV Builder: Xây dựng giao diện responsive và tương tác động với ReactJS.';
    } else if (lowerPrompt.includes('java') || lowerPrompt.includes('backend')) {
      detectedTitle = 'Java Backend Engineer';
      detectedSkills = (detectedSkills ? detectedSkills + ', ' : '') + 'Java, Spring Boot, Spring Security, Hibernate, SQL Server';
      detectedExp = 'Dự án AI CV Builder: Thiết lập kiến trúc microservices và kết nối CSDL SQL Server.';
    } else {
      detectedTitle = 'Software Engineer (AI Generated)';
      detectedSkills = (detectedSkills ? detectedSkills + ', ' : '') + 'Software Engineering, Git, Clean Code, SDLC';
      detectedExp = 'Hoàn thiện hồ sơ năng lực do AI xây dựng dựa trên thông tin mong muốn.';
    }
    
    user.title = detectedTitle;
    user.skills = detectedSkills;
    user.experience = (detectedExp ? detectedExp + '\n' : '') + 'Từng tham gia học tập và triển khai đồ án thực tế.';
    
    const idx = state.users.findIndex(u => u.id === user.id);
    if (idx !== -1) state.users[idx] = user;
    
    saveState();
    
    // Sync to database if backend connected
    if (isBackendConnected) {
      fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }).catch(err => console.log('Sync to backend failed', err));
    }
    
    showToast('AI đã hoàn thiện CV chuẩn ATS thành công!', 'success');
    closeAiCVGeneratorModal();
    
    if (window.location.hash.includes('candidate-dashboard')) {
      renderCandidateDashboard('profile');
    }
  }, 2500);
}

// MODAL CONTROL: AI CV EVALUATOR
function openAiCVEvaluatorModal() {
  const modal = document.getElementById('aiCVEvaluatorModal');
  const body = document.getElementById('aiCVEvaluatorBody');
  if (!modal || !body) return;

  const user = state.currentUser;
  const skillsCount = user.skills ? user.skills.split(',').length : 0;
  const expLength = user.experience ? user.experience.length : 0;
  
  let score = 55;
  if (user.cvName) score += 10;
  score += Math.min(20, skillsCount * 4);
  score += Math.min(20, Math.floor(expLength / 10));
  score = Math.min(95, score); // Max 95
  
  let scoreClass = 'danger';
  if (score >= 80) scoreClass = 'success';
  else if (score >= 60) scoreClass = 'warning';
  
  let strengths = [];
  let recommendations = [];
  
  if (user.cvName) {
    strengths.push('Đã đính kèm file CV cá nhân định dạng chuẩn.');
  } else {
    recommendations.push('Nên đính kèm file CV PDF để nhà tuyển dụng dễ dàng đánh giá.');
  }
  
  if (skillsCount >= 4) {
    strengths.push(`Kỹ năng phong phú (${skillsCount} kỹ năng chuyên môn).`);
  } else {
    recommendations.push('Cần bổ sung thêm các công cụ, ngôn ngữ lập trình cụ thể để tăng tỷ lệ lọc ATS.');
  }
  
  if (expLength > 50) {
    strengths.push('Có tóm tắt kinh nghiệm dự án rõ ràng.');
  } else {
    recommendations.push('Hãy bổ sung chi tiết vai trò của bạn trong các dự án học tập hoặc thực tế.');
  }
  
  if (user.phone && user.phone.length > 8) {
    strengths.push('Thông tin liên hệ (số điện thoại, email) đầy đủ.');
  } else {
    recommendations.push('Cập nhật lại số điện thoại chính xác để nhà tuyển dụng liên hệ phỏng vấn.');
  }

  // Recommended Jobs
  const matchingJobs = state.jobs.filter(j => {
    if (j.status !== 'approved') return false;
    const titleMatch = user.title ? j.title.toLowerCase().includes(user.title.toLowerCase()) : false;
    const skillsMatch = user.skills ? user.skills.split(',').some(sk => j.title.toLowerCase().includes(sk.trim().toLowerCase())) : false;
    return titleMatch || skillsMatch;
  }).slice(0, 2);
  
  let jobsHtml = '';
  if (matchingJobs.length > 0) {
    jobsHtml = `
      <div style="margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 16px;">
        <h4 style="font-size: 14px; font-weight:700; margin-bottom:12px; color: var(--primary);">💼 Việc làm AI đề xuất cho bạn:</h4>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${matchingJobs.map(j => `
            <div style="display:flex; justify-content:space-between; align-items:center; background: rgba(0,0,0,0.1); padding: 10px 16px; border-radius: var(--radius-md);">
              <div>
                <strong style="font-size:13.5px; color:var(--text-main);">${j.title}</strong>
                <div style="font-size:12px; color:var(--text-muted);">${j.companyName} | 💵 ${j.salary}</div>
              </div>
              <button class="btn btn-primary" onclick="closeAiCVEvaluatorModal(); viewJobDetails('${j.id}');" style="padding: 6px 12px; font-size:12px;">Xem chi tiết</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else {
    jobsHtml = `
      <div style="margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 16px;">
        <h4 style="font-size: 14px; font-weight:700; margin-bottom:8px; color: var(--text-muted);">💼 Việc làm đề xuất:</h4>
        <p style="font-size:12.5px; color:var(--text-muted);">Đang cập nhật thêm dữ liệu việc làm phù hợp với tiêu đề của bạn.</p>
      </div>
    `;
  }

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:24px; background:rgba(0,177,79,0.05); padding:16px 20px; border-radius:var(--radius-lg); border:1px solid rgba(0,177,79,0.15);">
      <div style="width: 70px; height: 70px; border-radius:50%; background:var(--bg-secondary); border: 4px solid var(--border-color); display:flex; align-items:center; justify-content:center; font-size:22px; font-weight:800; color: var(--${scoreClass});">
        ${score}%
      </div>
      <div>
        <h4 style="font-size:16px; font-weight:700; color:var(--text-main);">Điểm tương thích CV (ATS Score)</h4>
        <p style="font-size:13px; color:var(--text-muted); margin-top:4px;">Hồ sơ của bạn đạt mức độ đánh giá: <strong style="color:var(--${scoreClass})">${score >= 80 ? 'Rất Tốt' : (score >= 60 ? 'Khá' : 'Cần Cải Thiện')}</strong></p>
      </div>
    </div>
    
    <div style="margin-top:20px; display:grid; grid-template-columns:1fr 1fr; gap:20px;">
      <div>
        <h4 style="font-size: 14px; font-weight:700; margin-bottom:10px; color: var(--success);">✔️ Điểm mạnh của CV:</h4>
        <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px; font-size:13px; color:var(--text-muted);">
          ${strengths.map(s => `<li>🟢 ${s}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 style="font-size: 14px; font-weight:700; margin-bottom:10px; color: var(--warning);">⚠️ Góp ý cải thiện:</h4>
        <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:8px; font-size:13px; color:var(--text-muted);">
          ${recommendations.length > 0 ? recommendations.map(r => `<li>🟠 ${r}</li>`).join('') : '<li>🟢 Không có góp ý lớn. CV rất chuyên nghiệp!</li>'}
        </ul>
      </div>
    </div>
    
    ${jobsHtml}
  `;
  
  modal.classList.add('active');
}

function closeAiCVEvaluatorModal() {
  const modal = document.getElementById('aiCVEvaluatorModal');
  if (modal) modal.classList.remove('active');
}

// Auto database seeder for SQL Server backend database
async function seedDatabaseIfNeeded() {
  if (!isBackendConnected) return;

  try {
    const compsRes = await fetch(`${API_BASE_URL}/companies`);
    const currentCompanies = await compsRes.json();
    
    // If database has fewer than 14 companies or contains any .png logos, seed/update them
    if (currentCompanies.length < 14 || currentCompanies.some(c => c.logo && c.logo.includes('.png') && c.id !== 'c1' && c.id !== 'c2' && c.id !== 'c3' && c.id !== 'c4' && c.id !== 'c5')) {
      console.log("Seeding / Updating companies & jobs to SQL Server backend database...");
      
      const newComps = [
        { id: 'c_vcb', name: 'Vietcombank', logo: 'assets/vietcombank.svg', description: 'Ngân hàng Ngoại thương Việt Nam - Ngân hàng thương mại cổ phần hàng đầu quốc gia.', location: 'Hà Nội' },
        { id: 'c_pru', name: 'Prudential Insurance', logo: 'assets/prudential.svg', description: 'Tập đoàn bảo hiểm nhân thọ Prudential Việt Nam cung cấp giải pháp tài chính và bảo vệ tối ưu.', location: 'TP. HCM' },
        { id: 'c_cotec', name: 'Coteccons Construction', logo: 'assets/coteccons.svg', description: 'Công ty cổ phần xây dựng Coteccons - Tổng thầu xây dựng hàng đầu Việt Nam.', location: 'TP. HCM' },
        { id: 'c_vinfast', name: 'VinFast Manufacturing', logo: 'assets/vinfast.svg', description: 'Nhà sản xuất ô tô và xe máy điện VinFast - Đột phá công nghệ sản xuất giao thông xanh.', location: 'Hải Phòng' },
        { id: 'c_gg', name: 'Golden Gate Restaurant', logo: 'assets/goldengate.svg', description: 'Tập đoàn ẩm thực Golden Gate sở hữu chuỗi nhà hàng Kichi Kichi, GoGi House, Sumo BBQ...', location: 'Hà Nội' },
        { id: 'c_vinpearl', name: 'Vinpearl Hotels', logo: 'assets/vinpearl.svg', description: 'Thương hiệu khách sạn và dịch vụ du lịch nghỉ dưỡng Vinpearl đẳng cấp 5 sao quốc tế.', location: 'Đà Nẵng' },
        { id: 'c_vinmec', name: 'Vinmec Hospital', logo: 'assets/vinmec.svg', description: 'Hệ thống y tế phi lợi nhuận Vinmec tiêu chuẩn quốc tế JCI chất lượng cao.', location: 'Hà Nội' },
        { id: 'c_vinhomes', name: 'Vinhomes Real Estate', logo: 'assets/vinhomes.svg', description: 'Thương hiệu bất động sản Vinhomes - Kiến tạo các khu đô thị văn minh hiện đại hàng đầu.', location: 'TP. HCM' },
        { id: 'c_fptedu', name: 'FPT Education', logo: 'assets/fptedu.svg', description: 'Tổ chức giáo dục FPT Education - Cung cấp chất lượng đào tạo và nghiên cứu chuẩn quốc tế.', location: 'Đà Nẵng' },
        { id: 'c_concentrix', name: 'Concentrix', logo: 'assets/concentrix.svg', description: 'Tập đoàn Concentrix cung cấp dịch vụ hỗ trợ khách hàng và giải pháp trải nghiệm khách hàng toàn cầu.', location: 'TP. HCM' }
      ];

      for (const comp of newComps) {
        const existing = currentCompanies.find(c => c.id === comp.id || c.name === comp.name);
        if (!existing || (existing.logo && existing.logo.includes('.png'))) {
          const res = await fetch(`${API_BASE_URL}/companies`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comp)
          });
          if (res.ok) {
            console.log(`Seeded/Updated company: ${comp.name}`);
          }
        }
      }

      // Seed corresponding jobs
      const jobsRes = await fetch(`${API_BASE_URL}/jobs`);
      const currentJobs = await jobsRes.json();

      const newJobs = [
        {
          id: 'j_vcb',
          title: 'Chuyên viên Phát triển Ứng dụng Tài chính',
          companyId: 'c_vcb',
          companyName: 'Vietcombank',
          salary: '1,200 - 2,200 USD',
          location: 'Hà Nội',
          type: 'Full-time',
          deadline: '2026-08-15',
          description: 'Tham gia xây dựng các hệ thống dịch vụ ngân hàng số VCB Digibank, tối ưu hóa giao dịch và bảo mật tài khoản cho hàng triệu khách hàng.',
          requirements: 'Có kinh nghiệm lập trình Java Web, Spring Boot hoặc Oracle DB. Hiểu biết về bảo mật tài chính ngân hàng.',
          benefits: 'Lương thưởng 20+ tháng lương/năm. Chế độ chăm sóc sức khỏe Vietcombank Care.',
          status: 'approved'
        },
        {
          id: 'j_pru',
          title: 'Data Analyst (Bảo Hiểm)',
          companyId: 'c_pru',
          companyName: 'Prudential Insurance',
          salary: '1,000 - 1,800 USD',
          location: 'TP. HCM',
          type: 'Full-time',
          deadline: '2026-08-20',
          description: 'Phân tích dữ liệu khách hàng, dự đoán tỷ lệ rủi ro và tối ưu hóa các gói bảo hiểm chăm sóc sức khỏe.',
          requirements: 'Có trên 1 năm kinh nghiệm làm phân tích dữ liệu, thành thạo Python, SQL và các công cụ PowerBI / Tableau.',
          benefits: 'Đóng bảo hiểm cao cấp Prudential. Hỗ trợ học tập nâng cao chứng chỉ nghề nghiệp.',
          status: 'approved'
        },
        {
          id: 'j_cotec',
          title: 'Kỹ sư Giám sát Xây dựng Dự án',
          companyId: 'c_cotec',
          companyName: 'Coteccons Construction',
          salary: '1,000 - 1,500 USD',
          location: 'TP. HCM',
          type: 'Full-time',
          deadline: '2026-08-10',
          description: 'Giám sát kỹ thuật, an toàn lao động và chất lượng thi công tại các công trình cao tầng lớn.',
          requirements: 'Tốt nghiệp Đại học chuyên ngành Xây dựng Dân dụng & Công nghiệp. Đọc bản vẽ và quản lý nhà thầu phụ tốt.',
          benefits: 'Hỗ trợ ăn ca, phụ cấp công trường hấp dẫn. Thưởng cuối năm theo dự án.',
          status: 'approved'
        },
        {
          id: 'j_vinfast',
          title: 'Kỹ sư Thiết kế Hệ thống IoT Xe điện',
          companyId: 'c_vinfast',
          companyName: 'VinFast Manufacturing',
          salary: '1,500 - 2,500 USD',
          location: 'Hải Phòng',
          type: 'Full-time',
          deadline: '2026-08-30',
          description: 'Nghiên cứu tích hợp các giải pháp điều khiển thông minh và kết nối vạn vật (IoT) cho hệ sinh thái ô tô điện VinFast.',
          requirements: 'Thành thạo lập trình C/C++, Embedded System hoặc giao tiếp xe hơi (CAN, LIN).',
          benefits: 'Hưởng ưu đãi đặc quyền mua xe điện VinFast. Xe đưa đón từ Hà Nội đến Hải Phòng làm việc hàng ngày.',
          status: 'approved'
        },
        {
          id: 'j_gg',
          title: 'Quản lý Chuỗi Nhà Hàng Kichi Kichi',
          companyId: 'c_gg',
          companyName: 'Golden Gate Restaurant',
          salary: '12 - 18 triệu VND',
          location: 'Hà Nội',
          type: 'Full-time',
          deadline: '2026-08-05',
          description: 'Điều hành hoạt động, quản lý đội ngũ nhân sự phục vụ và nâng cao chất lượng dịch vụ khách hàng tại nhà hàng.',
          requirements: 'Có 2 năm kinh nghiệm quản lý nhà hàng F&B. Kỹ năng giao tiếp và xử lý tình huống khéo léo.',
          benefits: 'Thưởng doanh số hàng tháng hấp dẫn. Cơ hội thăng tiến lên Quản lý Vùng.',
          status: 'approved'
        },
        {
          id: 'j_vinpearl',
          title: 'Trưởng bộ phận Lễ tân Khách sạn',
          companyId: 'c_vinpearl',
          companyName: 'Vinpearl Hotels',
          salary: '15 - 25 triệu VND',
          location: 'Đà Nẵng',
          type: 'Full-time',
          deadline: '2026-08-25',
          description: 'Quản lý quầy lễ tân đón tiếp khách du lịch quốc tế, giải quyết các phản hồi của khách du lịch.',
          requirements: 'Tiếng Anh giao tiếp lưu loát. Có ngoại hình ưa nhìn và kinh nghiệm làm việc tại khách sạn 4-5 sao.',
          benefits: 'Cung cấp phòng ở miễn phí tại khu nghỉ dưỡng Vinpearl. Phụ cấp trang phục.',
          status: 'approved'
        },
        {
          id: 'j_vinmec',
          title: 'Bác sĩ Đa khoa/Chuyên khoa Y tế',
          companyId: 'c_vinmec',
          companyName: 'Vinmec Hospital',
          salary: 'Thỏa thuận',
          location: 'Hà Nội',
          type: 'Full-time',
          deadline: '2026-09-01',
          description: 'Khám chữa bệnh và tư vấn sức khỏe cho bệnh nhân tại Bệnh viện đa khoa quốc tế Vinmec.',
          requirements: 'Có chứng chỉ hành nghề Y. Tốt nghiệp Bác sĩ nội trú hoặc có kinh nghiệm làm việc tại bệnh viện tuyến đầu.',
          benefits: 'Đãi ngộ hàng đầu ngành y. Môi trường trang thiết bị y tế hiện đại bậc nhất.',
          status: 'approved'
        },
        {
          id: 'j_vinhomes',
          title: 'Chuyên viên Tư vấn Bất động sản Vinhomes',
          companyId: 'c_vinhomes',
          companyName: 'Vinhomes Real Estate',
          salary: 'Thỏa thuận',
          location: 'TP. HCM',
          type: 'Full-time',
          deadline: '2026-08-15',
          description: 'Tư vấn, bán các căn hộ cao cấp và biệt thự sinh thái trong các dự án Vinhomes Grand Park, Vinhomes Ocean Park.',
          requirements: 'Có kỹ năng giao tiếp tốt, đam mê kinh doanh bất động sản. Có xe máy cá nhân.',
          benefits: 'Hoa hồng hoa hồng cực cao không giới hạn. Được đào tạo bài bản từ A-Z.',
          status: 'approved'
        },
        {
          id: 'j_fptedu',
          title: 'Giảng viên Công nghệ Thông tin',
          companyId: 'c_fptedu',
          companyName: 'FPT Education',
          salary: '15 - 25 triệu VND',
          location: 'Đà Nẵng',
          type: 'Part-time',
          deadline: '2026-08-20',
          description: 'Giảng dạy các bộ môn Lập trình Web Java, Cấu trúc dữ liệu và giải thuật tại trường Đại học FPT Đà Nẵng.',
          requirements: 'Có bằng Thạc sĩ chuyên ngành CNTT trở lên. Nhiệt huyết và có kỹ năng sư phạm truyền cảm hứng tốt.',
          benefits: 'Phụ cấp giờ dạy cao. Tham gia teambuilding định kỳ FPT.',
          status: 'approved'
        },
        {
          id: 'j_concentrix',
          title: 'Chuyên viên Hỗ trợ Khách hàng Toàn cầu',
          companyId: 'c_concentrix',
          companyName: 'Concentrix',
          salary: '12 - 20 triệu VND',
          location: 'TP. HCM',
          type: 'Full-time',
          deadline: '2026-08-28',
          description: 'Hỗ trợ và chăm sóc khách hàng quốc tế qua các kênh chat, email và điện thoại cho đối tác doanh nghiệp lớn tại Mỹ và châu Âu.',
          requirements: 'Tiếng Anh B2 trở lên. Kỹ năng giao tiếp và xử lý tình huống tốt. Ưu tiên có kinh nghiệm Customer Service.',
          benefits: 'Lương tháng 13. Bảo hiểm sức khỏe cao cấp Concentrix Care. Thưởng KPI hàng quý. Đào tạo bài bản từ A-Z.',
          status: 'approved'
        }
      ];

      for (const job of newJobs) {
        if (!currentJobs.some(j => j.id === job.id || j.title === job.title)) {
          const res = await fetch(`${API_BASE_URL}/jobs`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(job)
          });
          if (res.ok) {
            const saved = await res.json();
            // Automatically approve seeded jobs so they show up
            await fetch(`${API_BASE_URL}/jobs/${saved.id}/status`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ status: 'approved' })
            });
            console.log(`Seeded and approved job: ${job.title}`);
          }
        }
      }
      
      // Reload state after seeding
      const reloadJobsRes = await fetch(`${API_BASE_URL}/jobs`);
      state.jobs = await reloadJobsRes.json();
      const reloadCompsRes = await fetch(`${API_BASE_URL}/companies`);
      state.companies = await reloadCompsRes.json();
    }
  } catch (err) {
    console.error("Error seeding database:", err);
  }
}

// ----------------- ROTATING TEAM PROMO BANNER CAROUSEL -----------------
let promoCarouselInitialized = false;
let currentPromoSlideIndex = 0;
let promoInterval = null;
let currentJobsSort = 'all';

function setJobsSort(sortType) {
  currentJobsSort = sortType;
  renderJobsBoard();
}

function parseSalaryValue(salaryStr) {
  if (!salaryStr) return 0;
  const str = salaryStr.toLowerCase().replace(/,/g, '');
  if (str.includes('thỏa thuận') || str.includes('thoa thuan')) {
    return 0;
  }
  const numbers = str.match(/\d+/g);
  if (!numbers || numbers.length === 0) return 0;
  let val = Math.max(...numbers.map(Number));
  if (str.includes('usd')) {
    val = val * 25000;
  } else if (str.includes('triệu') || str.includes('trieu')) {
    val = val * 1000000;
  }
  return val;
}

function initPromoCarousel() {
  const container = document.getElementById('teamPromoCarousel');
  if (!container) return;
  
  if (promoCarouselInitialized) return;
  
  container.innerHTML = `
    <div class="promo-carousel-slides" id="promoCarouselSlides">

      <!-- Slide 0: Thành viên mới - Concentrix (FIRST) -->
      <div class="promo-slide active" style="background: linear-gradient(150deg, #ffffff 55%, #dbeafe 100%);">
        <div class="promo-badge" style="background:#1d4ed8;">TUYỂN DỤNG</div>
        <div class="promo-company-logo">
          <img src="assets/concentrix.svg" alt="Concentrix">
        </div>
        <h3 class="promo-role-title">CHUYÊN VIÊN<br><span style="color:#1d4ed8;">HỖ TRỢ KHÁCH HÀNG</span></h3>
        <div class="promo-benefits-list">
          <div class="promo-benefit-item">Thu nhập hấp dẫn: <strong>12 - 20 triệu/tháng</strong></div>
          <div class="promo-benefit-item">Làm việc giờ hành chính linh hoạt</div>
          <div class="promo-benefit-item">Bảo hiểm sức khỏe Concentrix Care</div>
          <div class="promo-benefit-item">Thưởng KPI & thăng tiến nhanh</div>
        </div>
        <div class="promo-footer">
          <button class="promo-apply-btn" style="background:#1d4ed8;" onclick="viewJobDetails('j_concentrix')">ỨNG TUYỂN NGAY</button>
          <div class="promo-meta">
            <span>📍 TP. HCM</span>
            <span>✉️ contact@jobsgo.vn</span>
          </div>
        </div>
        <div class="promo-model-img promo-model-nobg">
          <img id="promoMember4Img" src="assets/team_member4.jpg" alt="Thành viên nhóm">
        </div>
      </div>

      <!-- Slide 1: Phạm Trương Vĩ Khang -->
      <div class="promo-slide" style="background: linear-gradient(150deg, #ffffff 50%, #fde8ec 100%);">
        <div class="promo-badge" style="background:#e11d48;">TUYỂN DỤNG</div>
        <div class="promo-company-logo">
          <img src="assets/prudential.svg" alt="Prudential">
        </div>
        <h3 class="promo-role-title">PHÓ GIÁM ĐỐC<br><span style="color:#e11d48;">PHỤ TRÁCH CƠ ĐIỆN</span></h3>
        <div class="promo-benefits-list">
          <div class="promo-benefit-item">Thu nhập lên đến: <strong>40 - 60 triệu/tháng</strong></div>
          <div class="promo-benefit-item">Đóng bảo hiểm xã hội đầy đủ theo luật</div>
          <div class="promo-benefit-item">Cung cấp đồng phục làm việc sang xịn</div>
          <div class="promo-benefit-item">Được khám sức khỏe định kỳ, nghỉ mát</div>
        </div>
        <div class="promo-footer">
          <button class="promo-apply-btn" style="background:#e11d48;" onclick="viewJobDetails('j_pru')">ỨNG TUYỂN NGAY</button>
          <div class="promo-meta">
            <span>📍 Hưng Yên</span>
            <span>✉️ contact@jobsgo.vn</span>
          </div>
        </div>
        <div class="promo-model-img promo-model-nobg">
          <img id="promoMember1Img" src="assets/team_member1.png" alt="Phạm Trương Vĩ Khang">
        </div>
      </div>

      <!-- Slide 2: Nguyễn Hữu Gia Huy -->
      <div class="promo-slide" style="background: linear-gradient(150deg, #ffffff 50%, #d1fae5 100%);">
        <div class="promo-badge" style="background:#059669;">TUYỂN DỤNG</div>
        <div class="promo-company-logo">
          <img src="assets/vietcombank.svg" alt="Vietcombank">
        </div>
        <h3 class="promo-role-title">KỸ SƯ HỆ THỐNG<br><span style="color:#059669;">THIẾT KẾ CƠ SỞ DỮ LIỆU</span></h3>
        <div class="promo-benefits-list">
          <div class="promo-benefit-item">Thu nhập trung bình: <strong>25 - 45 triệu/tháng</strong></div>
          <div class="promo-benefit-item">Thưởng dự án và hiệu quả vượt trội</div>
          <div class="promo-benefit-item">Gói bảo hiểm Vietcombank Care cao cấp</div>
          <div class="promo-benefit-item">Đào tạo chuyên sâu AI & Big Data</div>
        </div>
        <div class="promo-footer">
          <button class="promo-apply-btn" style="background:#059669;" onclick="viewJobDetails('j_vcb')">ỨNG TUYỂN NGAY</button>
          <div class="promo-meta">
            <span>📍 Hà Nội</span>
            <span>✉️ contact@jobsgo.vn</span>
          </div>
        </div>
        <div class="promo-model-img promo-model-nobg">
          <img id="promoMember2Img" src="assets/team_member2.jpg" alt="Nguyễn Hữu Gia Huy">
        </div>
      </div>

      <!-- Slide 3: Phan Ngọc Phong -->
      <div class="promo-slide" style="background: linear-gradient(150deg, #fffbeb 50%, #fef3c7 100%);">
        <div class="promo-badge" style="background:#d97706;">TUYỂN DỤNG</div>
        <div class="promo-company-logo">
          <img src="assets/fptedu.svg" alt="FPT Education">
        </div>
        <h3 class="promo-role-title">GIẢNG VIÊN CNTT<br><span style="color:#d97706;">PHỤ TRÁCH ĐÀO TẠO AI</span></h3>
        <div class="promo-benefits-list">
          <div class="promo-benefit-item">Thu nhập thỏa thuận: <strong>Lên đến 35 triệu/tháng</strong></div>
          <div class="promo-benefit-item">Môi trường giáo dục FPT sáng tạo</div>
          <div class="promo-benefit-item">Hỗ trợ 50% học phí tại FPT School</div>
          <div class="promo-benefit-item">Review lương 2 lần/năm cực hấp dẫn</div>
        </div>
        <div class="promo-footer">
          <button class="promo-apply-btn" style="background:#d97706;" onclick="viewJobDetails('j_fptedu')">ỨNG TUYỂN NGAY</button>
          <div class="promo-meta">
            <span>📍 Đà Nẵng</span>
            <span>✉️ contact@jobsgo.vn</span>
          </div>
        </div>
        <div class="promo-model-img promo-model-nobg">
          <img id="promoMember3Img" src="assets/team_member3.jpg" alt="Phan Ngọc Phong">
        </div>
      </div>
    </div>
    
    <!-- Carousel Dots -->
    <div class="promo-carousel-dots" id="promoCarouselDots">
      <span class="promo-dot active" onclick="setPromoSlide(0)"></span>
      <span class="promo-dot" onclick="setPromoSlide(1)"></span>
      <span class="promo-dot" onclick="setPromoSlide(2)"></span>
      <span class="promo-dot" onclick="setPromoSlide(3)"></span>
    </div>
  `;

  promoCarouselInitialized = true;
  startPromoCarousel();

  // Xóa nền xanh tất cả ảnh thành viên có nền xanh bằng Canvas API
  setTimeout(() => {
    const toProcess = [
      document.getElementById('promoMember4Img'),  // Concentrix - áo trắng nền xanh
      document.getElementById('promoMember1Img'),  // Prudential  - áo trắng nền xanh
      document.getElementById('promoMember2Img'),  // Vietcombank - áo sáng nền xanh
      document.getElementById('promoMember3Img'),  // FPT Edu     - áo sáng nền xanh
    ];
    toProcess.forEach(img => {
      if (!img) return;
      if (img.complete && img.naturalWidth > 0) {
        removeBlueBg(img);
      } else {
        img.onload = () => removeBlueBg(img);
      }
    });
  }, 150);
}

function startPromoCarousel() {
  if (promoInterval) clearInterval(promoInterval);
  promoInterval = setInterval(() => {
    currentPromoSlideIndex = (currentPromoSlideIndex + 1) % 4;
    setPromoSlide(currentPromoSlideIndex);
  }, 4000);
}

// ---- XÓA NỀN XANH BẰNG CANVAS API ----
function removeBlueBg(img) {
  try {
    const canvas = document.createElement('canvas');
    const w = img.naturalWidth  || img.width  || 400;
    const h = img.naturalHeight || img.height || 600;
    canvas.width  = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);

    const imageData = ctx.getImageData(0, 0, w, h);
    const d = imageData.data;

    for (let i = 0; i < d.length; i += 4) {
      const r = d[i], g = d[i + 1], b = d[i + 2];

      // Phát hiện pixel xanh dương (blue tarp): b cao nhất, vượt trội hơn r và g rõ rệt
      const isBlue = b > 80
        && b > r + 40
        && b > g + 20
        && b > (r + g) * 0.65;

      if (isBlue) {
        // Tính độ "xanh" để làm mờ dần (edge feathering)
        const strength = Math.min(1, (b - Math.max(r, g) - 20) / 90);
        d[i + 3] = Math.round(d[i + 3] * Math.max(0, 1 - strength));
      }
    }

    ctx.putImageData(imageData, 0, 0);
    // Thay src bằng ảnh đã xử lý (PNG có alpha)
    img.src = canvas.toDataURL('image/png');
    // Xóa các CSS blend mode cũ
    img.style.mixBlendMode = 'normal';
    img.style.filter = 'none';
    console.log('✅ Đã xóa nền xanh ảnh team_member4 bằng Canvas API');
  } catch (e) {
    console.warn('Canvas bg removal error:', e);
  }
}

function setPromoSlide(index) {
  currentPromoSlideIndex = index;
  const slides = document.querySelectorAll('.promo-slide');
  const dots = document.querySelectorAll('.promo-dot');
  
  if (slides.length === 0) return;

  slides.forEach((slide, i) => {
    if (i === index) slide.classList.add('active');
    else slide.classList.remove('active');
  });

  dots.forEach((dot, i) => {
    if (i === index) dot.classList.add('active');
    else dot.classList.remove('active');
  });
}
