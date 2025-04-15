"use client";

import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

const MobileMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="block md:hidden relative">
      <button 
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="開啟選單"
      >
        <MenuOutlined className="text-xl" />
      </button>
      
      {/* 行動版導航選單 */}
      <div 
        className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <a href="#about" className="block px-4 py-2 hover:bg-gray-100">關於我</a>
        <a href="#services" className="block px-4 py-2 hover:bg-gray-100">服務項目</a>
        <a href="#contact" className="block px-4 py-2 hover:bg-gray-100">聯絡我</a>
      </div>
    </div>
  );
};

export default MobileMenu;