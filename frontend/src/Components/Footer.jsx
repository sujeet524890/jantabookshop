import React from 'react'

const Footer = () => {
  return (
    <div>
      
       <footer className="bg-gray-900  text-gray-300 bottom-0  sm:bottom-0 md:bottom-0 top-100  w-full">
               <div className="max-w-4xl flex sm:flex-row flex-col  items-start justify-between mx-auto px-10  py-1">
                              
                              {/* <!-- Brand --> */}
                              <div>
                              <h2 className="text-2xl p-2 font-bold text-white ">JantaBookShop</h2>
                              <p className="text-sm">
                              Your trusted bookstore for bestsellers, academics, and novels.
                              </p>
                              </div>

                              {/* <!-- Contact --> */}
                              <div className='gap-8 '>
                                <h3 className="text-lg font-bold text-white p-1 mb-1">Contact</h3>
                                <p className="text-sm">📍Noida, India</p>
                                <p className="text-sm ">📧sujeeten1@gmail.com</p>
                                <p className="text-sm ">📞+916392414213</p>
                              </div>

                        
               </div>
                  {/* <!-- Bottom Bar --> */}
                              <div className="border-t  border-gray-700 mt-2 pt-2 py-5 text-center text-sm">
                              JantaBookShop 2026 © All rights reserved.
                              </div>
        </footer>
    </div>
  )
}

export default Footer
