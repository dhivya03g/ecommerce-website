import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function OrderHistory() {

  const orders = [
    {
      id: 101,
      product: "Laptop",
      price: 50000,
      status: "Delivered"
    },
    {
      id: 102,
      product: "Headphones",
      price: 3000,
      status: "Processing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8 text-center">
          📦 My Orders
        </h1>

        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order.id}
              className="border-b pb-4 flex justify-between items-center"
            >

              <div>

                <h3 className="font-semibold text-lg">
                  Order #{order.id}
                </h3>

                <p>{order.product}</p>

              </div>

              <div>

                <p className="font-bold text-green-600">
                  ₹{order.price}
                </p>

                <p className="text-sm text-gray-500">
                  {order.status}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default OrderHistory;