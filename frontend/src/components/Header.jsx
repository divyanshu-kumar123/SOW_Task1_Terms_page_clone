import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Header.css';

const Header = ({ language, setLanguage, uiStrings }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ['nav_home', 'nav_order', 'nav_clients', 'nav_about', 'nav_contact'];

  return (
    <header className="app-header">
      <div className="header-container"> 
        <img 
          src="https://storage.123fakturera.se/public/icons/diamond.png" 
          alt="123fakturera Logo" 
          className="header-logo"
        />

        <button className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <nav className={isMenuOpen ? 'nav-menu open' : 'nav-menu'}>
          <ul className="nav-links">
            {navItems.map(key => (
              <li key={key}><a href="#">{uiStrings[key]}</a></li>
            ))}
          </ul>
          <LanguageSwitcher 
            currentLanguage={language} 
            onLanguageChange={setLanguage} 
            uiStrings={uiStrings} 
          />
        </nav>
      </div> 
    </header>
  );
};

export default Header;