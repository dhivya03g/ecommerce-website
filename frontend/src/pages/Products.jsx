import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
    },
    {
      id: 2,
      name: "Smartphone",
      price: 20000,
      image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"
    },
    {
      id: 4,
      name: "Smart Watch",
      price: 7000,
      image: "https://m.media-amazon.com/images/I/71LfnkRgZ4L._SL1500_.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">

        <h1 className="text-5xl font-bold mb-4">
          Welcome to ShopEase
        </h1>

        <p className="text-lg mb-6">
          Your one-stop destination for the best online shopping experience
        </p>

        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>

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
              className="bg-white shadow-lg rounded-xl p-4 text-center hover:scale-105 transition duration-300"
            >

              <img
                src={product.image}
                alt={product.name}
                className="h-48 mx-auto object-contain"
              />

              <h3 className="font-semibold text-lg mt-4">
                {product.name}
              </h3>

              <p className="text-green-600 font-bold text-lg mt-2">
                ₹{product.price}
              </p>

              <div className="flex justify-center text-yellow-400 mt-2">
                ⭐⭐⭐⭐☆
              </div>

              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
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