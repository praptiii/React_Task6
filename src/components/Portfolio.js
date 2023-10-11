import React from 'react';

const Portfolio = () => {
  // Sample project data (you can replace it with your own project data)
  const projects = [
    {
      title: 'Project 1',
      imageSrc: 'https://www.crio.do/blog/content/images/2021/03/Javascript-projects--React.png',
      description: 'This is a React Project.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      imageSrc: 'https://www.crio.do/blog/content/images/2021/03/Machine-learning-projects.png',
      description: 'This is a Machine Learning Project.',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      imageSrc: 'https://www.crio.do/blog/content/images/2021/03/Python-projects.png',
      description: 'This is a Python Project.',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <section id="portfolio">
      <div className="container-fluid text-light" style={{backgroundColor:"rgb(252, 229, 190)"}}>
        <h2 style={{color:"teal"}}><u>Portfolio</u></h2><br></br>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4" >
              <div className="card">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
