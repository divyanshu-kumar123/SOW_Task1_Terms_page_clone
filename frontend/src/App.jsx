// src/App.jsx

import { useState, useEffect } from 'react';
import Header from './components/Header';
import TermsCard from './components/TermsCard';
import PageTitle from './components/PageTitle'; // Import PageTitle
import CloseButton from './components/CloseButton'; // Import CloseButton
import './App.css';

function App() {
  const [language, setLanguage] = useState('sv');
  const [termsData, setTermsData] = useState(null);
  const [uiStrings, setUiStrings] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
  
      setIsLoading(true);
      setError(null);
      try {
        const [termsResponse, uiResponse] = await Promise.all([
          fetch(`${apiUrl}/api/terms/${language}`),
          fetch(`${apiUrl}/api/translations/${language}`),
        ]);
  
        if (!termsResponse.ok || !uiResponse.ok) {
          throw new Error("Data could not be fetched!");
        }
  
        const terms = await termsResponse.json();
        const ui = await uiResponse.json();
  
        setTermsData(terms);
        setUiStrings(ui);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [language]);

  return (
    <div className="app-container">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        uiStrings={uiStrings}
      />
      <main className="main-content">
        {error && <p className="error-message">{error}</p>}

        {!isLoading && !error && (
          <>
            <PageTitle title={termsData?.title} />
            <CloseButton text={uiStrings.button_close || "Close"} />
          </>
        )}
        
        <TermsCard termsData={termsData} isLoading={isLoading} />

        {!isLoading && !error && (
          <>
            <CloseButton text={uiStrings.button_close || "Close"} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;