import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CategoryPage() {

  const { categoryName } = useParams();

  const products = [

    // LAPTOPS
    { id:1, name:"Dell Laptop", price:52000, category:"laptop", image:"https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"},
    { id:2, name:"HP Laptop", price:48000, category:"laptop", image:"https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"},
    { id:3, name:"Lenovo Laptop", price:45000, category:"laptop", image:"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1500_.jpg"},
    { id:4, name:"Asus Laptop", price:50000, category:"laptop", image:"https://m.media-amazon.com/images/I/71F5Eu5lJSL._SL1500_.jpg"},
    { id:5, name:"Acer Laptop", price:47000, category:"laptop", image:"https://m.media-amazon.com/images/I/71JSMQG8KTL._SL1500_.jpg"},

    // HEADPHONES
    { id:11, name:"Sony Headphones", price:3000, category:"headphones", image:"https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"},
    { id:12, name:"JBL Headphones", price:2800, category:"headphones", image:"https://m.media-amazon.com/images/I/71pC69I3lzL._SL1500_.jpg"},
    { id:13, name:"Boat Headphones", price:2000, category:"headphones", image:"https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg"},
    { id:14, name:"Noise Headphones", price:2200, category:"headphones", image:"https://m.media-amazon.com/images/I/61u1VALn6JL._SL1500_.jpg"},

    // SMARTWATCH
    { id:21, name:"Apple Watch", price:35000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71LfnkRgZ4L._SL1500_.jpg"},
    { id:22, name:"Samsung Watch", price:22000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71tpxtV0fXL._SL1500_.jpg"},
    { id:23, name:"Boat Watch", price:4000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"},
    { id:24, name:"Firebolt Watch", price:3200, category:"smartwatch", image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"},

    // MOBILE PHONES
    { id:31, name:"iPhone 15", price:80000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"},
    { id:32, name:"Samsung Galaxy", price:60000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:33, name:"OnePlus Phone", price:45000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:34, name:"Realme Phone", price:20000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"}

  ];

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-6">

        <h1 className="text-3xl font-bold text-center mb-10">
          {categoryName.toUpperCase()}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredProducts.map((product) => (

            <Link key={product.id} to={`/product/${product.id}`}>

              <div className="bg-white shadow-lg rounded-xl p-5 text-center hover:scale-105 transition">

                {/* Image Container */}
                <div className="h-48 flex items-center justify-center">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full object-contain"
                  />

                </div>

                <h3 className="mt-3 font-semibold text-lg">
                  {product.name}
                </h3>

                <p className="text-green-600 font-bold">
                  ₹{product.price}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default CategoryPage;