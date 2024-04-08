import UserService from '@/services/userService';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const service: UserService = new UserService();
    await service.init();

    const data = await request.json();

    const { id } = params;

    const recId = parseInt(id) || 0;

    if (recId <= 0) {
      await service.create(data);
    }

    return Response.json({});
  } catch (error) {
    return Response.json(error);
  }
}
