import React, { useEffect, useState } from "react";

function ManageProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Products</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{product.name}</h3>

            <p>Price: ₹{product.price}</p>

            <p>Category: {product.category}</p>

            <p>Description: {product.description}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default ManageProducts;