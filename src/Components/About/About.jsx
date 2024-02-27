import React from 'react';
import './About.css'

export default function About() {
  return (
    <section id="about" className="py-5 about">
    <div class="container py-5">
      <div className="row text-white d-flex justify-content-center align-items-center py-5">
        <div className="about-title my-2 ">
          <h2 className="fw-bolder fs-2 text-center mt-5">ABOUT COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="line bg-white me-3"></div>
            <i className="fa-solid fa-star "></i>
            <div className="line bg-white ms-3"></div>
          </div>
        </div>
        <div className="col-md-6 mb-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6 mb-5">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

      </div>

    </div>


  </section>
  )
}
