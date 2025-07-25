import { getProjectBySlug } from '@/data/project';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // ---- read route params
  const { slug } = params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: 'Dự án không tồn tại',
      description: 'Không tìm thấy thông tin dự án',
    };
  }
  return {
    title: project.title,
    description: `Chi tiết về dự án: ${project.title}`,
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) return <p>Không tìm thấy dự án</p>;

  return (
    <>
      <p>Project name: {project?.title}</p>
      {/* <img src={project.imageUrl} alt={project.title} width="500" height="600" /> */}
      <Image
        src={project.imageUrl}
        alt={project?.title || 'Anh chi tiet du an'}
        width={500}
        height={300}
      />
    </>
  );
}
