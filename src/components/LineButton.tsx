"use client";

import React from 'react';
import { LineIcon } from './CustomIcons';

interface LineButtonProps {
  lineId?: string;
}

const LineButton: React.FC<LineButtonProps> = ({ lineId = "YOUR_LINE_ID" }) => {
  return (
    <a 
      href={`https://line.me/ti/p/${lineId}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#06C755] shadow-lg hover:bg-[#05b54b] transition-all transform hover:scale-110 z-50"
      aria-label="加我的 LINE"
    >
      <LineIcon style={{ fontSize: '24px', color: 'white' }} />
    </a>
  );
};

export default LineButton;
