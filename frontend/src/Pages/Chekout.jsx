import React from 'react'
import { useState } from 'react';
import { useLocation ,useNavigate} from 'react-router-dom';
import {  toast } from 'react-toastify';
const Chekout = () => {
const location = useLocation();
const navigate = useNavigate()

  const {  totalPrice } = location.state || {
    // cartItems: [],
    // totalPrice: 0,
  };
  console.log(totalPrice)
  const shiping = 50
  const TotalPrice = totalPrice + shiping

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode
    ) {
     toast.warning("Please fill all field")
     return
      
       
    }
    localStorage.removeItem("cart")
    navigate('/')
  };
  
  return (
    <div className='py-18'>
               <div className="min-h-screen  bg-gray-100  p-2 md:p-2">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8 ">
        
        {/* Billing Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full border p-2 rounded"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border p-2 rounded"
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              className="w-full border p-2 rounded"
              rows="3"
              onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="border p-2 rounded"
                onChange={handleChange}
              />
              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                className="border p-2 rounded"
                onChange={handleChange}
              />
            </div>

            {/* Payment Method */}
            <div>
              <h3 className="font-medium mb-2">Payment Method</h3>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={formData.payment === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2 mt-1 line-through text-gray-500">
                <span>
                Online Payment
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
             >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="border rounded p-4 space-y-3">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>Shipping</span>
              <span>₹50</span>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹{TotalPrice}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
      
    </div>
  )
}

export default Chekout
