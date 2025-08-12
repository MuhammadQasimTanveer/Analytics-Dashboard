// src/components/FilterComponent.js
import React from 'react';

const FilterComponent = ({ 
  selectedPeriod, 
  onPeriodChange, 
  selectedSegment, 
  onSegmentChange 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
        </svg>
        Filters & Controls
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Time Period Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            📅 Time Period
          </label>
          <select
            value={selectedPeriod}
            onChange={(e) => onPeriodChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          >
            <option value="all">All Time</option>
            <option value="last6months">Last 6 Months</option>
            <option value="last3months">Last 3 Months</option>
            <option value="lastmonth">Last Month</option>
            <option value="lastweek">Last Week</option>
          </select>
        </div>

        {/* Customer Segment Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            👥 Customer Segment
          </label>
          <select
            value={selectedSegment}
            onChange={(e) => onSegmentChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white hover:border-gray-400"
          >
            <option value="all">All Segments</option>
            <option value="High Spenders">💎 High Spenders</option>
            <option value="Regular Buyers">🛍️ Regular Buyers</option>
            <option value="Occasional Buyers">🛒 Occasional Buyers</option>
            <option value="New Customers">🆕 New Customers</option>
          </select>
        </div>

        {/* Quick Actions */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ⚡ Quick Actions
          </label>
          <div className="flex space-x-2">
            <button 
              onClick={() => {
                onPeriodChange('all');
                onSegmentChange('all');
              }}
              className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
            >
              Reset All
            </button>
            <button 
              onClick={() => window.print()}
              className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200 text-sm font-medium"
            >
              Export
            </button>
          </div>
        </div>
      </div>

      {/* Filter Status */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {selectedPeriod !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              📅 {selectedPeriod.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              <button 
                onClick={() => onPeriodChange('all')}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ✕
              </button>
            </span>
          )}
          
          {selectedSegment !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              👥 {selectedSegment}
              <button 
                onClick={() => onSegmentChange('all')}
                className="ml-2 text-green-600 hover:text-green-800"
              >
                ✕
              </button>
            </span>
          )}
          
          {selectedPeriod === 'all' && selectedSegment === 'all' && (
            <span className="text-sm text-gray-500">No filters applied</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;