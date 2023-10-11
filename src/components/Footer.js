import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid" style={{backgroundColor:"rgb(255, 238, 208)"}}>
        <p className='mb-0'>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
