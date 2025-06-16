import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";

export default function App() {
  const [cartQuantities, setCartQuantities] = useState({});

  const handleAdd = (bookId) => {
    setCartQuantities((prev) => ({
      ...prev,
      [bookId]: (prev[bookId] || 0) + 1,
    }));
  };

  const handleRemove = (bookId) => {
    setCartQuantities((prev) => {
      if (!prev[bookId]) return prev;
      const updated = { ...prev, [bookId]: prev[bookId] - 1 };
      if (updated[bookId] <= 0) delete updated[bookId];
      return updated;
    });
  };

  return (
    <>
      <Navbar cartQuantities={cartQuantities} />
      <Routes>
        <Route
          path="/"
          element={
            <Books
              cartQuantities={cartQuantities}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartQuantities={cartQuantities}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
            />
          }
        />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}
