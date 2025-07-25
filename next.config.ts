import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL(
        'https://moc247.com/wp-content/uploads/2023/12/tuyen-tap-99-anh-bau-troi-dep-nhe-nhang-binh-yen-tam-trang_1-1.jpg'
      ),
    ],
  },
};

export default nextConfig;
