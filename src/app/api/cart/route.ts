import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

interface CartItem {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
    quantity: number;
}

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL,
    token: process.env.UPSTASH_REDIS_TOKEN,
});

export async function POST(req: NextRequest) {
    try {
        const { title, description, price, imageUrl, quantity } = await req.json();
        const cart: CartItem[] = await redis.get('cart') || [];

        const existingItem = cart.find(item => item.title === title);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ title, description, price, imageUrl, quantity });
        }

        await redis.set('cart', cart);

        return NextResponse.json(cart);
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function GET() {
    try {
        const cart: CartItem[] = await redis.get('cart') || [];
        return NextResponse.json(cart);
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const { title, quantity } = await req.json();
        const cart: CartItem[] = await redis.get('cart') || [];

        const item = cart.find(item => item.title === title);

        if (item) {
            item.quantity = quantity;
        }

        await redis.set('cart', cart);

        return NextResponse.json(cart);
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message });
    }
}

export function OPTIONS() {
    return NextResponse.json({ allow: ['GET', 'POST', 'PUT'] });
}
