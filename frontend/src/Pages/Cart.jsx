import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({
   cartItems, updateQty, removeItem }) => {
  window.scrollTo(0, 0);
  

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
    


  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 pt-20 pb-55 py-10">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.title}</h2>
                    <p className="text-gray-600"></p>

                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => updateQty(item._id, "dec")}
                        className="px-3 py-1 border rounded"
                      >
                        −
                      </button>
                      <span className="font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQty(item._id, "inc")}
                        className="px-3 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-semibold">
                      ₹{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 text-sm mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="border p-6 rounded-lg h-fit">
    <h2 className="text-xl font-semibold mb-4">Order_Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total Price</span>
              <span className="font-semibold">₹{totalPrice}</span>
            </div>

          
          { cartItems.length == 0 ?
                 <button  disabled className="w-full bg-red-500 text-white py-3 rounded hover:bg-gray-800 transition">
                Proceed to Checkout
            </button>
            :
            <Link to={ '/Chekout' }state={
               { totalPrice:totalPrice}}
                >
            <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">           
                Proceed to Checkout
            </button>
            </Link>
          }   
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// const Cart = ({ cartItems, updateQty, removeItem }) => {
//   window.scrollTo(0, 0);

//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="max-w-6xl mx-auto px-4 pt-20">
//       <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id} className="flex gap-4 border p-4 rounded">
//             <img src={item.image} className="w-24 h-24" />

//             <div className="flex-1">
//               <h2 className="font-semibold">{item.title}</h2>
//               <p>₹{item.price}</p>

//               <div className="flex gap-3 mt-3">
//                 <button onClick={() => updateQty(item.id, "dec")}>−</button>
//                 <span>{item.quantity}</span>
//                 <button onClick={() => updateQty(item.id, "inc")}>+</button>
//               </div>
//             </div>

//             <div>
//               <p>₹{item.price * item.quantity}</p>
//               <button
//                 className="text-red-500"
//                 onClick={() => removeItem(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))
//       )}

//       <h2 className="mt-6 font-bold">Total: ₹{totalPrice}</h2>
//     </div>
//   );
// };

// export default Cart;
