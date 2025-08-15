// src/components/Header.jsx
import { useState, useRef, useCallback } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import useOnClickOutside from '../hooks/useOnClickOutside'; // Import the new hook
import '../styles/Header.css';

const Header = ({ language, setLanguage, uiStrings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['nav_home', 'nav_order', 'nav_clients', 'nav_about', 'nav_contact'];

  // Create a ref for the mobile menu
  const mobileMenuRef = useRef();

  // Function to close the menu
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Use the hook to close the menu when clicking outside
  useOnClickOutside(mobileMenuRef, closeMenu);

  const handleMenuLinkClick = () => {
    closeMenu();
    // You can add navigation logic here in the future
  };

  return (
    <header className="app-header">
        <img 
            src="https://storage.123fakturera.se/public/icons/diamond.png" 
            alt="123fakturera Logo" 
            className="header-logo"
          />
      <div className="header-container">
    
        <div className="header-left-section">
         
          <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
          
          <nav className="nav-menu-desktop">
            <ul className="nav-links">
              {navItems.map(key => (
                <li key={key}><a href="#">{uiStrings[key]}</a></li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="header-right-section">
          <LanguageSwitcher 
            currentLanguage={language} 
            onLanguageChange={setLanguage} 
            uiStrings={uiStrings} 
          />
        </div>
      </div>

      {/* Attach the ref to the mobile menu dropdown */}
      {isMenuOpen && (
        <div className="nav-menu-mobile" ref={mobileMenuRef}>
          <ul className="nav-links-mobile">
            {navItems.map(key => (
              <li key={key}><a href="#" onClick={handleMenuLinkClick}>{uiStrings[key]}</a></li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;