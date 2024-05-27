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
    const start = Date.now();
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

        console.log(`POST execution time: ${Date.now() - start}ms`);
        return NextResponse.json(cart);
    } catch (error: any) {
        console.log(`POST execution time (error): ${Date.now() - start}ms`);
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function GET() {
    const start = Date.now();
    try {
        const cart: CartItem[] = await redis.get('cart') || [];
        console.log(`GET execution time: ${Date.now() - start}ms`);
        return NextResponse.json(cart);
    } catch (error: any) {
        console.log(`GET execution time (error): ${Date.now() - start}ms`);
        return NextResponse.json({ success: false, error: error.message });
    }
}

export async function PUT(req: NextRequest) {
    const start = Date.now();
    try {
        const { title, quantity } = await req.json();
        const cart: CartItem[] = await redis.get('cart') || [];

        const item = cart.find(item => item.title === title);

        if (item) {
            item.quantity = quantity;
        }

        await redis.set('cart', cart);

        console.log(`PUT execution time: ${Date.now() - start}ms`);
        return NextResponse.json(cart);
    } catch (error: any) {
        console.log(`PUT execution time (error): ${Date.now() - start}ms`);
        return NextResponse.json({ success: false, error: error.message });
    }
}

export function OPTIONS() {
    return NextResponse.json({ allow: ['GET', 'POST', 'PUT'] });
}
