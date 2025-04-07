import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Products } from "../lib/types";

function Navbar() {
  return (
    <nav className="bg-green-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">MyStore</h1>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-white hover:underline">Home</Link>
          <Link to="/products" className="text-white hover:underline">Products</Link>
          <Link to="/signup" className="text-white hover:underline">Signup</Link>
          <Link to="/login" className="text-white hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
}

function SearchBar({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (q: string) => void; }) {
  return (
    <div className="bg-white-700 py-4">
      <div className="container mx-auto px-4">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-100"
          />
          <svg className="w-5 h-5 text-gray-300 absolute right-3 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ProductList() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3012/api/v1/medication/get-all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="min-h-screen bg-white text-green-950 flex flex-col"
      style={{ backgroundImage: "url('/your-background-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <Navbar />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto p-4 py-10 flex-grow">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 max-w-xs mx-auto">
                <img className="h-30 w-full object-cover bg-gray-200" src={product.image} alt={product.name} />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <div className="mt-4">
                    <Link className="block text-center bg-green-800 text-white px-4 py-2 rounded hover:bg-green-600 transition" to={`/single-product/${product.id}`}>
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">No products found.</p>
            )}
          </div>
        )}
      </div>
      <footer className="bg-green-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}