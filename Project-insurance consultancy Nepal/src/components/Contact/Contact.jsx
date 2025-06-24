import React from 'react';
import "./Contact.css";
import images from '../../constants/images';
// import { Formik } from 'formik';
import Info from './Info';
import Map from './Map';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselImages = [
  images.form_main_img,
  images.form_img_2,
  images.form_img_3,
];

const Contact = () => {
  return (
    <section className='contact section-p-top bg-black' id="contact">
      <div className='container'>
        <div className='contact-content grid text-center'>
          <div className='contact-left'>
            <div className='section-t'>
              <h3>Let’s Talk Insurance</h3>
              <p className='text'>
                Protecting what matters to you is our top priority. Reach out with any questions, and our experts will guide you through your insurance journey.
              </p>
            </div>
          </div>
          <div className='contact-right' style={{  maxWidth: "500px", margin: "0 auto" }}>
            
          <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={1}
  slidesToScroll={1}
  autoplay={true}           // Enable auto-scroll
  autoplaySpeed={2500}      // 2.5 seconds per slide
  arrows={false}            // Hide arrows
>
  {carouselImages.map((img, idx) => (
    <div key={idx}>
      <img
        src={img}
        alt={`carousel-${idx}`}
        style={{
          width: "100%",
          height: "350px",      // Adjust as needed
          objectFit: "contain",   // "cover" for full fit, "contain" for full image
                  borderRadius: "12px",  // Smoother corners
          boxShadow: "0 4px 16px rgba(0,0,0,0.12)"
        }}
      />
    </div>
  ))}
</Slider>
          </div>
        </div>
      </div>
      <Map />
      <Info />
    </section>
  );
};

export default Contact;