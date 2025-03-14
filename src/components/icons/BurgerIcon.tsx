import React from 'react';

interface BurgerIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const BurgerIcon: React.FC<BurgerIconProps> = () => {
  return (
    <svg 
      version="1.1" 
      id="Layer_1" 
      xmlns="http://www.w3.org/2000/svg" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      x="0px" 
      y="0px"
      viewBox="0 0 40.878 20.174" 
      enableBackground="new 0 0 40.878 20.174" 
      xmlSpace="preserve"
      style={{width: '100%', height: 'auto', overflow: 'visible'}}
    >
      <g>
        <path fill="#A39475" d="M40.878,0L20.439,20.174L0,0L40.878,0z"/>
        <line fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" x1="14.141" y1="5.995" x2="26.737" y2="5.995"/>
        <line fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" x1="14.141" y1="7.824" x2="26.737" y2="7.824"/>
        <line fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeMiterlimit="10" x1="14.141" y1="9.653" x2="26.737" y2="9.653"/>
      </g>
    </svg>
  );
};

export default BurgerIcon; 