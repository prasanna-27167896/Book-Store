import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoicon.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-4 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 relative group">
            <div className="absolute -inset-3 rounded-full opacity-0 blur-xl group-hover:opacity-30 transition-opacity bg-gradient-to-r from-[#43C6AC] to-[#F8FFAE] z-0"></div>

            <img src={logo} alt="Logo" className="h-10 w-10 z-10" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
