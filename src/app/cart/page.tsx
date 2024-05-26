'use client'
import { useState, useEffect } from 'react';

interface CartItem {
    title: string;
    description: string;
    price: number;
    quantity: number;
    imageUrl: string;
}

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchCart() {
            const res = await fetch('/api/cart');
            const data = await res.json();
            setCart(data);
        }

        fetchCart();
    }, []);

    const updateQuantity = async (title: string, quantity: number) => {
        await fetch('/api/cart', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, quantity }),
        });

        setCart(cart => cart
            .map(item => item.title === title ? { ...item, quantity } : item)
            .filter(item => item.quantity > 0)
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID').format(price);
    };

    const handleCheckout = () => {
        const message = cart.map(item => `${item.title} [${item.quantity}] - Rp. ${formatPrice(item.price * item.quantity)}`).join('\n');
        const total = `Total: Rp. ${formatPrice(getTotalPrice())}`;
        const waMessage = `Saya ingin pesan:\n${message}\n\n${total}`;
        const waUrl = `https://wa.me/6281385976170?text=${encodeURIComponent(waMessage)}`;
        window.open(waUrl, '_blank');
    };

    return (
        <div className="min-h-[60vh] container mx-auto p-4">
            <h1 className="mt-4 text-2xl font-bold mb-4 flex justify-center">Cart</h1>
            {cart.length === 0 ? (
                <div className="flex justify-center "><p>Your cart is empty.</p></div>
            ) : (
                <div>
                    {cart.map((item, index) => (
                        <div key={index} className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <img src={item.imageUrl} alt={item.title} className="w-48 max-lg:w-20 rounded-lg h-32 max-lg:h-16 object-cover mr-4" />
                                <div>
                                    <h2 className="text-xl/none">{item.title}</h2>
                                    <p className="text-gray-500 max-md:text-sm">{item.description}</p>
                                    <p className="text-lg text-[#674242] mt-1">Rp. {formatPrice(item.price)}</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-gray-200 rounded-lg">
                                <button onClick={() => updateQuantity(item.title, item.quantity - 1)} className="px-3 py-2 bg-red-500 text-white rounded-l-lg">-</button>
                                <span className="mx-4 w-4 flex justify-center">{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.title, item.quantity + 1)} className="px-3 py-2 bg-green-500 text-white rounded-r-lg">+</button>
                            </div>
                        </div>
                    ))}
                        <hr/>
                    <div className="flex flex-wrap justify-between items-center my-8">
                        <h1 className="text-xl font-bold mr-8 pb-2">Total Price: Rp. {formatPrice(getTotalPrice())}</h1>
                        <button onClick={handleCheckout} className="px-8 py-2 bg-dgreen text-white rounded">Pesan</button>
                    </div>
                </div>
            )}
        </div>
    );
}
