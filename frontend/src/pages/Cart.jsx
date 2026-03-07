import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {

  const cartItems = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 3000 }
  ];

  return (
    <div>

      <Navbar />

      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name} - ₹{item.price}</p>
        </div>
      ))}

      <h3>Total: ₹53000</h3>

      <button>Proceed to Checkout</button>

      <Footer />

    </div>
  );
}

export default Cart;