// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <h1 className="text-3xl font-bold">E-commerce Analytics Dashboard</h1>
        <p className="text-blue-100 mt-1">Real-time insights and customer analytics</p>
      </div>
    </header>
  );
};

export default Header;