import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

const Login = () => {
  window.scrollTo(0, 0);

  const location = useNavigate();

  const [reg, setReg] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  

  // login endpoint
  const handlelogin = async () => {
    try {
      const response = await axios.post("https://jantabookshop.onrender.com/login", {
        email,
        password,
      });
      
       localStorage.setItem('usertoken',response.data.token)
       if(response.data.success){
        location('/') 
       }
        toast.success("login successful")
      
      if(response){
      setEmail("")
      setPassword("")}
    } catch {
     
    }
  };

  //signup endpoint
  const handlesignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/signup", {
        username, email, password
      });
      
       toast.success("Signup successful")
        localStorage.setItem('sinuptoken',response.data.token)
      if(response.data.success){
        location('/') 
       }
    } catch {
      
    }
  };

  return (
    <div>
      {reg ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                value={email}
                placeholder="Enter your email"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
                onChange={handleEmail}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                value={password}
                placeholder="Enter your password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
                onChange={handlePassword}
              />
            </div>

            {/* Login Button */}
            <button
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              onClick={handlelogin}
              
            >
              Login
            </button>

            {/* Extra */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account?{" "}
              <span
                className="text-black cursor-pointer font-medium"
                onClick={() => {
                  setReg(false);
                }}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Username</label>
              <input
                type="username"
                placeholder="Enter your username"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
                onChange={handleUsername}
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Emai</label>
              <input
                type="Email"
                placeholder="Enter your email"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
                onChange={handleEmail}
              />
            </div>
            {/*conform Password */}
            <div className="mb-6">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
                onChange={handlePassword}
              />
            </div>

            {/* Login Button */}
            <button
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              onClick={handlesignup}
              
            >
              Register
            </button>

            {/* Extra */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Don’t have an account?{" "}
              <span
                className="text-black cursor-pointer font-medium"
                onClick={() => setReg(true)}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
