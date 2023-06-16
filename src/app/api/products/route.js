import { NextResponse } from 'next/server';
import { v4 } from 'uuid';
import { createProduct } from '@/lib/datastores/server';

export async function POST(request) {
  const body = await request.json();
  const response = await createProduct({
    ...body,
    id: v4()
  });

  return NextResponse.json(response, {
    status: 201
  });
}
