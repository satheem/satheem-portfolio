import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useSpring(-100, { stiffness: 500, damping: 30 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 30 });
  
  const dotX = useSpring(-100, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(-100, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor-hoverable]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e: Event) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-cursor-hoverable]')) {
          setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, dotX, dotY]);

  const cursorVariants = {
    default: {
      scale: 1,
      backgroundColor: 'rgba(255, 107, 0, 0)',
      border: '1px solid rgba(255, 107, 0, 0.5)',
    },
    hover: {
      scale: 1.5,
      backgroundColor: 'rgba(255, 107, 0, 0.2)',
      border: '1px solid rgba(255, 107, 0, 0)',
    },
  };
  
  const dotVariants = {
    default: {
      scale: 1,
    },
    hover: {
      scale: 1.2,
    },
  }

  return (
    <>
      <motion.div
        variants={cursorVariants}
        animate={isHovering ? 'hover' : 'default'}
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] custom-cursor"
      />
      <motion.div
        variants={dotVariants}
        animate={isHovering ? 'hover' : 'default'}
        style={{
          x: dotX,
          y: dotY,
        }}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#FF6B00] pointer-events-none z-[9999] custom-cursor"
      />
    </>
  );
};

export default Cursor;