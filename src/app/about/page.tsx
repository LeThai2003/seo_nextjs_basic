import { getProjectBySlug } from '@/data/project';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // ---- read route params
  return {
    title: 'Trang giới thiệu',
    description: `Chi tiết về trang giới thiệu`,
  };
}

export default async function AboutPage({ params, searchParams }: Props) {
  return (
    <>
      <p>Giới thiệu về tôi</p>
    </>
  );
}
