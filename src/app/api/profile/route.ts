import ProfileService from '@/services/profileService';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const service: ProfileService = new ProfileService();
  await service.init();
  const { count, rows } = await service.getAll();
  return Response.json({ count, rows });
}
