import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Header.css";
import {FaPaperPlane} from "react-icons/fa";

const Header = () => {
  return (
    <header className='header flex flex-center flex-column'>
        <Navbar />
        <div className='container'>
            <div className='header-content text-center flex flex-column'>
                <h1 className='text-uppercase header-title'>Delivering Complete Insurance Solutions with Innovation, Integrity, and Insight</h1>
                <p className='text-lead'>We’re not just consultants. We’re your long-term insurance portfolio partners, striving every day to enhance service quality, client performance, and national impact.</p>
                
            </div>
        </div>
    </header>
  )
}

export default Header