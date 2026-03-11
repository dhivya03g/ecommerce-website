import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";

function Checkout() {

  const { totalPrice } = useContext(CartContext);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">

        <Navbar />

        <div className="flex flex-col items-center justify-center flex-grow">

          <h1 className="text-4xl font-bold text-green-600 mb-4">
            🎉 Order Placed Successfully!
          </h1>

          <p className="text-lg text-gray-700">
            Your order will be delivered in 3-5 days.
          </p>

        </div>

        <Footer />

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full border p-3 rounded"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full border p-3 rounded"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full border p-3 rounded"
              placeholder="Enter phone number"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold mb-1">
              Delivery Address
            </label>
            <textarea
              required
              className="w-full border p-3 rounded"
              placeholder="Enter delivery address"
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-semibold mb-1">
              City
            </label>
            <input
              type="text"
              required
              className="w-full border p-3 rounded"
              placeholder="Enter city"
            />
          </div>

          {/* Payment */}
          <div>
            <label className="block font-semibold mb-1">
              Payment Method
            </label>

            <select className="w-full border p-3 rounded">

              <option>Cash on Delivery</option>
              <option>Credit Card</option>
              <option>UPI</option>

            </select>
          </div>

          {/* Total */}
          <div className="text-xl font-bold text-right">
            Total: ₹{totalPrice}
          </div>

          {/* Place Order */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Place Order
          </button>

        </form>

      </div>

      <Footer />

    </div>
  );
}

export default Checkout;