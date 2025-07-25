const projectsData = [
  {
    id: 1,
    slug: 'du-an-thuong-mai-dien-tu',
    title: 'Dự án Website Thương mại điện tử ABC',
    description: 'Xây dựng trang web e-commerce với Next.js và Stripe.',
    content:
      'Đây là nội dung chi tiết về dự án TMĐT. Chúng tôi đã sử dụng các công nghệ như Next.js cho frontend, Node.js cho backend và tích hợp cổng thanh toán Stripe để xử lý giao dịch trực tuyến.',
    lastModified: '2024-05-20T10:00:00Z',
    imageUrl:
      'https://moc247.com/wp-content/uploads/2023/12/tuyen-tap-99-anh-bau-troi-dep-nhe-nhang-binh-yen-tam-trang_1-1.jpg',
  },
  {
    id: 2,
    slug: 'ung-dung-quan-ly-cong-viec',
    title: 'Ứng dụng Quản lý công việc TeamWork',
    description: 'Phát triển ứng dụng SaaS giúp quản lý công việc nhóm.',
    content:
      'Ứng dụng này giúp các đội nhóm theo dõi tiến độ công việc, phân công nhiệm vụ và báo cáo hiệu quả. Ứng dụng được xây dựng hoàn toàn bằng TypeScript, đảm bảo hiệu suất và tính ổn định cao.',
    lastModified: '2024-04-15T11:30:00Z',
    imageUrl:
      'https://moc247.com/wp-content/uploads/2023/12/tuyen-tap-99-anh-bau-troi-dep-nhe-nhang-binh-yen-tam-trang_1-1.jpg',
  },
  {
    id: 3,
    slug: 'portfolio-ca-nhan-toi-uu',
    title: 'Trang Portfolio Cá nhân Tối ưu SEO',
    description: 'Thiết kế và phát triển portfolio cá nhân với Next.js.',
    content:
      'Trang portfolio này được xây dựng với mục tiêu đạt điểm Lighthouse cao, tối ưu SEO và tốc độ tải trang. Sử dụng kỹ thuật rendering hiệu quả, lazy loading hình ảnh, và cấu trúc semantic HTML.',
    lastModified: '2024-03-10T14:00:00Z',
    imageUrl:
      'https://moc247.com/wp-content/uploads/2023/12/tuyen-tap-99-anh-bau-troi-dep-nhe-nhang-binh-yen-tam-trang_1-1.jpg',
  },
];

export const getAllProjects = () => {
  return projectsData.map(({ id, slug, title, description, lastModified }) => ({
    id,
    slug,
    title,
    description,
    lastModified,
  }));
};

export const getProjectBySlug = (slug: string) => {
  return projectsData.find((p) => p.slug == slug);
};
