import React, { useState } from "react";
import "./Slideshow.css";
//started of here by creating an array of images, these images is to used in the slideshow
const images = ["obama.png", "slider1.jpeg", "slider2.jpeg", "slider3.jpeg"];

//this is the setup for the slideshow functionality
const Slideshow = () => {
  // Using useState hook to create a state variable 'currentImageIndex'
  // and a function 'setCurrentImageIndex' to update it. The initial value is set to 0.
  //the value of currentImageIndex determains the current slide
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //This handle the next button function
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }; // Using the 'setCurrentImageIndex' function to update 'currentImageIndex'
  // to the next image index, while making sure it wraps around to the first image
  // if it reaches the last image.

  //This handles the prev button function
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }; // Using the 'setCurrentImageIndex' function to update 'currentImageIndex'
  // to the previous image index, while making sure it wraps around to the last image
  // if it reaches the first image.

  return (
    <div className="slideshow">
      <img
        src={images[currentImageIndex]} // Set the 'src' attribute to the URL of the current image
        alt={`Slide ${currentImageIndex + 1}`} // Set the 'alt' attribute for accessibility (Slide 1, Slide 2, ...)
      />
      <button className="prev" onClick={handlePrevImage}>
        &lt;{/* Display the less-than sign character (<) as an HTML entity */}
      </button>
      <button className="next" onClick={handleNextImage}>
        &gt;
        {/* Display the greater-than sign character (>) as an HTML entity */}
      </button>
    </div>
  );
};

export default Slideshow;
