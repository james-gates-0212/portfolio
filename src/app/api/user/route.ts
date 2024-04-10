import UserService from '@/services/userService';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const service: UserService = new UserService();
  await service.init();
  const { count, rows } = await service.getAll();
  return Response.json({ count, rows });
}
