import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-blue-700 text-white">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="text-3xl font-bold">eShop</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <div>
            <a
              href="/login"
              className="mr-4 border border-white px-3 py-1 rounded hover:bg-white hover:text-blue-700 transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-blue-100 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-6">
            Discover the Future of Shopping
          </h1>
          <p className="text-lg mb-8">
            Shop the latest trends and enjoy exclusive deals. Experience a seamless and secure online shopping journey.
          </p>
          <div>
            <a
              href="/signup"
              className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition mr-4"
            >
              Get Started
            </a>
            <a
              href="/products"
              className="border border-blue-700 text-blue-700 px-6 py-3 rounded hover:bg-blue-100 transition"
            >
              Browse Products
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://via.placeholder.com/500"
            alt="E-commerce shopping"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us?</h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="mb-8 md:mb-0 text-center px-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Quality Products"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">
                Enjoy a wide range of high-quality products from top brands.
              </p>
            </div>
            <div className="mb-8 md:mb-0 text-center px-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Fast Delivery"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your orders delivered quickly and reliably right to your door.
              </p>
            </div>
            <div className="text-center px-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Secure Payment"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">
                Shop with confidence using our secure and encrypted payment system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2025 eShop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}