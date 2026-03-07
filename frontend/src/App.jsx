import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProduct from "./pages/admin/ManageProduct";

// Customer Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";

function App() {
  return (
    <Router>

      <Routes>

        {/* Customer Routes */}

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orders" element={<Orders />} />

        {/* Admin Routes */}

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<ManageProduct />} />

      </Routes>

    </Router>
  );
}

export default App;