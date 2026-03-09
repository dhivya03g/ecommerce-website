import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <div style={{ background: "#eee", padding: "10px", marginBottom: "20px" }}>

      <h2>Admin Panel</h2>

      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/add-product">Add Product</Link> |{" "}
      <Link to="/manage-products">Manage Products</Link> |{" "}
      <Link to="/orders">View Orders</Link>

      <hr />

    </div>
  );
}

export default AdminMenu;