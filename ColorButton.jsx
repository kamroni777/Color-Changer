
import React from 'react';
import './ColorButton.css';

const ColorButton = ({ onClick }) => {
  return (
    <button 
      className="color-button" 
      onClick={onClick}
    >
      Change Color
    </button>
  );
};

export default ColorButton;
