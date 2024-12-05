import { useState, useCallback } from 'react';

interface ThankYouBox {
  id: string;
  position: { x: number; y: number };
}

export const useThankYouBoxes = () => {
  const [thankYouBoxes, setThankYouBoxes] = useState<ThankYouBox[]>([]);

  const addThankYouBox = useCallback((position: { x: number; y: number }) => {
    const newBox = {
      id: Math.random().toString(36).substr(2, 9),
      position,
    };
    setThankYouBoxes((prev) => [...prev, newBox]);
  }, []);

  const removeThankYouBox = useCallback((id: string) => {
    setThankYouBoxes((prev) => prev.filter((box) => box.id !== id));
  }, []);

  return {
    thankYouBoxes,
    addThankYouBox,
    removeThankYouBox,
  };
};