// Shape.js
import React from 'react';

const Shape = ({ shapeType, onDragStart }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('shapeType', shapeType);
    event.dataTransfer.effectAllowed = 'copy';
    onDragStart();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'red', // Replace with your desired shape styles
        margin: '5px',
        cursor: 'move',
      }}
    ></div>
  );
};

export default Shape;
