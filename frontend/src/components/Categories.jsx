import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CategoryPage() {

  const { categoryName } = useParams();

  const products = [

    // LAPTOPS
    { id:1, name:"Dell Laptop", price:52000, category:"laptop", image:"https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"},
    { id:2, name:"HP Laptop", price:48000, category:"laptop", image:"https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg"},
    { id:3, name:"Lenovo Laptop", price:45000, category:"laptop", image:"https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1500_.jpg"},
    { id:4, name:"Asus Laptop", price:50000, category:"laptop", image:"https://m.media-amazon.com/images/I/71F5Eu5lJSL._SL1500_.jpg"},
    { id:5, name:"Acer Laptop", price:47000, category:"laptop", image:"https://m.media-amazon.com/images/I/71JSMQG8KTL._SL1500_.jpg"},
    { id:6, name:"MacBook Air", price:95000, category:"laptop", image:"https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg"},
    { id:7, name:"Gaming Laptop", price:75000, category:"laptop", image:"https://m.media-amazon.com/images/I/71BdbVq6HML._SL1500_.jpg"},
    { id:8, name:"MSI Laptop", price:68000, category:"laptop", image:"https://m.media-amazon.com/images/I/71pC69I3lzL._SL1500_.jpg"},
    { id:9, name:"Surface Laptop", price:82000, category:"laptop", image:"https://m.media-amazon.com/images/I/71E7F8o3X0L._SL1500_.jpg"},
    { id:10, name:"LG Laptop", price:60000, category:"laptop", image:"https://m.media-amazon.com/images/I/61Qe0euJJZL._SL1500_.jpg"},


    // HEADPHONES
    { id:11, name:"Sony Headphones", price:3000, category:"headphones", image:"https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"},
    { id:12, name:"JBL Headphones", price:2800, category:"headphones", image:"https://m.media-amazon.com/images/I/71pC69I3lzL._SL1500_.jpg"},
    { id:13, name:"Boat Headphones", price:2000, category:"headphones", image:"https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg"},
    { id:14, name:"Noise Headphones", price:2500, category:"headphones", image:"https://m.media-amazon.com/images/I/61u1VALn6JL._SL1500_.jpg"},
    { id:15, name:"Apple AirPods", price:15000, category:"headphones", image:"https://m.media-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg"},
    { id:16, name:"OnePlus Buds", price:4500, category:"headphones", image:"https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg"},
    { id:17, name:"Realme Buds", price:2200, category:"headphones", image:"https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"},
    { id:18, name:"Samsung Buds", price:8500, category:"headphones", image:"https://m.media-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg"},
    { id:19, name:"Skullcandy Headphones", price:4000, category:"headphones", image:"https://m.media-amazon.com/images/I/61u1VALn6JL._SL1500_.jpg"},
    { id:20, name:"Bose Headphones", price:12000, category:"headphones", image:"https://m.media-amazon.com/images/I/71NTi82uBEL._SL1500_.jpg"},


    // SMARTWATCH
    { id:21, name:"Apple Watch", price:35000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71LfnkRgZ4L._SL1500_.jpg"},
    { id:22, name:"Samsung Watch", price:22000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71tpxtV0fXL._SL1500_.jpg"},
    { id:23, name:"Boat Watch", price:4000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"},
    { id:24, name:"Noise Watch", price:3500, category:"smartwatch", image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"},
    { id:25, name:"Firebolt Watch", price:3200, category:"smartwatch", image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"},
    { id:26, name:"Fitbit Watch", price:9000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71tpxtV0fXL._SL1500_.jpg"},
    { id:27, name:"Garmin Watch", price:18000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71tpxtV0fXL._SL1500_.jpg"},
    { id:28, name:"Amazfit Watch", price:7000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71tpxtV0fXL._SL1500_.jpg"},
    { id:29, name:"Realme Watch", price:3500, category:"smartwatch", image:"https://m.media-amazon.com/images/I/61y2VVWcGBL._SL1500_.jpg"},
    { id:30, name:"Huawei Watch", price:15000, category:"smartwatch", image:"https://m.media-amazon.com/images/I/71tpxtV0fXL._SL1500_.jpg"},


    // MOBILE PHONES
    { id:31, name:"iPhone 15", price:80000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71yzJoE7WlL._SL1500_.jpg"},
    { id:32, name:"Samsung Galaxy", price:60000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:33, name:"OnePlus Phone", price:45000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:34, name:"Realme Phone", price:20000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:35, name:"Xiaomi Phone", price:18000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:36, name:"Vivo Phone", price:22000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:37, name:"Oppo Phone", price:25000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:38, name:"Motorola Phone", price:23000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:39, name:"Nothing Phone", price:35000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"},
    { id:40, name:"Google Pixel", price:65000, category:"mobilephones", image:"https://m.media-amazon.com/images/I/71SCx+V+J0L._SL1500_.jpg"}

  ];


  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        {categoryName.toUpperCase()}
      </h1>

      <div className="grid grid-cols-4 gap-8">

        {filteredProducts.map((product) => (

          <Link key={product.id} to={`/product/${product.id}`}>

            <div className="bg-white p-4 shadow rounded hover:scale-105 transition">

              <img
                src={product.image}
                alt={product.name}
                className="h-48 mx-auto"
              />

              <h3 className="mt-3 font-semibold">
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
  );
}

export default CategoryPage;