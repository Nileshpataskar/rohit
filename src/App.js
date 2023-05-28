// App.js
import React from 'react';
import Shape from './Shape';
import PaintArea from './PaintArea';

const App = () => {
  const handleDragStart = () => {
    // Optional: You can perform any logic when a shape is dragged
  };

  return (
    <div style={{ display: 'flex' }}>
      <div>
        <h2>Shapes Area</h2>
        <Shape shapeType="square" onDragStart={handleDragStart} />
        {/* Add more shapes here */}
      </div>
      <div>
        <h2>Paint Area</h2>
        <PaintArea />
      </div>
      <div style={{ position: 'fixed', bottom: '10px', left: '10px' }}>
        
      </div>
    </div>
  );
};

export default App;
