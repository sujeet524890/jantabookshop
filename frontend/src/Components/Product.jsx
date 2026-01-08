import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = ({ addToCart }) => {
  const [product, setProduct] = useState([]);
  
 useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const responce = await axios.get("https://jantabookshop.onrender.com/product");
    setProduct(responce.data.data);
    
    console.log(responce.data.message)
    
    
  };
  console.log("addToCart:", addToCart);
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-center mb-8">📚 Best Product</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {product.map((item) => (
           
              <div className="bg-blue-950 cursor-pointer text-white rounded-lg shadow hover:shadow-md transition p-4">
                 <Link key={item.id} to={`/ProductPages/${item._id}`} state={item}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-50 px-2 rounded"
                />

                <h3 className="mt-3 font-medium text-lg">{item.title}</h3>

                <p className="text-sm text-gray-500">{item.class}</p>

                <p className="mt-2 font-semibold">₹{item.price}</p>
</Link>
                <button className="mt-4 w-full bg-black text-white py-2 rounded-2 cursor-pointer hover:bg-gray-800"
                onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
