import React from 'react'
 import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Navbar = () => {
  
  const location = useNavigate()

  const isLogin =localStorage.getItem("usertoken")

  const [isOpen, setIsOpen] = useState(false);

  const hendalLout =()=>{
     const isLogin = localStorage.removeItem('usertoken')
     setIsOpen(false)
     toast.error("logout your account")
     
  }


  return (
    <div>
      
      <nav className="bg-blue-950 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Left Section - Logo & Name */}

          <div className="flex items-center rounded-2xl gap-2">
            <img 
              src="/image.png" 
              alt="JantaBookShop"
              className="w-10 h-10 rounded-2xl">
           </img>
            <span className="text-xl font-bold

             text-white">
              <Link to='/'>JantaBookShop</Link>
            </span>
          </div>
 
          {/* Right Section - Menu (Desktop) */}
          <div className="hidden md:flex space-x-19 text-white font-medium">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to={ isLogin ?`/Cart` : '/Login'} className="hover:text-blue-600" >Cart</Link>
            <Link to="/about" className="hover:text-blue-600">About</Link>

            {!isLogin ?
            <Link 
              to="/login"
              className="bg-white text-black px-4 py-1 rounded hover:bg-green-700"
            >
              Login
            </Link>
            :
            <Link 
              to="/login"
              className="bg-white text-black px-4 py-1 rounded hover:bg-green-700"
             onClick={hendalLout}>
              Logout
            </Link>
}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => isOpen? setIsOpen(false):setIsOpen(true)}>
              <div
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 2424"
              >
                <div
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                >☰</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen &&
        <div className="md:hidden bg-white shadow-lg">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={()=>setIsOpen(false)} >Home</Link>
          <Link to={ isLogin ?`/Cart` : '/Login'}className="block px-4 py-2 hover:bg-gray-100" onClick={()=>setIsOpen(false)} >Cart</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-100"  onClick={()=>setIsOpen(false)}>About</Link>
          {!isLogin ?
          <Link to="/login" className="block px-4 py-2 text-blue-600 font-semibold"  onClick={()=>setIsOpen(false)}>
            Login
          </Link> :
          <Link to="/login" className="block px-4 py-2 text-blue-600 font-semibold" onClick={hendalLout}
           >
              Logout
          </Link>
}
        </div>
      }
    </nav>
    </div>
  )
}


export default Navbar
