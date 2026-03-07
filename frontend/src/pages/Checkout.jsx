import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout() {

  return (
    <div>

      <Navbar />

      <h1>Checkout</h1>

      <form>

        <input type="text" placeholder="Full Name" />
        <br /><br />

        <input type="text" placeholder="Address" />
        <br /><br />

        <input type="text" placeholder="City" />
        <br /><br />

        <input type="text" placeholder="Postal Code" />
        <br /><br />

        <button>Place Order</button>

      </form>

      <Footer />

    </div>
  );
}

export default Checkout;