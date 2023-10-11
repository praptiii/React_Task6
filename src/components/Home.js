import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor:"rgb(254, 223, 170)"}} >
          <div className="col-md-6 d-flex flex-column align-items-start mt-4">
          <h4 style={{ color: "cadetblue" }}>Software Engineer</h4><br></br>
            <h1 style={{ color: "teal" }}><b>Hey! I am</b></h1>
            <h1 style={{color:"brown"}}><b>Prapti Goswami</b></h1><br></br>
            <p style={{ textAlign: "left", color:"darkcyan" }}>I am a software developer, passionate and experienced in building web applications.</p><br></br>
            <button className="btn btn-outline-dark">Contact Me</button>
          </div>
          <div className="col-md-6">
            <img 
              src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
              alt="Hero"
              className="img-fluid rounded-circle w-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
