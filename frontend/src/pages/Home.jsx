import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

function Home() {

  const { addToCart } = useContext(CartContext);

  const categories = [
    { name: "laptop", icon: "💻" },
    { name: "headphones", icon: "🎧" },
    { name: "smartwatch", icon: "⌚" },
    { name: "mobilephones", icon: "📱" }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      {/* HERO SECTION */}
      <div
        className="relative h-[450px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')"
        }}
      >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-xl">

          <h1 className="text-5xl font-bold mb-4">
            Welcome to ShopEase
          </h1>

          <p className="text-lg mb-6">
            Your one-stop destination for the best online shopping experience
          </p>

          <Link to="/products">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
              Shop Now
            </button>
          </Link>

        </div>

      </div>


      {/* CATEGORY SECTION */}
      <div className="bg-white shadow-sm py-10">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          {categories.map((cat, index) => (

            <Link key={index} to={`/category/${cat.name}`}>

              <div className="bg-gray-100 rounded-xl p-6 hover:bg-blue-500 hover:text-white transition cursor-pointer">

                <div className="text-4xl">
                  {cat.icon}
                </div>

                <p className="mt-2 font-semibold capitalize">
                  {cat.name}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>


      {/* FEATURED PRODUCTS */}
      <div className="max-w-7xl mx-auto py-12 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl hover:scale-105 transition"
            >

              {/* Product Image */}
              <Link to={`/product/${product.id}`}>
                <div className="h-48 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                 />
                </div>
              </Link>
              {/* Product Name */}
              <h3 className="font-semibold text-lg mt-4">
                {product.name}
              </h3>

              {/* Price */}
              <p className="text-green-600 font-bold text-lg mt-2">
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

export default Home;