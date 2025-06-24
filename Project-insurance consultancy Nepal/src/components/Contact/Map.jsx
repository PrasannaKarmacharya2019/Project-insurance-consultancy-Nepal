import React from 'react';
import "./Contact.css";

const Map = () => {
  return (
    <div className='map-content'>
        {/* eslint-disable-next-line */}
    <iframe
  src="https://www.google.com/maps?q=Subidhanagar,Kathmandu&output=embed"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>  </div>
  )
}

export default Map
