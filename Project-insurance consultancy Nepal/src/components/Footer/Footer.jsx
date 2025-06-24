import React from 'react';
import "./Footer.css";
import logo from '../../assets/images/footer-logo.jpg';

const Footer = () => {
  let date = new Date();

  return (
    <footer className='footer bg-black' id="footer">
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-left'>
            <img
              src={logo}
              alt="Insurance Consultancy Nepal Logo"
              style={{ width:"auto",height: "49px", verticalAlign: "middle", marginRight: "10px" }}
            />
            <span className='footer-message'>
              Your insurance partner for a complete solution!
            </span>
          </div>
          <span className='footer-copyright'>
            &copy; {date.getFullYear().toString()} Insurance Consultancy Nepal Pvt. Ltd.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;