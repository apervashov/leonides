import React from 'react';

interface CloseIconProps {
  color?: string;
  width?: number;
  height?: number;
  className?: string;
}

const CloseIcon: React.FC<CloseIconProps> = () => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="57.81px" height="57.81px" viewBox="0 0 57.81 57.81" enable-background="new 0 0 57.81 57.81" xmlSpace="preserve">
<g>
	<path fill="#A39475" d="M57.81,57.81L0.374,57.81L0,0L57.81,57.81z"/>
	<line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" x1="15" y1="25" x2="30" y2="40"/>
	<line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" x1="12" y1="28" x2="27" y2="43"/>
	<line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" x1="9" y1="31" x2="24" y2="46"/>
</g>
</svg>
  );
};

export default CloseIcon; 