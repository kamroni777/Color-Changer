// components/ColorChanger/ColorChanger.jsx
import React, { useState } from 'react';
import ColorBox from '../ColorBox';
import ColorButton from '../ColorButton';
import './ColorChanger.css';

const ColorChanger = () => {
  const [color, setColor] = useState('#3498db');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = '#';
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  const handleColorChange = () => {
    setColor(getRandomColor());
  };

  return (
    <div className="color-changer-container">
      <h1>Color Changer</h1>
      <ColorBox color={color} />
      <ColorButton onClick={handleColorChange} />
    </div>
  );
};

export default ColorChanger;