// PaintArea.js
import React, { useState } from 'react';

const PaintArea = () => {
  const [shapes, setShapes] = useState([]);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const handleDrop = (event) => {
    event.preventDefault();
    const shapeType = event.dataTransfer.getData('shapeType');
    // Get the x and y coordinates where the shape is dropped
    const x = event.clientX - event.currentTarget.offsetLeft;
    const y = event.clientY - event.currentTarget.offsetTop;
    setCoordinates({ x, y });
    // Create a new shape object with shapeType, coordinates, and unique id
    const newShape = {
      id: Date.now(),
      type: shapeType,
      x,
      y,
      width: 50, // Initial width
      height: 50, // Initial height
    };
    setShapes([...shapes, newShape]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleResize = (event, shape) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const width = offsetX - shape.x;
    const height = offsetY - shape.y;

    const updatedShapes = shapes.map((shp) => {
      if (shp.id === shape.id) {
        return { ...shp, width, height };
      }
      return shp;
    });
    setShapes(updatedShapes);
  };

  return (
    <div>
      <div
        style={{
          width: '400px',
          height: '400px',
          border: '1px solid black',
          position: 'relative',
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              position: 'absolute',
              left: shape.x,
              top: shape.y,
              width: shape.width,
              height: shape.height,
              backgroundColor: 'red', // Replace with your desired shape styles
            }}
            draggable
            onDragStart={(event) => event.preventDefault()}
            onMouseDown={(event) => event.preventDefault()}
            onMouseUp={(event) => event.preventDefault()}
            onMouseMove={(event) => handleResize(event, shape)}
          ></div>
        ))}
      </div>
      <div style={{ position: 'fixed', bottom: '10px', left: '10px', zIndex: '9999' }}>
        <p style={{ fontSize: '18px', margin: '0' }}>
<h1> 
Shape coordinates: x = {coordinates.x}, y = {coordinates.y}


</h1>
        </p>
      </div>
    </div>
  );
};

export default PaintArea;
