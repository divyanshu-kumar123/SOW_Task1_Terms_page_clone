import React from 'react';

const PageTitle = ({ title }) => {
  if (!title) {
    return null;
  }

  return <h2 className='terms-heading'>{title}</h2>;
};

export default PageTitle;