// src/components/MetricsCards.js
import React from 'react';

const MetricsCards = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Revenue</h3>
        <p className="text-3xl font-bold text-blue-600">${metrics.totalRevenue.toLocaleString()}</p>
        <span className="text-sm text-gray-500">+12% from last month</span>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Customer Retention</h3>
        <p className="text-3xl font-bold text-green-600">{metrics.customerRetentionRate}%</p>
        <span className="text-sm text-gray-500">+5.2% from last month</span>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Avg Order Value</h3>
        <p className="text-3xl font-bold text-yellow-600">${metrics.averageOrderValue}</p>
        <span className="text-sm text-gray-500">+8.1% from last month</span>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Customers</h3>
        <p className="text-3xl font-bold text-purple-600">{metrics.totalCustomers}</p>
        <span className="text-sm text-gray-500">+15% from last month</span>
      </div>
    </div>
  );
};

export default MetricsCards;