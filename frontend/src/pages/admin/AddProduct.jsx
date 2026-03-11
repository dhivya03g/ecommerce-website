import React, { useState } from "react";

function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    stock: ""
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
      });

      const data = await response.json();

      alert("Product added successfully!");

    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" onChange={handleChange} />
        <br /><br />

        <input type="number" name="price" placeholder="Price" onChange={handleChange} />
        <br /><br />

        <input type="text" name="category" placeholder="Category" onChange={handleChange} />
        <br /><br />

        <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
        <br /><br />

        <input type="number" name="stock" placeholder="Stock" onChange={handleChange} />
        <br /><br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;