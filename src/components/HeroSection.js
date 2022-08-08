import React from "react";
import '../App.css';
import './HeroSection.css';

const HeroSection = ({title, description}) => {
  return (
    <div className="hero-container">
      <h1>{title}</h1>
			<p>{description}</p>
    </div>
  );
}

export default HeroSection;
