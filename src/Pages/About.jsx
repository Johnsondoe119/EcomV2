import React from "react";
import Slideshow from "../Component/Slideshow";
import "./About.css";

const About = () => {
  return (
    <div>
      <section class="middle-section">
        <div class="middle-container">
          <div class="middle-info">
            <h1 class="middle-title">Seazons Wear</h1>
            <p class="info">
              "Welcome to our clothing brand, where change is at the heart of
              everything we do. We believe that change is a natural part of
              life, and we embrace it wholeheartedly. Our brand is built on the
              understanding that feelings change, and people change. With each
              garment we create, we aim to capture the essence of this
              ever-evolving journey. At our core, we celebrate the beauty of
              transformation. We believe that clothing can be a powerful tool
              for self-expression and a reflection of the unique journey each
              individual takes. From the fabric we choose to the designs we
              create, we strive to inspire and empower you to embrace your own
              evolution. Our slogan, 'Feelings change, people change,' embodies
              the spirit of our brand. It serves as a reminder that change is
              not something to be feared, but rather, embraced. Through our
              thoughtfully designed pieces, we invite you to explore new styles,
              express your evolving emotions, and embrace the beauty of change.
              Join us on this exciting journey of self-discovery, where fashion
              meets transformation. Together, let's celebrate the ever-changing
              nature of life and the power of clothing to reflect our inner
              growth. With our brand, you can embrace change and express
              yourself authentically. Welcome to a world where change is not
              only accepted, but celebrated."
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="c-heading">
          <h1>Contact</h1>
        </div>
        <section class="middle-section">
          <div class="middle-container">
            <img
              src="./Man.jpeg"
              class="section-middle-image"
              alt="background"
            />
            <div class="c-middle-info">
              <form class="contact-form" action="">
                <div class="c-title">
                  <h2>Please leave us a message!</h2>
                </div>
                <div class="half">
                  <div class="c-item">
                    <label for="name">NAME</label>
                    <input type="text" id="name" />
                  </div>
                  <div class="c-item">
                    <label for="email">EMAIL</label>
                    <input type="text" id="email" />
                  </div>
                </div>

                <div class="full">
                  <label for="message">MESSAGE</label>
                  <textarea name="" id="message"></textarea>
                </div>
                <div class="action">
                  <input type="submit" value="SEND MESSAGE" />
                  <input type="reset" value="RESET" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
      <div class="c-heading">
        <h1>Featured Fits</h1>
      </div>
      <Slideshow />
    </div>
  );
};

export default About;
