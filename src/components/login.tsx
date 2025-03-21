
import React from 'react';
import { Link } from 'react-router';

export default function LoginPage() {
    return (
        <div className="bg-white h-screen flex items-center justify-center">
            <div className="container mx-auto max-w-5xl shadow-lg overflow-hidden h-full">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Section */}
                    <div className="md:w-1/2 bg-blue-700 text-white p-8 flex flex-col justify-center h-full">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
                            <p className="mb-8 text-lg">Log in to continue your journey with us.</p>
                            <blockquote className="mt-auto text-sm italic border-l-4 border-white pl-4">
                                “The only limit to our realization of tomorrow is our doubts of today.”
                                <br />
                                <span className="font-semibold not-italic">- Franklin D. Roosevelt</span>
                            </blockquote>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center h-full">
                        <div className="max-w-sm mx-auto h-[400px]">
                            <h2 className="text-2xl font-semibold mb-4">Log In to Your Account</h2>

                            <form>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-sm font-medium mb-1">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                >
                                    Log In
                                </button>
                            </form>

                            <p className="text-xs text-gray-500 mt-4">
                                Don't have an account?{' '}
                                <Link to="/" className="text-blue-600 hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}