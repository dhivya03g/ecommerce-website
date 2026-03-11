import { useLocation, Link } from "react-router-dom";
import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function Products() {

  const { addToCart } = useContext(CartContext);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = query.get("search") || "";

  const [category, setCategory] = useState("all");

  // Filter products
  const filteredProducts = products.filter((product) => {

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || product.category === category;

    return matchSearch && matchCategory;

  });

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto py-12 px-6">

        {/* Page Title */}
        <h1 className="text-3xl font-bold mb-10 text-center">
          Our Products
        </h1>

        {/* CATEGORY FILTER */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">

          <button
            onClick={() => setCategory("all")}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            All
          </button>

          <button
            onClick={() => setCategory("laptop")}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Laptop
          </button>

          <button
            onClick={() => setCategory("mobile")}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Mobile
          </button>

          <button
            onClick={() => setCategory("headphones")}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Headphones
          </button>

          <button
            onClick={() => setCategory("watch")}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Smart Watch
          </button>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl p-4 text-center hover:scale-105 transition"
            >

              <Link to={`/product/${product.id}`}>

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 mx-auto object-contain"
                />

              </Link>

              <h3 className="font-semibold text-lg mt-4">
                {product.name}
              </h3>

              <p className="text-green-600 font-bold text-lg">
                ₹{product.price}
              </p>

              {/* Rating */}
              <div className="text-yellow-400 mt-2">
                ⭐⭐⭐⭐☆
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                Add to Cart
              </button>

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Products;