import React from 'react';

const Dashbord = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">

      {/* Dashboard Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-700">🚀 Welcome to Your Dashboard</h1>

      {/* Top Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">👤 Total Users</h2>
          <p className="text-2xl font-bold text-blue-600 mt-2">1,234</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">📦 Total Orders</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">567</p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">💰 Total Revenue</h2>
          <p className="text-2xl font-bold text-yellow-600 mt-2">₹1,23,456</p>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white p-6 rounded-lg shadow space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">🕒 Recent Activities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>New user registration: John Doe</li>
          <li>Order #1234 placed by user123</li>
          <li>Payment received from client ABC</li>
          <li>New support ticket created</li>
        </ul>
      </div>

      {/* Notification / Alert Box */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow">
        <p className="font-semibold">⚠️ Upcoming Server Maintenance!</p>
        <p className="text-sm">Our servers will be down for maintenance on 30th June, 2 AM - 4 AM.</p>
      </div>

      {/* User Profile Overview */}
      <div className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6 items-center">
        <img
          src="../assets/login.png"
          alt="Profile"
          className="rounded-full border-2 border-blue-500"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800">👨‍💼 Admin: Adarsh Tiwari</h2>
          <p className="text-gray-600">Role: Super Admin</p>
          <p className="text-gray-600">Email: adarsh@example.com</p>
        </div>
      </div>

      {/* Dummy Chart Placeholder */}
      <div className="bg-white p-6 rounded-lg shadow text-center text-gray-500">
        <p className="italic">📊 Chart or Analytics Component Placeholder</p>
        <p>Add your chart component here later...</p>
      </div>

    </div>
  );
};

export default Dashbord;
