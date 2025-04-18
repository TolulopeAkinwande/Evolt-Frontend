
import React from "react";
import evtolImg from "../assets/evtol.jpeg";
import image1 from "../assets/rebrand.jpg";
import image2 from "../assets/people.jpg";
import image3 from "../assets/quality.jpeg"
import image4 from "../assets/istockphoto-copy.webp"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Heading1 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <nav className="bg-green-800 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Evtol</h1>
          <div className="flex items-center gap-4 ">
            <a href="products" className="text-white-700 flex">Product</a>
            <div>
              <a href="sign-up" className="bg-white text-green-800 px-4 py-1 rounded hover:bg-green-100">Sign Up</a>
              <a href="/login" className="mx-4 hover:underline">Login</a>
            </div>
          </div>
        </div>
      </nav>
      <header className="">

      </header>
      <header className="container mx-auto flex flex-col md:flex-row items-center px-10 py-16 gap-10">
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-green-800 mb-6">Trusted By Thousands</h2>
          <p className="text-xl text-gray-700 mb-8">
            Experience the best in online shopping with top-notch quality and customer service.
          </p>
          <a href="/shop" className="bg-green-800 text-white px-6 py-3 rounded hover:bg-blue-800">
            Shop Now
          </a>
        </div>

        {/* Carousel */}
        <div className="md:w-1/2">
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            stopOnHover={true}
            swipeable={false}
          >
            <div>
              <img src={image1} alt="Description for image 1" className="w-full h-auto" />
            </div>
            <div>
              <img src={image2} alt="Description for image 2" className="w-full h-auto" />
            </div>
            <div>
              <img src={image4} alt="Description for image 3" className="w-full h-auto" />
            </div>
          </Carousel>
        </div>
      </header>

      {/* Information Section */}
      <section className="container mx-auto px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <img
            src={image3}
            alt="Quality Products"
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Quality Products</h3>
          <p className="text-gray-600">Curated selection from trusted brands.</p>
        </div>
        <div className="text-center">
          <img
            src={evtolImg}
            alt="Fast Delivery"
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Evtol Fast Delivery</h3>
          <p className="text-gray-600">Speedy and reliable shipping for all orders.</p>
        </div>
        <div className="text-center">
          <img
            src="https://media.istockphoto.com/id/1477483635/photo/adult-man-paying-with-credit-card-at-cafe-close-up-of-hands-with-credit-card-and-credit-card.webp?a=1&b=1&s=612x612&w=0&k=20&c=M5RIaRa1wdxU5N6dV2nn2bGRJM949wLywv08jYWJh2s="
            alt="Secure Payment"
            className="mx-auto mb-4"
          />
          <h3 className="text-2xl font-semibold text-green-800 mb-4">Secure Payment</h3>
          <p className="text-gray-600">Your transactions are safe with our encryption.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-4 text-center">
        <p className="text-sm">&copy; 2025 ShopEase. All rights reserved.</p>
      </footer>
    </div>
  );
}