import { getProjectBySlug } from '@/data/project';
import { NextResponse } from 'next/server';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const GET = async (request: Request, { params }: Props) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (project) {
    return NextResponse.json(project);
  } else {
    return NextResponse.json({ message: 'Project not found' }, { status: 404 });
  }
};
