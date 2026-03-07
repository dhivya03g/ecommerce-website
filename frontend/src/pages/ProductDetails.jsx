import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductDetails() {

  const product = {
    name: "Laptop",
    price: 50000,
    description: "High performance laptop for work and gaming."
  };

  return (
    <div>

      <Navbar />

      <h1>{product.name}</h1>
      <p>Price: ₹{product.price}</p>
      <p>{product.description}</p>

      <button>Add to Cart</button>

      <Footer />

    </div>
  );
}

export default ProductDetails;