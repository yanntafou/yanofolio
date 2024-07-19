import React, { useEffect, useState } from 'react';

const AnimatedText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [text, speed]);

  return <div className="animated-text">{displayedText}</div>;
};

export default AnimatedText;
