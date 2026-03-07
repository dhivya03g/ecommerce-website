import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Products() {

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
    { id: 4, name: "Smart Watch", price: 7000 },
    { id: 5, name: "Bluetooth Speaker", price: 2500 },
    { id: 6, name: "Tablet", price: 15000 },
    { id: 7, name: "Gaming Mouse", price: 1200 },
    { id: 8, name: "Keyboard", price: 1800 },
    { id: 9, name: "External Hard Drive", price: 6000 },
    { id: 10, name: "Wireless Earbuds", price: 3500 }
  ];

  return (
    <div>

      <Navbar />

      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}

      <Footer />

    </div>
  );
}

export default Products;