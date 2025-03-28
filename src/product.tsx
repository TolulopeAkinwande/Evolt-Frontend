import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Products } from "./lib/types";
import { useCart } from "./cartContext";
import { ArrowLeft, Plus, Minus } from "lucide-react"; // Import icons

export default function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cartItems } = useCart();
    const [product, setProduct] = useState<Products | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:3012/api/v1/medication/get-single/${id}`);
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                setProduct(data.data);
            } catch (err) {
                setError("Error loading product. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchProduct();
    }, [id]);

    if (loading) return <div className="text-center p-6">Loading...</div>;
    if (error || !product) return <div className="text-center p-6 text-red-500">{error || "Product not found."}</div>;

    // Get the current quantity of this product in the cart
    const cartQuantity = cartItems[product.id] || 0;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white rounded-lg shadow-lg max-w-4xl flex overflow-hidden relative">

                {/* Back Icon Button */}
                <button
                    onClick={() => navigate("/products")}
                    className="absolute top-4 left-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                >
                    <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>

                {/* Left: Product Details */}
                <div className="w-1/2 p-6 flex flex-col justify-center bg-white">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>
                    <ul className="text-gray-600 mb-4">
                        <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Quantity Available: {product.quantity}</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Weight: {product.weight}</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Code: {product.code}</li>
                    </ul>
                    <p className="text-3xl font-bold text-blue-600 mb-4">${product.price}</p>
                    <button
                        onClick={() => navigate("/cart")}
                        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-pink-500 transition"
                    >
                        add to Cart
                    </button>
                </div>


                {/* Right: Image + Add to Cart Button */}
                <div className="w-1/2 bg-whit-500 flex flex-col justify-center items-center pb-25 ">
                    <img className="object-contain max-h-96 mb-4" src={product.image} alt={product.name} />

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => removeFromCart(String(product.id))}
                            disabled={cartQuantity === 0}
                            className={`p-2 rounded-full ${cartQuantity > 0 ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"} text-white transition`}
                        >
                            <Minus className="w-5 h-5" />
                        </button>

                        <span className="text-xl font-bold">{cartQuantity}</span>

                        <button
                            onClick={() => addToCart(product)}
                            disabled={cartQuantity >= product.quantity}
                            className={`p-2 rounded-full ${cartQuantity < product.quantity ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300"} text-white transition`}
                        >
                            <Plus className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
