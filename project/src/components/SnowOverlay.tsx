import React from 'react';
import { Snowflake } from 'lucide-react';

function SnowOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <Snowflake
          key={i}
          size={16}
          className="text-white/20 absolute animate-fall"
          style={{
            left: `${Math.random() * 100}vw`,
            top: `-20px`,
            animation: `fall ${Math.random() * 5 + 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`
          }}
        />
      ))}
    </div>
  );
}

export default SnowOverlay;