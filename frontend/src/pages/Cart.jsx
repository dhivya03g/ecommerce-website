import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Cart() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    loadCart
  } = useContext(CartContext);

  // Load cart from backend when page opens
  useEffect(() => {
    if (loadCart) {
      loadCart();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-6xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-center">
          🛒 Your Shopping Cart
        </h1>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="text-center py-10">

            <p className="text-xl text-gray-600 mb-6">
              Your cart is empty
            </p>

            <Link to="/products">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                Continue Shopping
              </button>
            </Link>

          </div>

        ) : (

          <>
            {/* CART ITEMS */}
            <div className="space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item._id || item.id}
                  className="flex flex-col md:flex-row items-center justify-between border-b pb-5 gap-4"
                >

                  {/* PRODUCT IMAGE + INFO */}
                  <div className="flex items-center gap-6 flex-1">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain"
                    />

                    <div>

                      <h3 className="text-lg font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-green-600 font-bold">
                        ₹{item.price}
                      </p>

                    </div>

                  </div>


                  {/* QUANTITY CONTROLS */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(item._id || item.id)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      −
                    </button>

                    <span className="font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item._id || item.id)}
                      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                      +
                    </button>

                  </div>


                  {/* SUBTOTAL */}
                  <div className="font-semibold text-lg">

                    ₹{item.price * item.quantity}

                  </div>


                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item._id || item.id)}
                    className="text-red-500 font-semibold hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>


            {/* TOTAL SECTION */}
            <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

              <h2 className="text-2xl font-bold">
                Total: ₹{totalPrice}
              </h2>

              <Link to="/checkout">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
                  Proceed to Checkout
                </button>
              </Link>

            </div>

          </>

        )}

      </div>

      <Footer />

    </div>
  );
}

export default Cart;