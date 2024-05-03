import ExperienceService from '@/services/experienceService';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const service: ExperienceService = new ExperienceService();
  await service.init();
  const data = await request.json();
  const { count, rows } = await service.getAll(data);
  return Response.json({ count, rows });
}
