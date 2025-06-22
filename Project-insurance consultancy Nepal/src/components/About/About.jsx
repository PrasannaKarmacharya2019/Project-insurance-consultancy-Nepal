/* import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className = "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui eum at unde ipsa quibusdam sunt incidunt voluptates dicta ab provident doloremque perferendis ad voluptatem mollitia amet magnam, hic aliquam cupiditate blanditiis quas eos neque saepe? Quas expedita cupiditate et sint nesciunt, ipsum eos reiciendis cumque. At provident ab veritatis.</p>
                    <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur nobis laudantium nesciunt maxime tenetur illo.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About   */

/*
import React, { useState, useEffect } from 'react';
import "./About.css";
import images from '../../constants/images';

const carouselImages = [
  images.about_main_img,
  images.about_main_img2,
  images.about_main_img3,
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % carouselImages.length);
        setFading(false);
      }, 800); // match this to your CSS transition duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='about section-p bg-dark' id="about">
      <div className='container'>
        <div className='about-content grid text-center'>
          <div className="content-left">
            <img
              src={carouselImages[current]}
              alt=""
              className={`carousel-image${fading ? ' fading' : ''}`}
            />
          </div>
          <div className='content-right'>
            <div className='section-t'>
              <h3>About Us</h3>
            </div>
            <p className="text">Insurance Consultancy Nepal Pvt. Ltd., a pioneering. independent, private company of insurance consulting services in the scope of customer's respective Insurance Portfolio Management and Outsourcing the Insurance Department. Insurance Audit, Insurance Awareness in various sectors. enhancing the efficiency and promotion of manpower, and supply of trained manpower for Insurance Companies, was recently founded and established in 2022. This Insurance Consultancy Nepal Pvt. Ltd. was founded with over three decades of experience manpower for concerned personnel and organizations for their need of insurance consultancy and removes anomalies on current trends, with smooth underwriting and claims, international collaborations if needed, Insurance Industries in Nepal.</p>
            <p>Insurance Consultancy Nepal Pvt. Ltd. is undoubtedly the first outsourced consulting firm in Nepal to implement the smooth underwriting approach for quick claim settlement in the insurance industry.
Insurance Consultancy Nepal Pvt. Ltd. is the first firm to offer marketing, underwriting, claims consulting, software development, insurance policy translation, new policy development, and trained work force supply to insurance companies/banks/trading houses/industries, among other services. 



Insurance Consultancy Nepal Pvt. Ltd. is the very first insurance consultancy in Nepal.
Insurance Consultancy Nepal Pvt. Ltd. has the scale, knowledge, technology, people resources, and infrastructure to overcome all of the problems that come with providing overall quality solutions to private and public sector organizations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
*/


import React, { useState, useEffect } from 'react';
import "./About.css";
import images from '../../constants/images';

const carouselImages = [
  images.about_main_img,
  images.about_main_img2,
  images.about_main_img3,
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % carouselImages.length);
        setFading(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const shortText = `Insurance Consultancy Nepal Pvt. Ltd., a pioneering, independent, private company of insurance consulting services in the scope of customer's respective Insurance Portfolio Management and Outsourcing the Insurance Department. Insurance Audit, Insurance Awareness in various sectors, enhancing the efficiency and promotion of manpower, and supply of trained manpower for Insurance Companies, was recently founded and established in 2022. This Insurance Consultancy Nepal Pvt. Ltd. was founded with over three decades of experience manpower for concerned personnel and organizations for their need of insurance consultancy and removes anomalies on current trends, with smooth underwriting and claims, international collaborations if needed, Insurance Industries in Nepal.`;
  const moreText = ` Insurance Consultancy Nepal Pvt. Ltd. is undoubtedly the first outsourced consulting firm in Nepal to implement the smooth underwriting approach for quick claim settlement in the insurance industry.
Insurance Consultancy Nepal Pvt. Ltd. is the first firm to offer marketing, underwriting, claims consulting, software development, insurance policy translation, new policy development, and trained work force supply to insurance companies/banks/trading houses/industries, among other services. 
Insurance Consultancy Nepal Pvt. Ltd. is the very first insurance consultancy in Nepal.
Insurance Consultancy Nepal Pvt. Ltd. has the scale, knowledge, technology, people resources, and infrastructure to overcome all of the problems that come with providing overall quality solutions to private and public sector organizations.`;

  return (
    <section className='about section-p bg-dark' id="about">
      <div className='container'>
        <div className='about-content grid text-center'>
          <div className="content-left">
            <img
              src={carouselImages[current]}
              alt=""
              className={`carousel-image${fading ? ' fading' : ''}`}
            />
          </div>
          <div className='content-right' >
            <div className='section-t'>
              <h3>About Us</h3>
            </div>
        <p className={`text${!showMore ? ' collapsed' : ''}`}>
  {shortText}
  {showMore && (
    <>
      {moreText.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  )}
</p>
            <button
              className="btn btn-blue show-more-btn"
              style={{ marginTop: "1rem" }}
              onClick={() => setShowMore(prev => !prev)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About




