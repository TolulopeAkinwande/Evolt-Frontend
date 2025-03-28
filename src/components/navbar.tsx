import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Shop</h1>
            <div>
                <Link to="/products" className="mr-4 hover:text-gray-300">Products</Link>
                <Link to="/cart" className="hover:text-gray-300">Cart</Link>
            </div>
        </nav>
    );
};

export default Navbar;
