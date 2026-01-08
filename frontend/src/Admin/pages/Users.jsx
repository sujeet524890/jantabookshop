import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const responce = await axios.get("http://localhost:4000/user");
    setUser(responce.data.user);
   
  };
  console.log(user);

  return (
    <div>
      <div className="bg-white flex justify-between  p-4 rounded shadow">
        <div >
          <p className="font-semibold">User Management</p>
          <p className="text-gray-500">View and manage users</p>
          </div>
        <p className="text-2xl ">Tolat Users: {user.length}</p>
      </div>

      {/* User List */}

      <div className="mt-4   bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-4">User List</h3>

        {/* User Item */}

        {user.map((item) => (
          <div className="flex items-center justify-between border-b pb-3 mb-3">
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/vector-1767626090408-a23fae603963?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-medium">{item.username}</p>
                <p className="text-sm text-gray-600">{item.email}</p>
                <p className="text-sm text-gray-500">{item.password}</p>
              </div>
            </div>

            <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
              Delete
            </button>
          </div>
        ))}

        {/* Copy this block for more users */}
      </div>
    </div>
  );
};

export default Users;
