import React, { useState } from 'react';
import apartmentsData from '../data/apartments';
import ApartmentItem from './ApartmentItem';
import './ApartmentList.css';

/**
 * ApartmentList.js
 * 
 * Renders a list of apartments with search and sorting controls.
 * - Users can filter by title or location (case‐insensitive).
 * - Users can sort by price ascending/descending or title A→Z, Z→A.
 */
function ApartmentList() {
  // State: holds the full static array of apartments
  const [apartments] = useState(apartmentsData);

  // State: holds the current search term
  const [searchTerm, setSearchTerm] = useState('');

  // State: holds the current sort option; default is price ascending
  const [sortOption, setSortOption] = useState('price-asc');

  /**
   * Handler for search input changes.
   * Updates searchTerm state as the user types.
   *
   * @param {Object} event – The input change event
   */
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Handler for sort dropdown changes.
   * Updates sortOption state when the user selects a different option.
   *
   * @param {Object} event – The select change event
   */
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  /**
   * Compute a filtered array based on searchTerm.
   * Converts strings to lowercase for case‐insensitive matching.
   */
  const filteredApartments = apartments.filter((apt) => {
    const lowerCaseTitle = apt.title.toLowerCase();
    const lowerCaseLocation = apt.location.toLowerCase();
    const lowerCaseTerm = searchTerm.toLowerCase().trim();

    if (lowerCaseTerm === '') {
      return true;
    }
    return (
      lowerCaseTitle.includes(lowerCaseTerm) ||
      lowerCaseLocation.includes(lowerCaseTerm)
    );
  });

  /**
   * Compute a sorted array based on sortOption.
   * We create a shallow copy of filteredApartments before sorting
   * to avoid mutating the original array in state.
   */
  const sortedApartments = [...filteredApartments].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;  // Lower price first
      case 'price-desc':
        return b.price - a.price;  // Higher price first
      case 'title-asc':
        return a.title.localeCompare(b.title); // Alphabetical A→Z
      case 'title-desc':
        return b.title.localeCompare(a.title); // Z→A
      default:
        return 0;
    }
  });

  return (
    <section className="apartment-list-container">
      {/* Section header */}
      <h2>Available Apartments</h2>

      {/* Sorting control */}
      <div className="sort-container">
        <label htmlFor="sort-select" className="sort-label">
          Sort by:
        </label>
        <select
          id="sort-select"
          className="sort-select"
          value={sortOption}
          onChange={handleSortChange}
        >
          {/* Option values correspond to keys used in sort logic */}
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="title-asc">Title: A → Z</option>
          <option value="title-desc">Title: Z → A</option>
        </select>
      </div>

      {/* Search form */}
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
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

      {/* Grid container for sorted & filtered apartment cards */}
      <div className="apartment-list-grid">
        {sortedApartments.map((apt) => (
          <ApartmentItem
            key={apt.id}
            id={apt.id}
            title={apt.title}
            location={apt.location}
            price={apt.price}
            imageUrl={apt.imageUrl}
          />
        ))}

        {/* If no results match, show feedback */}
        {sortedApartments.length === 0 && (
          <p className="no-results-message">
            No apartments found matching “{searchTerm}”.
          </p>
        )}
      </div>
    </section>
  );
}

export default ApartmentList;