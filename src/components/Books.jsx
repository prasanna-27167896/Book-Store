import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Star } from "lucide-react";

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

export default function Books({
  cartQuantities = {},
  handleAdd,
  handleRemove,
}) {
  const navigate = useNavigate();
  const [genre, setGenre] = useState("All Genres");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Title");

  const books = [
    {
      id: 1,
      image: BP1,
      title: "The Silent Echo",
      author: "Sarah Mitchell",
      price: 205,
      rating: 4.5,
      genre: "Mystery",
    },
    {
      id: 2,
      image: BP2,
      title: "Digital Fortress",
      author: "James Cooper",
      price: 190,
      rating: 4.2,
      genre: "Thriller",
    },
    {
      id: 3,
      image: BP3,
      title: "The Last Orbit",
      author: "Emily Zhang",
      price: 202,
      rating: 4.7,
      genre: "Sci-Fi",
    },
    {
      id: 4,
      image: BP4,
      title: "Beyond the Stars",
      author: "Michael Chen",
      price: 209,
      rating: 4.3,
      genre: "Sci-Fi",
    },
    {
      id: 5,
      image: BP5,
      title: "Mystic River",
      author: "Dennis Lehane",
      price: 180,
      rating: 4.8,
      genre: "Mystery",
    },
    {
      id: 6,
      image: BP6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 160,
      rating: 4.9,
      genre: "Philosophy",
    },
    {
      id: 7,
      image: BP7,
      title: "Atomic Habits",
      author: "James Clear",
      price: 203,
      rating: 4.6,
      genre: "Self-Help",
    },
    {
      id: 8,
      image: BP8,
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      price: 219,
      rating: 4.4,
      genre: "Psychology",
    },
    {
      id: 9,
      image: BP9,
      title: "The Design Of Books",
      author: "Debbie Bern",
      price: 379,
      genre: "Philosophy",
    },
    {
      id: 10,
      image: BP10,
      title: "The Crossing",
      author: "Jason Mott",
      price: 425,
      genre: "Drama",
    },
    {
      id: 11,
      image: BP11,
      title: "The Phoenix Of Destiny",
      author: "Geronimo Stilton",
      price: 499,
      genre: "Thriller",
    },
    {
      id: 12,
      image: BP12,
      title: "The Author",
      author: "Raj Siddhi",
      price: 399,
      genre: "Drama",
    },
    {
      id: 13,
      image: BP13,
      title: "The Doctor",
      author: "Oscar Patton",
      price: 549,
      genre: "Drama",
    },
    {
      id: 14,
      image: BP14,
      title: "Darkness Gathers",
      author: "Emma Elliot",
      price: 325,
      genre: "Thriller",
    },
    {
      id: 15,
      image: BP15,
      title: "Gitanjali",
      author: "RabindraNath Tagore",
      price: 449,
      genre: "Philosophy",
    },
    {
      id: 16,
      image: BP16,
      title: "The Unwilling",
      author: "John Hart",
      price: 399,
      genre: "Drama",
    },
  ];

  const filteredBooks = books
    .filter(
      (book) =>
        (genre === "All Genres" || book.genre === genre) &&
        (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "Title") return a.title.localeCompare(b.title);
      if (sortOption === "PriceLow") return a.price - b.price;
      if (sortOption === "PriceHigh") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#f4fbfb] py-20 px-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Books
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Explore our curated collection spanning genres and perspectives
      </p>

      {/* Filters */}
      <div className="mb-8 max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search titles, authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[500px] px-5 py-3 rounded-xl border border-gray-300 shadow-sm text-gray-700"
          />
          <span className="text-sm text-gray-600">
            Showing {filteredBooks.length} results
          </span>
        </div>

        <div className="flex gap-4">
          <select
            className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>All Genres</option>
            <option>Mystery</option>
            <option>Thriller</option>
            <option>Sci-Fi</option>
            <option>Drama</option>
            <option>Philosophy</option>
            <option>Self-Help</option>
            <option>Psychology</option>
          </select>

          <select
            className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-gray-700"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="Title">Sort by Title</option>
            <option value="PriceLow">Price: Low to High</option>
            <option value="PriceHigh">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-4 gap-6 max-w-[1200px] mx-auto">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow p-4 flex flex-col"
          >
            <img
              src={book.image}
              alt={book.title}
              className="rounded-xl h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">by {book.author}</p>
            <div className="flex items-center text-yellow-500 text-sm mb-2">
              <Star className="w-4 h-4 fill-current mr-1" />
              <span className="text-gray-800 font-medium">({book.rating})</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">₹{book.price}</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-blue-700 font-bold text-lg">
                ₹{book.price.toFixed(2)}
              </span>
              {cartQuantities[book.id] ? (
                <div className="flex items-center gap-2 bg-blue-700 text-white px-3 py-1 rounded-full shadow">
                  <button onClick={() => handleRemove(book.id)}>−</button>
                  <span>{cartQuantities[book.id]}</span>
                  <button onClick={() => handleAdd(book.id)}>＋</button>
                </div>
              ) : (
                <button
                  onClick={() => handleAdd(book.id)}
                  className="bg-blue-700 text-white px-4 py-1 rounded-full hover:scale-105 transition"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating cart button */}
      {Object.keys(cartQuantities).length > 0 && (
        <button
          onClick={() => navigate("/cart")}
          className="fixed top-6 right-10 bg-white p-3 rounded-full shadow hover:scale-105 transition"
        >
          <ShoppingBag size={24} />
        </button>
      )}
    </div>
  );
}
