import React from 'react'

const Chekoput = () => {
  return (
    <div>
               <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Checkout Page
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT SECTION - FORM */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Billing Details
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Full Address"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <input
                type="email"
                placeholder="Gmail Address"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Pin Code"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Secret Key"
                className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Place Order
              </button>
            </form>
          </div>

          {/* RIGHT SECTION - ORDER SUMMARY */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Order Summary
            </h3>

            <div className="border rounded p-4 space-y-4">
              {/* {cartItems.map((item) => ( */}
                <div
               //    key={item.id}
                  className="flex justify-between border-b pb-2"
                >
                  <div>
                    <p className="font-medium"></p>
                    <p className="text-sm text-gray-500">
                      {/* Qty: {item.quantity} */}
                    </p>
                  </div>
                  <p className="font-semibold">
                    
                  </p>
                </div>
             /

              <div className="flex justify-between text-lg font-semibold pt-2">
                <p>Total</p>
                <p>₹</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Chekoput
