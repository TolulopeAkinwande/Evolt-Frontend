import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Order {
  id: string;
  date: string; // You might convert this to a Date if needed
  total: number;
  items: { name: string; quantity: number }[];
}

function Navbar() {
  return (
    <nav className="p-4 border-b bg-blue-700 border-gray-300 flex justify-between items-center">
      <h1 className="text-xl font-bold text-white px-4">Order History</h1>
      <div className="flex items-center gap-4 text-white">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/account" className="hover:underline">Account</Link>
      </div>
    </nav>
  );
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:3012/api/v1/orders/get-all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOrders(data.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setError('Error fetching orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <div className="container mx-auto p-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Your Order History</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading orders...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : orders.length === 0 ? (
          <p className="text-center text-gray-500">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                  <p className="text-sm text-gray-500">Date: {new Date(order.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500">Items: {order.items.reduce((acc, item) => acc + item.quantity, 0)}</p>
                </div>
                <div className="mb-4 md:mb-0 text-center md:text-right">
                  <p className="text-xl font-bold text-blue-600">Total: ${order.total.toFixed(2)}</p>
                </div>
                <Link to={`/order/${order.id}`} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
