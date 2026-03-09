import React, { useEffect, useState } from "react";

function ManageProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || [];

    setProducts(storedProducts);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Products</h2>

      {products.length === 0 && <p>No products added</p>}

      {products.map((product, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <strong>{product.name}</strong> - ₹{product.price}
          <br />
          Category: {product.category}
          <br />
          Stock: {product.stock}
        </div>
      ))}
    </div>
  );
}

export default ManageProducts;