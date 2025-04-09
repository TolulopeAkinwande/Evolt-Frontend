import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Products } from "./lib/types";
import { useCart } from "./cartContext";
import { ArrowLeft, Plus, Minus, ShoppingCart } from "lucide-react"; // Import icons

function Navbar() {
    const { cartItems } = useCart();
    const totalQuantity = Object.values(cartItems).reduce((sum, qty) => sum = qty, 0);
    return (
        <nav className="bg-green-800 p-4 w-full">
            <div className="flex justify-between items-center px-10">
                <h1 className="text-2xl font-bold text-white">MyStore</h1>
                <div className="flex items-center gap-4">
                    <Link to="/" className="text-white hover:underline">Home</Link>
                    <Link to="/products" className="text-white hover:underline">Products</Link>
                    <Link to="/cart" className="relative text-white hover:underline flex items-center">
                        <ShoppingCart size={24} />
                       {totalQuantity > 0 && (
                        <span className="absolute -top-2 -right-2 text-red-800 rounded-full text-xm font-bold w-5 h-5 flex items-center justify-end">
                            {totalQuantity}
                        </span>
                       )}
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addToCart, removeFromCart, cartItems } = useCart();
    const [product, setProduct] = useState<Products | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState("");


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
        <div className="min-h-screen big-gray-100">
            <Navbar />
            {/* Success Message */}
            {successMessage && (
                <div className="w-full bg-green-100 text-green-800 py-2 text-center">
                    {successMessage}
                </div>
            )}
            <div className="flex flex-col gap-10 justify-center  items-center  p-4">
                <div className="bg-white rounded-lg shadow-lg max-w-4xl flex overflow-hidden relative">
                    {/* Back Icon Button */}
                    <button
                        onClick={() => navigate("/products")}
                        className="absolute top-4 left-4 bg-green-600 p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        <ArrowLeft className="w-6 h-6 text-white" />
                    </button>

                    {/* Left: Product Details */}
                    <div className="w-1/2 p-6 flex flex-col justify-center bg-green-800">
                        <h2 className="text-3xl font-bold text-white mb-4">{product.name}</h2>
                        <ul className="text-white mb-4">
                            <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Quantity Available: {product.quantity}</li>
                            <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Weight: {product.weight}</li>
                            <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Code: {product.code}</li>
                        </ul>
                        <p className="text-3xl font-bold text-green-800 mb-4">${product.price}</p>
                        <button
                            onClick={() => {
                                addToCart(product);
                                setSuccessMessage("Product added to cart successfully");
                                setTimeout(() => setSuccessMessage(""), 3000);
                            }}
                            disabled={cartQuantity >= product.quantity}
                            className={`p-2 rounded-full ${cartQuantity < product.quantity ? "bg-green-600 hover:bg-green-700" : "bg-gray-300"} text-white transition`}
                        >
                            add to Cart
                        </button>
                    </div>


                    {/* Right: Image + Add to Cart Button */}
                    <div className="w-1/2 bg-whit-500 flex flex-col justify-center items-center pb-2 ">
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
                                className={`p-2 rounded-full ${cartQuantity < product.quantity ? "bg-green-800 hover:bg-blue-700" : "bg-gray-300"} text-white transition`}
                            >
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
