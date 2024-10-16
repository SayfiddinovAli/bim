import React, { useEffect, useState } from 'react';
import './QuoterDivider.css';

const QuoteDivider = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100 ms kutish (animatsiya boshlanishi uchun)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`quote-divider ${isVisible ? 'fade-in' : ''}`}>
      <blockquote className="quote-text">
        {text}
      </blockquote>
    </div>
  );
}

export default QuoteDivider;
