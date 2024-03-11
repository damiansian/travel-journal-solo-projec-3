// Card.js
import React from 'react';
import LocationLink from '../components/LocationLink';

const Card = ({ id, imgSrc, imgAlt, location, destination, date, description, linkHref }) => {
  // Generate unique IDs for the card
  const locationId = `${location.toLowerCase()}l`;
  const destinationId = `${location.toLowerCase()}h`;
  const linkId = `${location.toLowerCase()}a`; // Unique ID for the anchor tag
  const cardId = `card-${id}`;

  return (
    <div id={cardId} className='card'>
      <div className='card--image'>
        <img className='card--image' src={imgSrc} alt={imgAlt} aria-labelledby={`${locationId} ${destinationId}`} />
      </div>
      <div className='card--contents'>
        <div className='location'>
          <div className='location-pin'>
            <img src='../src/images/pin.svg' alt="pin" />
          </div>
          <div id={locationId} className='location--text'>
            {location}
          </div>
          <LocationLink id={linkId} href={linkHref} text={`View on Google Maps`} labelledBy={`${locationId} ${destinationId}`} />
        </div>
        <div id={destinationId} className='destination' role="heading" aria-level="2">
          {destination}
        </div>
        <div className='date'>
          {date}
        </div>
        <div className='description'>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;