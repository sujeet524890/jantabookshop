import React from "react";
import { useLocation, useParams } from "react-router-dom";

const itemPages = ({addToCart}) => {
   
  const location = useLocation();

  const item = location.state; // received item

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <!-- PagesitemPages Image --> */}
          <div className="flex justify-center ">
            <img
             src={item.image}  
              alt={item.title}
              
              className="rounded-lg shadow-lg w-full h-110 max-w-md"
            />
          </div>

          {/* <!-- PagesitemPages Details --> */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {item.title}
            </h1>

            {/* <!-- Rating --> */}
            <div className="flex items-center mt-3">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="ml-2 text-sm text-gray-600">{item.rating}</span>
            </div>

            {/* <!-- Price --> */}
            <p className="text-2xl font-semibold text-green-600 mt-4">
             ₹{item.price}
              <span className="text-gray-400 line-through text-lg ml-2">
               ₹{item.oldprice}
              </span>
            </p>

            {/* <!-- Description --> */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              {item.description}
            </p>

            {/* <!-- Quantity --> */}
            {/* <div className="flex items-center mt-6">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-lg">−</button>
                <span className="px-4 py-1">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
            </div> */}

            {/* <!-- Buttons --> */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
             onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>

              <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
                Buy Now
              </button>
            </div>

            {/* <!-- Extra Info --> */}
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>✔ Free delivery within 3–5 days</li>
              <li>✔ Easy 7-day return</li>
              <li>✔ Secure payment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default itemPages;
