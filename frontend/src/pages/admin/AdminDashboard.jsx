import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <ul>
        <li>
          <Link to="/admin/add-product">Add Product</Link>
        </li>

        <li>
          <Link to="/admin/products">Manage Products</Link>
        </li>

        <li>View Orders</li>
      </ul>
    </div>
  );
}

export default AdminDashboard;