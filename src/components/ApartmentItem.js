import React from 'react';
import { Link } from 'react-router-dom';
import './ApartmentItem.css';

/**
 * ApartmentItem.js
 * 
 * Renders a single apartment card, showing image, title, location, and price.
 * 
 * @param {Object} props
 * @param {number} props.id         - Unique identifier (not displayed directly)
 * @param {string} props.title      - Apartment title
 * @param {string} props.location   - City or neighborhood
 * @param {number} props.price      - Rent price
 * @param {string} props.imageUrl   - URL of the apartment image
 */
function ApartmentItem({ id, title, location, price, imageUrl }) {
    return (
      // Wrap entire card in Link to "/apartments/{id}"
    <Link to={`/apartments/${id}`} className="apartment-link">
      <div className="apartment-item" key={id}>
        {/* Apartment image */}
        <img
          src={imageUrl}
          alt={`Apartment: ${title}`}
          className="apartment-image"
        />

        {/* Container for text details */}
        <div className="apartment-details">
          <h2 className="apartment-title">{title}</h2>
          <p className="apartment-location">{location}</p>
          <p className="apartment-price">€{price} / month</p>
        </div>
      </div>
    </Link>
    );
}

export default ApartmentItem;