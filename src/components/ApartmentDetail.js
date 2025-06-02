import React from 'react';
// useParams lets us read URL parameters
import { useParams, useNavigate } from 'react-router-dom';
import apartmentsData from '../data/apartments';
import './ApartmentDetail.css';

/**
 * ApartmentDetail.js
 *
 * Displays detailed information for a single apartment.
 * Retrieves the 'id' from URL params, finds the matching object, and renders details.
 */
function ApartmentDetail() {
  // Extract 'id' from the URL (string), then convert to number
  const { id } = useParams();
  const apartmentId = parseInt(id, 10);

  // Find the apartment whose id matches
  const apartment = apartmentsData.find((apt) => apt.id === apartmentId);

  // For navigation back to the listing
  const navigate = useNavigate();

  // If no apartment is found, show a not-found message
  if (!apartment) {
    return <p>Apartment not found.</p>;
  }

  return (
    <div className="apartment-detail-container">
      {/* "Back" button */}
      <button
        className="back-button"
        onClick={() => navigate(-1)} // Go back in history
      >
        &larr; Back to Listings
      </button>

      {/* Apartment image */}
      <img
        src={apartment.imageUrl}
        alt={`Apartment: ${apartment.title}`}
        className="detail-image"
      />

      {/* Title */}
      <h2 className="detail-title">{apartment.title}</h2>

      {/* Location */}
      <p className="detail-location">{apartment.location}</p>

      {/* Price */}
      <p className="detail-price">€{apartment.price} / month</p>

      {/* Description placeholder */}
      <p className="detail-description">
        This is a placeholder description for {apartment.title}. In a real application,
        you would fetch additional details (e.g., size, amenities, availability).
      </p>
    </div>
  );
}

export default ApartmentDetail;