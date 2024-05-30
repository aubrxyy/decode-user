'use client';

import { Menu } from './MenuComponent';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import '../css/globals.css';

interface AddToCartBtnProps {
    menu: Menu;
}

let activePopups = 0;

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
    const popupId = `popup-${menu.title.replace(/\s+/g, '-')}`;
    const [popupPosition, setPopupPosition] = useState(0);

    const handleClick = async () => {
        await addToCart(menu);
        showPopup();
    };

    const showPopup = () => {
        clickCount.current += 1;
        const popup = document.getElementById(popupId);
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
                activePopups -= 1;
            }, 1250); 
        }
    };

    useEffect(() => {
        const popup = document.createElement('div');
        popup.id = popupId;
        popup.className = 'hidden fixed left-4 bg-dgreen text-white p-3 rounded shadow-lg';
        popup.style.bottom = `${4 + activePopups * 60}px`;
        document.body.appendChild(popup);
        setPopupPosition(activePopups);
        activePopups += 1;

        return () => {
            if (popup) {
                document.body.removeChild(popup);
            }
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
            activePopups -= 1;
        };
    }, [popupId]);

    return (
        <button onClick={handleClick} className="flex items-center justify-center bg-dgreen hover:scale-110 active:scale-95 transition-all active:bg-[#aacc81] active:ring-2 active:ring-inline active:ring-dgreen rounded-lg text-white px-4 py-2">
            <Image src="/addToCart.svg" alt="addToCart" width={24} height={24} />
        </button>
    );
}
