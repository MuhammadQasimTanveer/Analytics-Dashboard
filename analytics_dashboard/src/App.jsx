// src/App.js
import React, { useState } from 'react';
import './App.css';

// Import Components
import Header from './components/Header';
import MetricsCards from './components/MetricsCards';
import CustomerSegmentsChart from './components/CustomerSegmentsChart';
import SalesTrendChart from './components/SalesTrendChart';
import CustomerSegmentsPieChart from './components/CustomerSegmentsPieChart';
import SegmentMetricsTable from './components/SegmentMetricsTable';
import FilterComponent from './components/FilterComponent';

// Import Static Data
import { 
  customerSegmentsData, 
  salesTrendData, 
  metricsData, 
  segmentMetricsData 
} from './data/staticData';

function App() {
  // State Management
  const [selectedPeriod, setSelectedPeriod] = useState('all');
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  // Tab Navigation Data
  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'segments', name: 'Segments', icon: '👥' },
    { id: 'trends', name: 'Trends', icon: '📈' },
    { id: 'analytics', name: 'Analytics', icon: '🔍' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Filters */}
        <FilterComponent
          selectedPeriod={selectedPeriod}
          onPeriodChange={setSelectedPeriod}
          selectedSegment={selectedSegment}
          onSegmentChange={setSelectedSegment}
        />

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <MetricsCards metrics={metricsData} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CustomerSegmentsChart data={customerSegmentsData} />
              <CustomerSegmentsPieChart data={customerSegmentsData} />
            </div>
            
            <SalesTrendChart data={salesTrendData} />
          </div>
        )}

        {activeTab === 'segments' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <CustomerSegmentsChart data={customerSegmentsData} />
              <CustomerSegmentsPieChart data={customerSegmentsData} />
            </div>
            <SegmentMetricsTable data={segmentMetricsData} />
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="space-y-8">
            <SalesTrendChart data={salesTrendData} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <MetricsCards metrics={metricsData} />
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Trend Analysis</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <div>
                      <p className="font-medium text-green-800">Sales Growth</p>
                      <p className="text-sm text-green-600">Month over month</p>
                    </div>
                    <span className="text-2xl font-bold text-green-600">+15.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <p className="font-medium text-blue-800">Customer Acquisition</p>
                      <p className="text-sm text-blue-600">New customers this month</p>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">+8.7%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <div>
                      <p className="font-medium text-purple-800">Average Order Value</p>
                      <p className="text-sm text-purple-600">Per transaction</p>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">+12.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <SegmentMetricsTable data={segmentMetricsData} />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-medium text-blue-800">Top Performer</p>
                      <p className="text-sm text-gray-600">Regular Buyers generate 42% of total revenue</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <p className="font-medium text-green-800">Growth Opportunity</p>
                      <p className="text-sm text-gray-600">New Customers show 25% conversion potential</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <p className="font-medium text-yellow-800">Action Required</p>
                      <p className="text-sm text-gray-600">Occasional Buyers need retention strategy</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-semibold">3.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Churn Rate</span>
                      <span className="font-semibold">21.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer Lifetime Value</span>
                      <span className="font-semibold">$487</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cart Abandonment</span>
                      <span className="font-semibold">68.2%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">© 2025 E-commerce Analytics Dashboard. All rights reserved.</p>
            <div className="flex space-x-6">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Help</button>
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Settings</button>
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Export Data</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;