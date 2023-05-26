import React from 'react';

const ReusableHeading = ({ value, label }) => {
  return (
    <h1>
      <span className="text-primary-purple">{value !== 0 ? value : '--'}</span> {label}
      {value !== 1 && value !== 0 ? 's' : ''}
    </h1>
  );
};

export default ReusableHeading;
