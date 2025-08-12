// src/components/SegmentMetricsTable.js
import React from 'react';

const SegmentMetricsTable = ({ data }) => {
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = data.reduce((sum, item) => sum + item.orders, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Segment-wise Performance</h3>
        <div className="flex space-x-4 text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            Total Revenue: ${totalRevenue.toLocaleString()}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            Total Orders: {totalOrders}
          </span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Segment
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Orders
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg Order Value
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue Share
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => {
              const revenueShare = ((item.revenue / totalRevenue) * 100).toFixed(1);
              
              return (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 rounded-full mr-3 ${
                        item.segment === 'High Spenders' ? 'bg-blue-500' :
                        item.segment === 'Regular Buyers' ? 'bg-green-500' :
                        item.segment === 'Occasional Buyers' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                      <div className="font-medium text-gray-900">{item.segment}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-green-600 font-semibold text-lg">
                      ${item.revenue.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-gray-900 font-medium">{item.orders}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-blue-600 font-semibold">
                      ${item.avgOrder.toFixed(2)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full" 
                          style={{ width: `${revenueShare}%` }}
                        ></div>
                      </div>
                      <span className="text-purple-600 font-medium">{revenueShare}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Summary Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Best Performer</p>
            <p className="text-lg font-bold text-green-600">
              {data.reduce((max, item) => item.revenue > max.revenue ? item : max, data[0]).segment}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Highest AOV</p>
            <p className="text-lg font-bold text-blue-600">
              ${Math.max(...data.map(item => item.avgOrder)).toFixed(2)}
            </p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Most Active</p>
            <p className="text-lg font-bold text-purple-600">
              {data.reduce((max, item) => item.orders > max.orders ? item : max, data[0]).segment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SegmentMetricsTable;