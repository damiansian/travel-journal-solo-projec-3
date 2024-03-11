// LocationLink.js
import React from 'react';

const LocationLink = ({ id, href, text, labelledBy }) => {
  return (
    <div className='location--link' id={id}>
      <a href={href} aria-labelledby={`${id} ${labelledBy}`}>{text}</a>
    </div>
  );
};

export default LocationLink;