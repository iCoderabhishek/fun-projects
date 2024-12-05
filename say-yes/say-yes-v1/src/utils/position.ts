export const getRandomPosition = () => {
    // Keep the box within 80% of the viewport to prevent edge overflow
    const padding = 10;
    return {
      x: Math.random() * (100 - padding * 2) + padding,
      y: Math.random() * (100 - padding * 2) + padding,
    };
  };