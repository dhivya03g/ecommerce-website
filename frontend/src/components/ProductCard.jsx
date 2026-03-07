import { Link } from "react-router-dom";

function ProductCard({ product }) {

  return (

    <Link to={`/product/${product.id}`}>

      <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300">

        {/* Image */}
        <div className="h-48 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4 text-center">

          <h3 className="font-semibold text-lg">
            {product.name}
          </h3>

          <p className="text-green-600 font-bold mt-1">
            ₹{product.price}
          </p>

          {/* Rating */}
          <div className="text-yellow-400 mt-1">
            ⭐⭐⭐⭐☆
          </div>

          <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
            Add to Cart
          </button>

        </div>

      </div>

    </Link>

  );
}

export default ProductCard;