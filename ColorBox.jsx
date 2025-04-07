// components/ColorBox/ColorBox.jsx
import React from 'react';
import './ColorBox.css';

const ColorBox = ({ color }) => {
  return (
    <div 
      className="color-box" 
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorBox;