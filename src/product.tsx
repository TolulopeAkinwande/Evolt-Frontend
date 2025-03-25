import React from "react";
export default function ProductPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold text-blue-700">eShop</h1>
          <nav>
            <ul className="flex space-x-6 text-gray-700">
              <li><a href="#" className="hover:text-blue-600">Home</a></li>
              <li><a href="#" className="hover:text-blue-600">Shop</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center">
            {/* Placeholder for Cart Icon */}
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="sr-only">Cart</span>
            </div>
          </div>
        </div>
      </header>

      {/* Product Details Section */}
      <section className="container mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-12 bg-white shadow-lg rounded-lg p-8">
          {/* Product Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
          </div>

          {/* Product Information */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Premium Smartwatch
            </h2>
            <div className="flex items-center space-x-2 my-4">
              {/* Placeholder for Star Ratings */}
              <div className="flex space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-gray-300 rounded-full"
                    ></div>
                  ))}
              </div>
              <span className="text-gray-600 text-sm">(128 reviews)</span>
            </div>
            <p className="text-3xl font-semibold text-blue-600 mb-6">
              $199.99
            </p>
            <p className="text-gray-600 mb-6">
              Stay connected with this premium smartwatch, featuring a sleek design, long battery life, and advanced health tracking.
            </p>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="container mx-auto py-12">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-8">You May Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white shadow-lg rounded-lg p-4">
              {/* Placeholder for Related Product Image */}
              <div className="w-full h-48 bg-gray-200 rounded flex items-center justify-center mb-4">
                <span className="text-gray-500">Product Image</span>
              </div>
              <h4 className="text-lg font-semibold">Smartwatch Model {item}</h4>
              <p className="text-blue-600 font-semibold mt-2">$149.99</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>&copy; 2025 eShop. All rights reserved.</p>
      </footer>
    </div>
  );
}
