// app/api/products/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    { id: 1, title: 'Product 1', price: 10 },
    { id: 2, title: 'Product 2', price: 20 },
    { id: 3, title: 'Product 3', price: 30 },
  ];

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const newProduct = await request.json();
  return NextResponse.json({ message: 'Product added successfully', product: newProduct });
}

