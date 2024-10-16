import React, { useEffect, useState } from 'react';
import './TextAnimation.css';
import { SiBrandfolder } from "react-icons/si";


const TextAnimation = () => {
  const text = "bilan bilib ol "; // Matn
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const totalLength = text.length;

  useEffect(() => {
    // Harf birma-bir ko'rinishi uchun interval
    const interval = setInterval(() => {
      if (index < totalLength) {
        setDisplayedText((prev) => prev + text[index]); // Harf qo'shish
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        // 30 soniya kutishdan so'ng yana qayta boshlash
        setTimeout(() => {
          setDisplayedText(''); // Barcha harflarni olib tashlash
          setIndex(0); // Indexni qayta 0 ga o'rnatish
        }, 3000); // 30 soniya
      }
    }, 100); // Harf har 100 ms da ko'rinadi

    return () => clearInterval(interval); // Component chiqqanda intervalni to'xtatish
  }, [index, totalLength, text]);

  return ( 
    <div className=" text-animation bg-light rounded pt-5">
      <h3 ><a className="navbar-brand text-primary fw-bold" href="#"><span><SiBrandfolder size={32} /></span> Bilib ol </a>
      {displayedText}  <hr className='my-3' /> </h3>
    
    </div>
  );
};

export default TextAnimation;
