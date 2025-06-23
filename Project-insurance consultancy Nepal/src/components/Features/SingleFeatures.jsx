import React, {useState} from 'react';
import {BsPlusLg} from "react-icons/bs";
import "./Features.css";

const gradient = "url(#blue-gradient)";

const SingleFeatures = (feature) => {
    const [isActive, setIsActive] = useState(false);

  return (
   
    <div className='item' key = {feature.id}>
      
      <div className={`item-head flex flex-between bg-dark ${isActive ? 'item-head-border' : null}`} onClick = {() => setIsActive(!isActive)}>
       
        <h6 className='fs-20 fw-4 feature-title'> 
           <span style={{ marginRight: "8px", verticalAlign: "middle" }}>{feature.icon}</span>
          {feature.title}</h6>
        <button type = "button" className={`item-icon ${isActive ? 'item-icon-rotate' : ""}`}>
            <BsPlusLg style = {{fill: gradient}} size = {22} />
        </button>
      </div>

      <div className={`item-body ${isActive ? 'item-body-show' : ""}`}>
        {/* <p className='text'>{feature.text}</p> */}

        
        {Array.isArray(feature.text) ? (
  <ul className='text' style={{ textAlign: "left", margin: "0 0 1rem 1.5rem" }}>
    {feature.text.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
) : (
  <p className='text'>{feature.text}</p>
)}


      </div>
    </div>
  )
}

export default SingleFeatures
