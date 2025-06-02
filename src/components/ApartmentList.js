import React, { useState } from 'react';
import apartmentsData from '../data/apartments';
import ApartmentItem from './ApartmentItem';
import './ApartmentList.css';

/**
 * ApartmentList.js
 * 
 * Renders a list of apartments with a search/filter input.
 * Users can type in the search box to see only apartments whose title
 * or location contain the search term (case‐insensitive).
 */
function ApartmentList() {
  // State: holds the full array of apartments (static for now)
  const [apartments] = useState(apartmentsData);

  // State: holds the current search term (controlled input)
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Handler for input changes in the search box.
   * Updates the searchTerm state as the user types.
   *
   * @param {Object} event - The input change event
   */
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Compute a filtered list of apartments based on searchTerm.
   * Using toLowerCase ensures case‐insensitive matching.
   * The filter condition checks:
   *   - If the title includes the searchTerm
   *   - OR if the location includes the searchTerm
   */
  const filteredApartments = apartments.filter((apt) => {
    // Convert both strings to lowercase for comparison
    const lowerCaseTitle = apt.title.toLowerCase();
    const lowerCaseLocation = apt.location.toLowerCase();
    const lowerCaseTerm = searchTerm.toLowerCase().trim();

    // If searchTerm is empty, return true (show all apartments)
    // Otherwise, check if title or location contains the term
    if (lowerCaseTerm === '') {
      return true;
    }
    return (
      lowerCaseTitle.includes(lowerCaseTerm) ||
      lowerCaseLocation.includes(lowerCaseTerm)
    );
  });

  return (
    <section className="apartment-list-container">
      {/* Section header */}
      <h2>Available Apartments</h2>

      {/* Search form */}
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        {/* Accessible label (visually hidden if desired) */}
        <label htmlFor="search-input" className="visually-hidden">
          Search apartments by title or location
        </label>
        <input
          type="text"
          id="search-input"
          className="search-input"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </form>

      {/* Grid container for apartment cards */}
      <div className="apartment-list-grid">
        {filteredApartments.map((apt) => (
          <ApartmentItem
            key={apt.id}
            id={apt.id}
            title={apt.title}
            location={apt.location}
            price={apt.price}
            imageUrl={apt.imageUrl}
          />
        ))}

        {/* If no results match, inform the user */}
        {filteredApartments.length === 0 && (
          <p className="no-results-message">
            No apartments found matching “{searchTerm}”.
          </p>
        )}
      </div>
    </section>
  );
}

export default ApartmentList;