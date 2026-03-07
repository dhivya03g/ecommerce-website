import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {

  return (
    <div>

      <Navbar />

      <h1>Login</h1>

      <form>

        <input type="email" placeholder="Email" />
        <br /><br />

        <input type="password" placeholder="Password" />
        <br /><br />

        <button>Login</button>

      </form>

      <Footer />

    </div>
  );
}

export default Login;