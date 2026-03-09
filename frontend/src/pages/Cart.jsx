import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Cart() {

  const cartItems = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 3000 }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Cart
        </h1>

        <div className="space-y-4">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b pb-3"
            >
              <span className="text-lg">{item.name}</span>
              <span className="font-semibold text-green-600">
                ₹{item.price}
              </span>
            </div>
          ))}

        </div>

        <div className="mt-6 text-right text-xl font-bold">
          Total: ₹{total}
        </div>

        <div className="mt-6 text-center">

          <Link to="/checkout">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Proceed to Checkout
            </button>
          </Link>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Cart;