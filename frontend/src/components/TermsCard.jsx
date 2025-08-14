import '../styles/TermsCard.css';

const TermsCard = ({ termsData, isLoading }) => {
  if (isLoading) {
    return <div className="terms-card"><p>Loading...</p></div>;
  }

  if (!termsData) {
    return null; 
  }

  return (
    <div className="terms-card">
      <div dangerouslySetInnerHTML={{ __html: termsData.content }} />
    </div>
  );
};

export default TermsCard;