import React from 'react'

const About = () => {
  window.scrollTo(0,0)
  
  return (
    <div> <div className="bg-white py-10">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            
            We are passionate about delivering quality products and
            unforgettable experiences to our customers.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Our website is built with a mission to provide reliable, affordable,
              and high-quality products. We focus on customer satisfaction,
              innovation, and trust.
            </p>
            <p className="text-gray-600">
              From carefully curated collections to smooth online shopping,
              we make sure every visit brings value to you.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="./image.png"
              alt="About us"
              className="rounded-lg shadow"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-10">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-semibold text-lg mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality and standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-semibold text-lg mb-2">Trust</h3>
              <p className="text-gray-600">
                Honest service and transparency define us.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-semibold text-lg mb-2">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is always our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Want to Know More?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our products and experience quality like never before.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Explore Now
        </button>
      </section>
    </div>
      
    </div>
  )
}

export default About
