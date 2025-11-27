import React, { useState, useEffect, useRef } from 'react';
import styles from './Parallax.module.scss';

const Parallax = ({ imageUrl, speed = 0.3, height = '60vh' }) => {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        
        const normalizedProgress = (scrollProgress * 2) - 1;
        
        const maxMovement = 15;
        const movement = normalizedProgress * maxMovement * speed;
        
        const limitedMovement = Math.max(-maxMovement, Math.min(maxMovement, movement));
        
        setOffset(limitedMovement);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={styles.parallaxContainer}
      style={{
        '--parallax-height': height,
      }}
    >
      <div
        className={styles.parallaxImage}
        style={{
          '--parallax-image': `url(${imageUrl})`,
          '--parallax-offset': `${offset}%`,
        }}
      />
    </div>
  );
};

export default Parallax;
