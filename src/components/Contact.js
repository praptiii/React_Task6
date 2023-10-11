import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
  <div className="container-fluid" style={{backgroundColor:"rgb(253, 233, 198)"}}>
    <h2 style={{color:"teal"}}><u>Contact Me</u></h2>
    <p className='mb-0'>You can reach me on social media:</p>
    <ul className="social-media-links" style={{listStyle:"none", paddingBottom:"20px", display:"flex", gap:"10px", justifyContent:"center", marginBottom:"0"}}>
      <li>
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
      <li>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </li>
      <li>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      {/* Add more social media links as needed */}
    </ul>
  </div>
</section>

  );
};

export default Contact;
