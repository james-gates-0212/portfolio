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
    } else {
      await service.update(recId, data);
    }

    return Response.json({});
  } catch (error) {
    return Response.json(error);
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const service: UserService = new UserService();
    await service.init();

    const { id } = params;

    const recId = parseInt(id) || 0;

    let result = {};

    if (recId > 0) {
      result = await service.findById(recId);
    }

    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const service: UserService = new UserService();
    await service.init();

    const { id } = params;

    const recId = parseInt(id) || 0;

    if (recId > 0) {
      await service.destroy(recId);
    }

    const result = await service.getAll();

    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
