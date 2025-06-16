import React from "react";
import Books from "./Books";

export default function BooksPage({ cartQuantities, handleAdd, handleRemove }) {
  return (
    <Books
      cartQuantities={cartQuantities}
      handleAdd={handleAdd}
      handleRemove={handleRemove}
    />
  );
}
