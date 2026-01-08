import React from 'react'

const Bestseller = () => {
  const bestSellers = [
  {
    id: 1,
    title: "Hindi",
    class:"11th",
    price: "50.60",
    image: "./hindi11.jpg",
  },
  {
    id: 2,
    title: "Chemistry",
    class:"12th",
    price: "50.60",
    image: "./chemistry.jpg",
  },
  {
    id: 3,
    title: "Math",
    class:"10th",
    price: "50.60",
    image: "./math10.jpg",
  },
  {
    id: 4,
    title: "History",
    class:"10th",
    price: "66.60",
    image: "./history.png",
  },
  
];

  return (
    <div className=' bg-gray-300'>
     <section className="max-w-7xl mx-auto  px-4 py-10">
       <h1 className="text-5xl font-bold text-center mb-8 text">
        📚 Best Sellers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {bestSellers.map((book) => (
          <div
            key={book.id}
            className="bg-blue-950 text-white rounded-lg shadow hover:shadow-md transition p-4"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-50 px-2 rounded"
            />
 
            <h3 className="mt-3 font-medium text-lg">
              {book.title}
            </h3>

            <p className="text-sm text-gray-500">
              {book.class}
            </p>

            <p className="mt-2 font-semibold">
              ₹{book.price}
            </p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-2 hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Bestseller
