import React, { useState } from 'react';
import '../styles/Menu.css';

function MenuComponent({ handleViewChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (viewMode) => {
    handleViewChange(viewMode);
    setIsMenuOpen(false); // Fermer le menu après avoir sélectionné une option
  };

  return (
    <div className="menu-container">
      <div className="menu-header">Data from the titanic disaster</div>
      <div className="menu-button" onClick={handleMenuToggle}>
        View Mode
      </div>
      {isMenuOpen && (
        <div className="menu">
          <div className="menu-item" onClick={() => handleMenuItemClick('list')}>
            List View
          </div>
          <div className="menu-item" onClick={() => handleMenuItemClick('graph')}>
            Graph View
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuComponent;
