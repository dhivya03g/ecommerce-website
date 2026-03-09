import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex justify-center items-center mt-16">

        <div className="bg-white p-10 rounded-xl shadow-lg w-96">

          <h2 className="text-2xl font-bold text-center mb-6">
            Login
          </h2>

          <form className="space-y-4">

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800"
            >
              Login
            </button>

          </form>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Login;