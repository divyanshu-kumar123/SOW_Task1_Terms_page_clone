import { useState, useEffect, useRef } from 'react';
import '../styles/LanguageSwitcher.css';

const languages = {
  sv: { name: 'Svenska', flag: 'https://storage.123fakturere.no/public/flags/SE.png' },
  gb: { name: 'English', flag: 'https://storage.123fakturere.no/public/flags/GB.png' }
};

const LanguageSwitcher = ({ currentLanguage, onLanguageChange, uiStrings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageSelect = (langCode) => {
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher" ref={switcherRef}>
      <button className="current-language-btn" onClick={() => setIsOpen(!isOpen)}>
        <span>{uiStrings.nav_language || languages[currentLanguage].name}</span>
        <img src={languages[currentLanguage].flag} alt={languages[currentLanguage].name} />
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {Object.keys(languages).map((lang) => (
              <button key={lang} className="language-option" onClick={() => handleLanguageSelect(lang)}>
                <span>{languages[lang].name}</span>
                <img src={languages[lang].flag} alt={languages[lang].name} />
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;