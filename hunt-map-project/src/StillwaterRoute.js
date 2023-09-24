import { Stage, Layer, Image } from 'react-konva';
import { useImage } from 'react-konva-utils'; // Import useImage from react-konva-utils
import stillwaterMap from './images/Stillwater2.png';
import React, { useState } from 'react';
import { Circle, Line } from 'react-konva';

function StillwaterRoute() {
  const [image] = useImage(stillwaterMap);
  const [points, setPoints] = useState([]);
  const [distance, setDistance] = useState(null);
  const [point1, setPoint1] = useState(null);
  const [point2, setPoint2] = useState(null);

  const handleStageClick = (e) => {
    const stage = e.target.getStage();
    const cursorPosition = stage.getPointerPosition();
  
    if (points.length === 0) {
      // Handle the first click
      setPoints([cursorPosition]);
      setPoint1(cursorPosition); // Store point1
    } else if (points.length === 1) {
      // Handle the second click
      setPoints([...points, cursorPosition]);
      setPoint2(cursorPosition); // Store point2
      calculateDistance(point1, cursorPosition); // Pass the current points
    } else {
      setPoints([]);
      setDistance(null);
    }
  };
  
  const calculateDistance = (pointA, pointB) => {
    if (pointA && pointB) {
      const dx = pointB.x - pointA.x;
      const dy = pointB.y - pointA.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      console.log(`Distance between points: ${dist.toFixed(2)} pixels`);
      setDistance(dist.toFixed(2));
    }
  };

  return (
    <div className="routes-container">
      <div className="map-container">
        <Stage width={803} height={803} onClick={handleStageClick}>
          <Layer>
            <Image
              image={image}
              width={803}
              height={803}
            />
            {points.map((point, index) => (
              <Circle
                key={index}
                x={point.x}
                y={point.y}
                radius={1}
                fill="red"
                draggable
                onDragEnd={calculateDistance}
              />
            ))}
            {points.length === 2 && (
              <Line
                points={[points[0].x, points[0].y, points[1].x, points[1].y]}
                stroke="blue"
                strokeWidth={2}
              />
            )}
          </Layer>
        </Stage>
      </div>
      {distance !== null && (
        <p>Distance between points: {distance*1.24533} meters</p>
      )}
    
    </div>
    
  );
}

export default StillwaterRoute;

/*
function StillwaterRoute() {

  return (
    <div className="routes-container">
        <div className="map-container">
          <img src={stillwaterMap} className="centered-image" alt="missing image" />
        </div>
    </div>
  );
}

export default StillwaterRoute;
*/