import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful! 🎉");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center mt-12">

        <div className="bg-white shadow-lg rounded-xl p-10 w-96">

          <h2 className="text-2xl font-bold text-center mb-6">
            Checkout
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="City"
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="text"
              placeholder="Card Number"
              className="w-full border p-3 rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Pay Now
            </button>

          </form>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Checkout;