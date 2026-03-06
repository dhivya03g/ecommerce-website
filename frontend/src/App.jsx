import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";
import ManageProducts from "./pages/admin/ManageProduct";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-product" element={<AddProduct />} />
        <Route path="/admin/products" element={<ManageProducts />} />

      </Routes>
    </Router>
  );
}

export default App;