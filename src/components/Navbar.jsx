import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoicon.png";
import { ShoppingCart, UserPlus } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-gray-800">Book Store</span>
        </Link>

        <div className="flex items-center space-x-5">
          <Link
            to="/cart"
            className="text-gray-700 hover:text-black transition"
            title="Cart"
          >
            <ShoppingCart size={22} />
          </Link>
          <Link
            to="/signup"
            className="text-gray-700 hover:text-black transition"
            title="Sign Up"
          >
            <UserPlus size={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
