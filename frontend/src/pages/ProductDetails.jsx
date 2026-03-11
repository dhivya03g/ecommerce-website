import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (p) => p.id === parseInt(id)
  );

  if (!product) {
    return (
      <div className="text-center mt-10 text-xl">
        Product not found
      </div>
    );
  }

  const increaseQty = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="flex justify-center">

          <img
            src={product.image}
            alt={product.name}
            className="h-96 object-contain"
          />

        </div>

        {/* Product Details */}
        <div>

          <h1 className="text-3xl font-bold mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="text-yellow-400 mb-3 text-lg">
            ⭐⭐⭐⭐☆
          </div>

          {/* Price */}
          <p className="text-green-600 text-2xl font-bold mb-4">
            ₹{product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-3 mb-6">

            <span className="font-semibold">
              Quantity:
            </span>

            <button
              onClick={decreaseQty}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              -
            </button>

            <span className="font-semibold">
              {quantity}
            </span>

            <button
              onClick={increaseQty}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              +
            </button>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
            >
              Add to Cart
            </button>

            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              Buy Now
            </button>

          </div>

          {/* Delivery Info */}
          <p className="text-sm text-gray-500 mt-6">
            🚚 Free delivery within 3-5 days
          </p>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default ProductDetails;