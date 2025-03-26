

import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/api";

export default function SignUpPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg("");

        const payload = { firstName, lastName, email, password, phoneNumber };

        try {
            const response = await api.makeRequest({
                url: "/api/v1/auth/sign-up",
                method: "POST",
                data: payload,
            });

            console.log("Signup successful", response);
        } catch (error: any) {
            console.error("Signup error:", error);
            setErrorMsg(error.message || "An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white h-screen flex items-center justify-center">
            <div className="container mx-auto max-w-5xl shadow-lg rounded-lg overflow-hidden h-full">
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Section */}
                    <div className="md:w-1/2 bg-blue-700 text-white p-8 flex flex-col justify-center h-full">
                        <div className="max-w-md mx-auto">
                            <h1 className="text-4xl font-bold mb-4">
                                Join Our Community
                            </h1>
                            <p className="mb-8 text-lg">
                                Sign up to start your journey with us.
                            </p>
                            <blockquote className="mt-auto text-sm italic border-l-4 border-white pl-4">
                                “The best way to predict the future is to create it.”
                                <br />
                                <span className="font-semibold not-italic">- Peter Drucker</span>
                            </blockquote>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2 bg-white p-8 flex flex-col justify-center h-full">
                        <div className="max-w-sm mx-auto h-[600px]">
                            <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your first name"
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your last name"
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="password" className="block text-sm font-medium mb-1">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                {errorMsg && (
                                    <p className="text-red-600 mb-4 text-sm">{errorMsg}</p>
                                )}

                                <p className="text-xs text-gray-500 mb-2">
                                    By signing up, you agree to our{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Terms & Conditions
                                    </a>{" "}
                                    and{" "}
                                    <Link to="/login" className="text-blue-600 hover:underline">
                                        Log in
                                    </Link>.
                                </p>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                >
                                    {isLoading ? "Signing Up..." : "Sign Up"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

