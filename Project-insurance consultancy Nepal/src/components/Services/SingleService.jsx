/*import React from 'react';
import {BsArrowDownCircle} from "react-icons/bs";
import "./Services.css";

const SingleService = ({service}) => {
  return (
    <div className='item bg-dark translate-effect'>
        <span className='item-icon'>
            {service.icon}
        </span>
        <h4 className='item-title fs-25'>{service.title}</h4>
        <p className='fs-19 text'>{service.text}</p>
        <a href = "/" className='item-link text-grey'>
            <BsArrowDownCircle size = {30} />
        </a>
    </div>
  )
}

export default SingleService  */

import React, { useState } from 'react';
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import "./Services.css";

const MAX_LENGTH = 180; // Adjust as needed

const SingleService = ({ service }) => {
  const [showMore, setShowMore] = useState(false);

  const isLong = service.text.length > MAX_LENGTH;
  const displayText = showMore ? service.text : service.text.slice(0, MAX_LENGTH) + (isLong ? "..." : "");

  return (
    <div className='item bg-dark translate-effect'>
      <span className='item-icon'>
        {service.icon}
      </span>
      <h4 className='item-title fs-25'>{service.title}</h4>
      {/* <p className='fs-19 text'>{displayText}</p>  */}
      {Array.isArray(service.text) ? (
  <ul className='fs-19 text' style={{ textAlign: "left", margin: "0 0 1rem 1.5rem" }}>
    {service.text.map((reason, idx) => (
      <li key={idx}>{reason}</li>
    ))}
  </ul>
) : (
  <p className='fs-19 text'>{displayText}</p>
)}


      {isLong && (
        <button
          className='item-link text-grey'
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setShowMore(prev => !prev)}
        >
          {showMore ? <BsArrowUpCircle size={30} /> : <BsArrowDownCircle size={30} />}
        </button>
      )}
    </div>
  );
}

export default SingleService;