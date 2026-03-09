import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Orders() {

  const orders = [
    { id: 1, product: "Laptop", price: 50000, status: "Delivered" },
    { id: 2, product: "Headphones", price: 3000, status: "Shipped" }
  ];

  return (
    <div>

      <Navbar />

      <h1>Your Orders</h1>

      {orders.map((order) => (
        <div key={order.id}>
          <p>{order.product} - ₹{order.price}</p>
          <p>Status: {order.status}</p>
          <hr />
        </div>
      ))}

      <Footer />

    </div>
  );
}

export default Orders;