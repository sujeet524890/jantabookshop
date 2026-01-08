import React from 'react'

const Dashboard = () => {
  return (
    <div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-gray-500">Total Users</h2>
                <p className="text-2xl font-bold">120</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-gray-500">Total Products</h2>
                <p className="text-2xl font-bold">85</p>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-gray-500">Orders</h2>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
    </div>
  )
}

export default Dashboard
