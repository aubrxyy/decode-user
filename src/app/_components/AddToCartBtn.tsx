'use client';

import { Menu } from './MenuComponent';
import Image from 'next/image';

interface AddToCartBtnProps {
    menu: Menu;
}

async function addToCart(menu: Menu) {
    const priceValue = parseInt(menu.price.replace(/\./g, ''));
    const cartItem = { title: menu.title, description: menu.description, price: priceValue, imageUrl: menu.imageUrl, quantity: 1 };

    await fetch('/api/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
    });
}

export default function AddToCartBtn({ menu }: AddToCartBtnProps) {
    return (
        <button onClick={() => addToCart(menu)} className="flex items-center justify-center bg-dgreen hover:scale-110 active:scale-95 transition-all active:bg-[#aacc81] active:ring-2 active:ring-inline active:ring-dgreen rounded-lg text-white px-4 py-2">
            <Image src="/addToCart.svg" alt="addToCart" width={24} height={24} />
        </button>
    );
}