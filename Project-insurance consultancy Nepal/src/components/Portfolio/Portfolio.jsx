

// import React from 'react';
// import "./Portfolio.css";
// import sections from '../../constants/data';
// // Cross icon

// const Portfolio = () => {
//   return (
//     <section className='portfolio section-p bg-dark' id = "portfolio">
//         <div className='container'>
//             <div className='portfolio-content'>
//                 <div className='section-t text-center'>
//                     <h3>Our Portfolio</h3>
//                     {/* <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet corrupti laboriosam fugit expedita inventore temporibus!</p> */}
//                 </div>

//                 <div className='item-list text-center text-white grid'>
//                     {
//                         sections.portfolio.map(portfolio => {
//                             return (
//                                 // <div className='item flex flex-center flex-column translate-effect' key = {portfolio.id} style = {{
//                                 //     background: `url(${portfolio.image})`
//                                 // }}>
//                                 //     <div className='item-title fs-25 fw-6'>{portfolio.title}</div>
//                                 //     <div className='text text-white'>{portfolio.text}</div>
//                                 // </div>
//                                 <div className='item flex flex-center flex-column translate-effect' key={portfolio.id}>
//     <img src={portfolio.image} alt={portfolio.title} style={{ width: "120%", height: "auto", maxHeight: "220px", objectFit: "contain" }} />
//     <div className='item-title fs-25 fw-6'>{portfolio.title}</div>
//     <div className='text text-white'>{portfolio.text}</div>
// </div>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Portfolio


import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa"; // Cross icon
import "./Portfolio.css";
import sections from '../../constants/data';

const Portfolio = () => {
  const [modalImg, setModalImg] = useState(null);

  return (
    <section className='portfolio section-p bg-dark' id="portfolio">
      <div className='container'>
        <div className='portfolio-content'>
          <div className='section-t text-center'>
            <h3>Our Portfolio</h3>
          </div>

          <div className='item-list text-center text-white grid'>
            {sections.portfolio.map(portfolio => (
              <div
                className='item flex flex-center flex-column translate-effect'
                key={portfolio.id}
                onClick={() => setModalImg(portfolio.image)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    marginBottom: "0px"
                  }}
                />
                <div className='item-title fs-20 fw-6'>{portfolio.title}</div>
                <div className='text text-white'>{portfolio.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="portfolio-modal" onClick={() => setModalImg(null)}>
          <span
            className="portfolio-modal-close"
            onClick={e => {
              e.stopPropagation();
              setModalImg(null);
            }}
          >
            <FaTimes size={32} />
          </span>
          <img src={modalImg} alt="Enlarged" className="portfolio-modal-img" />
        </div>
      )}
    </section>
  );
};

export default Portfolio;


