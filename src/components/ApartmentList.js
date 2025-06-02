import React, { useState } from 'react';
import apartmentsData from '../data/apartments';
import ApartmentItem from './ApartmentItem';
import './ApartmentList.css';

/**
 * ApartmentList.js
 * 
 * Displays a list of apartments.
 * Uses React state to hold the apartments array.
 */
function ApartmentList() {
  // Initialize state with sample data
  const [apartments] = useState(apartmentsData);

  return (
    <section className="apartment-list-container">
      <h2>Available Apartments</h2>

      {/* Container for grid or flex layout */}
      <div className="apartment-list-grid">
        {apartments.map((apt) => (
          // For each apartment, render an ApartmentItem
          <ApartmentItem
            key={apt.id}
            id={apt.id}
            title={apt.title}
            location={apt.location}
            price={apt.price}
            imageUrl={apt.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ApartmentList;