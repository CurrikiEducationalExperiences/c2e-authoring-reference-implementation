/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

const ShareLinkMdSvg = ({ primaryColor, className = '' }) => (
  <>
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.19043 10.906C8.57913 11.4262 9.07504 11.8566 9.64453 12.1681C10.214 12.4795 10.8438 12.6647 11.491 12.7111C12.1383 12.7575 12.788 12.6641 13.396 12.437C14.004 12.21 14.5561 11.8547 15.0149 11.3953L17.7303 8.67724C18.5546 7.82285 19.0108 6.67854 19.0005 5.49076C18.9901 4.30299 18.5142 3.16678 17.6751 2.32686C16.8361 1.48695 15.701 1.01052 14.5144 1.0002C13.3278 0.98988 12.1847 1.44649 11.3311 2.27168L9.77437 3.82097"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.8102 9.09401C11.4215 8.57384 10.9256 8.14343 10.3561 7.83198C9.78661 7.52053 9.15687 7.33532 8.50959 7.28892C7.8623 7.24251 7.21263 7.336 6.60461 7.56304C5.9966 7.79007 5.44448 8.14534 4.98569 8.60476L2.27037 11.3228C1.44601 12.1772 0.98986 13.3215 1.00017 14.5093C1.01048 15.6971 1.48643 16.8333 2.3255 17.6732C3.16457 18.5131 4.29963 18.9895 5.48621 18.9999C6.67279 19.0102 7.81595 18.5536 8.66947 17.7284L10.2172 16.1791"
        stroke={primaryColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </>
);

export default ShareLinkMdSvg;
