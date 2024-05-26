'use client';

import { Menu } from './MenuComponent';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import '../css/globals.css';

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
    const clickCount = useRef(0);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    const handleClick = async () => {
        await addToCart(menu);
        showPopup();
    };

    const showPopup = () => {
        clickCount.current += 1;
        const popup = document.getElementById('popup');
        if (popup) {
            if (clickCount.current > 1) {
                popup.innerText = `✓ Item added to cart! (${clickCount.current})`;
            } else {
                popup.innerText = `✓ Item added to cart!`;
            }
            popup.classList.remove('hidden');
            popup.classList.add('visible');

            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            timeoutId.current = setTimeout(() => {
                popup.classList.remove('visible');
                popup.classList.add('hidden');
                clickCount.current = 0;
            }, 1250); 
        }
    };

    useEffect(() => {
        // Create the popup element
        const popup = document.createElement('div');
        popup.id = 'popup';
        popup.className = 'hidden fixed bottom-4 left-4 bg-dgreen text-white p-3 rounded shadow-lg';
        document.body.appendChild(popup);

        // Cleanup on unmount
        return () => {
            if (popup) {
                document.body.removeChild(popup);
            }
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, []);

    return (
        <button onClick={handleClick} className="flex items-center justify-center bg-dgreen hover:scale-110 active:scale-95 transition-all active:bg-[#aacc81] active:ring-2 active:ring-inline active:ring-dgreen rounded-lg text-white px-4 py-2">
            <Image src="/addToCart.svg" alt="addToCart" width={24} height={24} />
        </button>
    );
}
