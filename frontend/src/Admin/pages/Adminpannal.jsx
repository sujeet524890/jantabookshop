import React from "react";
import { useState } from "react";
import Dashboard from "./Dashboard";
import Products from "./Products";
import Users from "./Users";
import Orders from "./Orders";
import AdminLogin from "./AdminLogin";
import { toast } from "react-toastify";

const Adminpannal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [side,setSide]=useState(true)

  const adminLogin =localStorage.getItem("admintoken")

const hendallogout =()=>{
    localStorage.removeItem("admintoken")
  
    window.location.reload()
       toast.error("Adimin logout")
  }

  return (
    <div >
      <div className="min-h-screen flex  bg-gray-100">
        {/* Sidebar */}
        <aside className={`w-64 bg-gray-900 text-white ${side ? "block" : "hidden"} `}>
          <div  className="p-6 text-xl font-bold border-b border-gray-700 cursor-pointer">
            Admin Panel
          </div>

          <ul className="p-4 space-y-2">
            <li
              onClick={() => setActiveTab("dashboard")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "dashboard" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              Dashboard
            </li>

            <li
              onClick={() => setActiveTab("products")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "products" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
             >
              Products
            </li>

            <li
              onClick={() => setActiveTab("users")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "users" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              Users
            </li>

            <li
              onClick={() => setActiveTab("orders")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "orders" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              Orders
            </li>
            {adminLogin ?
            <li
              onClick={hendallogout}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "Login" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
             logout
            </li>
            :
            <li
              onClick={() => setActiveTab("login")}
              className={`p-2 rounded cursor-pointer ${
                activeTab === "Login" ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
             Login
            </li>
            }
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex items-start justify-between  text-center p-6">
          <h1 className="text-2xl font-semibold mb-4 capitalize">
            {activeTab}
          </h1>
          <button  className="cursor-pointer"
          onClick={()=>
          {
          side?setSide(false):setSide(true) 
          }
          }
          >Hide side</button>
</div>
          {/* Dashboard */}
          {activeTab === "dashboard" && (
           <Dashboard></Dashboard>
          )}

          {/* Products */}
          {activeTab === "products" && (
            <Products></Products>
          )}

          {/* Users */}
          {activeTab === "users" && (
            <Users ></Users>
          )}

          {/* Orders */}
          {activeTab === "orders" && (
           <Orders></Orders>
          )}
          {/* Login */}
          {activeTab === "login" && (
           <AdminLogin></AdminLogin>
          )}
        </main>
      </div>
    </div>
  );
};

export default Adminpannal;
