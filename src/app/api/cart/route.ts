import { NextRequest, NextResponse } from 'next/server';

interface CartItem {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

let cart: CartItem[] = [];

export async function POST(req: NextRequest) {
    const { title, description, price, imageUrl, quantity } = await req.json();
    const existingItem = cart.find(item => item.title === title);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ title, description, price, imageUrl, quantity });
    }

    return NextResponse.json(cart);
}

export async function GET() {
    return NextResponse.json(cart);
}

export async function PUT(req: NextRequest) {
    const { title, quantity } = await req.json();
    const item = cart.find(item => item.title === title);

    if (item) {
        item.quantity = quantity;
    }

    return NextResponse.json(cart);
}

export function OPTIONS() {
    return NextResponse.json({ allow: ['GET', 'POST', 'PUT'] });
}
