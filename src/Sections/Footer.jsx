// import React from 'react'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-blue-500 h-[40vh] py-[5rem] px-[3rem] text-white'>
      <div className='fbc'>
        <div>
          <img src={Logo} alt='' />
        </div>
        <ul>
            <li>Menu</li>
            <li>Home</li>
            <li>Converter</li>
            <li>How it works</li>
        </ul>
        <ul>
            <li>About us</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
        </ul>
        <ul>
            <li>Screen Record</li>
            <li>Browser window</li>
            <li>Desktop</li>
            <li>Application</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
