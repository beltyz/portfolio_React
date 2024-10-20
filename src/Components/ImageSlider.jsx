import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

export const ImageSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Optional: Auto slide transition every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(slideInterval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="slider">
      <div className="slider-wrapper">
        {data.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {index === currentIndex && (
              <img src={item.src} alt={item.alt} className="slider-image" />
            )}
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      {/* Dots indicator */}
      <div className="dots">
        {data.map((_, idx) => (
          <span
            key={idx}
            className={currentIndex === idx ? "dot active-dot" : "dot"}
            onClick={() => setCurrentIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};
