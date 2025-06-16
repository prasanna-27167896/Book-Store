import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoicon.png";
import { ShoppingCart, UserPlus } from "lucide-react";

export default function Navbar({ cartQuantities }) {
  const totalItems = Object.values(cartQuantities).reduce(
    (sum, qty) => sum + qty,
    0
  );
  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-gray-800">Book Store</span>
        </Link>

        <div className="flex items-center space-x-5">
          <Link to="/cart" title="Cart" className="relative">
            <ShoppingCart
              size={22}
              className={totalItems > 0 ? "text-red-600" : "text-gray-800"}
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
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
