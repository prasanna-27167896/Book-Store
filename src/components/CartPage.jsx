import React from "react";
import { Link, useNavigate } from "react-router-dom";

import BP1 from "../assets/Book1.png";
import BP2 from "../assets/Book2.png";
import BP3 from "../assets/Book3.png";
import BP4 from "../assets/Book4.png";
import BP5 from "../assets/Book5.png";
import BP6 from "../assets/Book6.png";
import BP7 from "../assets/Book7.png";
import BP8 from "../assets/Book8.png";
import BP9 from "../assets/BP9.png";
import BP10 from "../assets/BP10.png";
import BP11 from "../assets/BP11.png";
import BP12 from "../assets/BP12.png";
import BP13 from "../assets/BP13.png";
import BP14 from "../assets/BP14.png";
import BP15 from "../assets/BP15.png";
import BP16 from "../assets/BP16.png";

export default function CartPage({ cartQuantities, handleAdd, handleRemove }) {
  const navigate = useNavigate();

  const allBooks = [
    { id: 1, title: "The Silent Echo", price: 205, image: BP1 },
    { id: 2, title: "Digital Fortress", price: 190, image: BP2 },
    { id: 3, title: "The Last Orbit", price: 202, image: BP3 },
    { id: 4, title: "Beyond the Stars", price: 209, image: BP4 },
    { id: 5, title: "Mystic River", price: 180, image: BP5 },
    { id: 6, title: "The Alchemist", price: 160, image: BP6 },
    { id: 7, title: "Atomic Habits", price: 203, image: BP7 },
    { id: 8, title: "Thinking, Fast and Slow", price: 219, image: BP8 },
    { id: 9, title: "The Design Of Books", price: 379, image: BP9 },
    { id: 10, title: "The Crossing", price: 425, image: BP10 },
    { id: 11, title: "The Phoenix Of Destiny", price: 499, image: BP11 },
    { id: 12, title: "The Author", price: 399, image: BP12 },
    { id: 13, title: "The Doctor", price: 549, image: BP13 },
    { id: 14, title: "Darkness Gathers", price: 325, image: BP14 },
    { id: 15, title: "Gitanjali", price: 449, image: BP15 },
    { id: 16, title: "The Unwilling", price: 399, image: BP16 },
  ];

  const cartItems = allBooks
    .filter((book) => cartQuantities[book.id])
    .map((book) => ({
      ...book,
      quantity: cartQuantities[book.id],
    }));
  console.log(cartItems);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f4fbfb] py-20 px-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <Link to="/">
            {" "}
            <button
              onClick={() => navigate("/books")}
              className="mt-4 bg-gradient-to-r from-[#43C6AC] to-[#2B5876] text-white px-6 py-2 rounded-full hover:scale-105 transition"
            >
              Browse Books
            </button>
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-20 object-contain rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      −
                    </button>
                    <span className="text-gray-700 font-medium">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleAdd(item.id)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      ＋
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-blue-700 font-bold text-lg">
                ₹{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold text-gray-800">
              Total: ₹{totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
