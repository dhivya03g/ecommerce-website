import { Link } from "react-router-dom";
import AdminMenu from "../../components/AdminMenu";

function AdminDashboard() {
  return (
    <div>

      <AdminMenu />

      <h1>Admin Dashboard</h1>

      <ul>

        <li>
          <Link to="/admin/add-product">Add Product</Link>
        </li>

        <li>
          <Link to="/admin/products">Manage Products</Link>
        </li>

        <li>
          <Link to="/orders">View Orders</Link>
        </li>

      </ul>

    </div>
  );
}

export default AdminDashboard;