import React from 'react';

const WavyDivider = ({ 
  topColor = '#ffffff', 
  middleColor = '#ffffff', 
  bottomColor = '#ffffff' 
}) => {
  return (
    <div style={{ 
      position: 'absolute', 
      bottom: '-1px', 
      left: 0, 
      width: '100%', 
      overflow: 'hidden', 
      lineHeight: 0, 
      transform: 'rotate(180deg)' 
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ 
          position: 'relative', 
          display: 'block', 
          width: 'calc(100% + 1.3px)', 
          height: '100px' 
        }}
      >
        {/* First Wave */}
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
             82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
             906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
             214.34,3V0H0V27.35A600.21,600.21,0,0,0,
             321.39,56.44Z"
          fill={topColor}
        />

        {/* Second Wave */}
        <path
          d="M321.39,76.44c58-10.79,114.16-30.13,172-41.86,
             82.39-16.72,168.19-17.73,250.45-.39C823.78,51,
             906.67,92,985.66,112.83c70.05,18.48,146.53,26.09,
             214.34,3V0H0V47.35A600.21,600.21,0,0,0,
             321.39,76.44Z"
          fill={middleColor}
          opacity="0.75"
        />

        {/* Third Wave */}
        <path
          d="M321.39,96.44c58-10.79,114.16-30.13,172-41.86,
             82.39-16.72,168.19-17.73,250.45-.39C823.78,71,
             906.67,112,985.66,132.83c70.05,18.48,146.53,26.09,
             214.34,3V0H0V67.35A600.21,600.21,0,0,0,
             321.39,96.44Z"
          fill={bottomColor}
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
