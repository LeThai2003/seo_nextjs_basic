import { getAllProjects } from '@/data/project';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const projects = getAllProjects();
  return NextResponse.json(projects);
};
