import PropTypes from "prop-types";
import React, { useState } from "react";
import { useQuery } from "urql";
import "./ManufacturerFilter.scss";

const MANUFACTURERS_QUERY = `
  query GetManufacturers {
    products(filters: [{key: "limit", operation: eq, value: "1000"}]) {
      items {
        manufacturer
      }
    }
  }
`;

export default function ManufacturerFilter({ selectedManufacturer, onManufacturerChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [result] = useQuery({ query: MANUFACTURERS_QUERY });

  // Extract unique manufacturers from products
  const manufacturers = React.useMemo(() => {
    if (!result.data?.products?.items) return [];
    
    const uniqueManufacturers = new Set();
    result.data.products.items.forEach(product => {
      if (product.manufacturer && product.manufacturer.trim()) {
        uniqueManufacturers.add(product.manufacturer.trim());
      }
    });
    
    return Array.from(uniqueManufacturers).sort();
  }, [result.data]);

  const handleManufacturerSelect = (manufacturer) => {
    // Toggle selection - if already selected, deselect it
    const newSelection = selectedManufacturer === manufacturer ? "" : manufacturer;
    onManufacturerChange(newSelection);
    setIsOpen(false);
  };

  const clearFilter = () => {
    onManufacturerChange("");
  };

  if (result.error) {
    console.error("Error loading manufacturers:", result.error);
    return null;
  }

  if (manufacturers.length === 0) {
    return null; // Don't show filter if no manufacturers
  }

  return (
    <div className="manufacturer-filter">
      <div className="filter-header">
        <h4 className="filter-title">Manufacturer</h4>
        {selectedManufacturer && (
          <button 
            className="clear-filter-btn"
            onClick={clearFilter}
            type="button"
          >
            Clear
          </button>
        )}
      </div>

      <div className="filter-content">
        {isOpen ? (
          <div className="manufacturer-list">
            {manufacturers.map((manufacturer) => (
              <label key={manufacturer} className="manufacturer-option">
                <input
                  type="radio"
                  name="manufacturer"
                  value={manufacturer}
                  checked={selectedManufacturer === manufacturer}
                  onChange={() => handleManufacturerSelect(manufacturer)}
                />
                <span className="manufacturer-name">{manufacturer}</span>
              </label>
            ))}
          </div>
        ) : (
          <button
            className="filter-toggle-btn"
            onClick={() => setIsOpen(true)}
            type="button"
          >
            {selectedManufacturer || "All Manufacturers"}
            <svg className="chevron-icon" width="16" height="16" viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* Show selected manufacturer */}
      {selectedManufacturer && (
        <div className="selected-manufacturer">
          <span className="selected-label">Selected: {selectedManufacturer}</span>
        </div>
      )}
    </div>
  );
}

ManufacturerFilter.propTypes = {
  selectedManufacturer: PropTypes.string,
  onManufacturerChange: PropTypes.func.isRequired,
};

ManufacturerFilter.defaultProps = {
  selectedManufacturer: "",
};