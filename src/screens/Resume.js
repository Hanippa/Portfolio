import React, { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    window.location.href = '../resume.pdf';
  }, []);

  return <div>Loading Resume...</div>;
};

export default Resume;