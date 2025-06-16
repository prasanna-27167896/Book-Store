import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleNameChange = (e) => {
    setFormData((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleEmailChange = (e) => {
    setFormData((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePasswordChange = (e) => {
    setFormData((prev) => ({ ...prev, password: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleNameChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleEmailChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handlePasswordChange}
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
