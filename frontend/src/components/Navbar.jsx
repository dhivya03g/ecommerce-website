import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/products?search=${search}`);
    }
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          ShopEase
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 mx-6">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-lg text-black outline-none"
          />

        </form>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 font-medium">

          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-yellow-300 transition">
            Products
          </Link>

          <Link to="/cart" className="hover:text-yellow-300 transition">
            Cart 🛒
          </Link>

          <Link to="/orders" className="hover:text-yellow-300 transition">
            Orders
          </Link>

          <Link to="/login" className="hover:text-yellow-300 transition">
            Login
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;