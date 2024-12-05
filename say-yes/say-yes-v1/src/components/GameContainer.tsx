import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Box } from './Box';
import { ThankYouBox } from './ThankYouBox';
import { getRandomPosition } from '../utils/position';
import { useThankYouBoxes } from '../hooks/useThankYouBoxes';

export const GameContainer: React.FC = () => {
  const [box2Position, setBox2Position] = useState(getRandomPosition());
  const { thankYouBoxes, addThankYouBox, removeThankYouBox } = useThankYouBoxes();

  const handleBox1Click = useCallback(() => {
    const position = getRandomPosition();
    addThankYouBox(position);
  }, [addThankYouBox]);

  const handleBox2Hover = useCallback(() => {
    setBox2Position(getRandomPosition());
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden p-4">
      <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Box onClick={handleBox1Click} variant="primary">
          YESS
        </Box>
      </div>

      <Box
        style={{
          position: 'absolute',
          left: `${box2Position.x}%`,
          top: `${box2Position.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
        onHover={handleBox2Hover}
        variant="secondary"
      >
        Noo
      </Box>

      <AnimatePresence>
        {thankYouBoxes.map((box) => (
          <ThankYouBox
            key={box.id}
            position={box.position}
            onAnimationComplete={() => {
              setTimeout(() => removeThankYouBox(box.id), 2000);
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};