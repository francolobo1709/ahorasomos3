import React from 'react';

const Header = ({ title, subtitle, showCTA = false, onCTAClick, ctaText = "Comenzar" }) => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">{title}</h1>
        <p className="header-subtitle">{subtitle}</p>
        {showCTA && (
          <button 
            className="header-cta"
            onClick={onCTAClick}
          >
            {ctaText}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;