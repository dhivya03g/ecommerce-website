import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

/* =========================
   Admin Pages
========================= */

import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProduct from "./pages/admin/ManageProduct";
import OrderHistory from "./pages/OrderHistory";
/* =========================
   Customer Pages
========================= */

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import CategoryPage from "./pages/CategoryPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";

function App() {

  return (

    <Router>

      <Routes>

        {/* =========================
           CUSTOMER ROUTES
        ========================= */}

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* All Products Page */}
        <Route path="/products" element={<Products />} />

        {/* Category Page (Laptop / Headphones etc) */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />

        {/* Product Details Page */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout Page */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Register Page */}
        <Route path="/register" element={<Register />} />

        {/* Orders Page */}
        <Route path="/orders" element={<Orders />} />

        {/* Order  history */}
        <Route path="/orders" element={<OrderHistory />} />


        {/* =========================
           ADMIN ROUTES
        ========================= */}

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Add Product Page */}
        <Route path="/admin/add-product" element={<AddProduct />} />

        {/* Manage Products Page */}
        <Route path="/admin/products" element={<ManageProduct />} />

      </Routes>

    </Router>

  );
}

export default App;