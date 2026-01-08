import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const AdminLogin = () => {
  

  
const location = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hendalemail = (e) => {
    setUsername(e.target.value);
  };
  const hendalpassword = (e) => {
    setPassword(e.target.value);
  };

  const hendallogin = async (e) => {
    e.preventDefault();
     
    const responce = await axios.post("https://jantabookshop.onrender.com/adminlogin", {
      username,
      password,
    });
    console.log(responce.data.message);
    console.log(responce.data.token)
   
    localStorage.setItem('admintoken', responce.data.token)

    if(responce.data.success){
      location('/Adminpannal')
      toast.success("login success")
    }
   
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center -mt-40 bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Admin Login</h2>

        <form className="space-y-4">
          {/* Email */}
          <input
            type="username"
            valiu={username}
            placeholder="Username"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={hendalemail}
          />

          {/* Password */}
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={hendalpassword}
          />

          {/* Button */}
       
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={hendallogin}
          >
            Login
          </button>
          
          

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
