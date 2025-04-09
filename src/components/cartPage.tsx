import React from 'react';
import { useCart } from '../cartContext';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft } from 'lucide-react';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    // Calculate total price, ensuring we multiply by quantity
    const totalPrice = cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-green-800 rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
                <button
                    onClick={() => window.history.back()}
                    className="absolute top-4 left-4 bg-green-800 p-2 rounded-full hover:bg-gray-300 transition"
                >
                    <ArrowLeft className="w-6 h-6 text-white" />
                </button>
                
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Shopping Cart</h2>
                
                {cart.length === 0 ? (
                    <p className="text-center text-gray-600">Your cart is empty.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-4">
                                <div className="flex items-center gap-4">
                                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                                        <p className="text-gray-600">
                                            ${item.price.toFixed(2)} × {item.quantity || 1}
                                        </p>
                                        <p className="text-gray-800 font-semibold">
                                            Subtotal: ${(item.price * (item.quantity || 1)).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(String(item.id))}
                                    className="text-red-500 hover:text-red-700 transition"
                                >
                                    <Trash2 className="w-6 h-6" />
                                </button>
                            </div>
                        ))}

                        {/* Total Price Section */}
                        <div className="text-right font-semibold text-xl text-white mt-4">
                            Total: ${totalPrice.toFixed(2)}
                        </div>
                    </div>
                )}
                
                {cart.length > 0 && (
                    <div className="mt-6 text-center">
                        <Link to="/checkout" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
                            Proceed to Checkout
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
