import React from "react";
import img from "./assets/about.jpg";
import { IoSchoolOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

export const About = () => {
  return (
    <section id="about">
      <div className="aboutme">
        <h1>My Biodata</h1>
        <div className="aboutme-content">
          <div id="aboutme-image">
            <img src={img} alt="me smiling" />
          </div>
          <div id="aboutme-text">
            <h2>Few words about me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate dolores incidunt suscipit. Delectus dolor eius esse
              explicabo magni omnis porro quo sunt vero voluptas. Deleniti esse,
              exercitationem fugit, minus mollitia nam nostrum obcaecati
              provident quam quos, sapiente similique suscipit unde voluptate.
            </p>
            <div id="aboutme-button">
              <a href="/">Download CV</a>
            </div>
          </div>
        </div>
      </div>
      <div className="resume">
        <h2>My Resume</h2>
        <div className="education">
          <h3>---- Education -----</h3>
          <div className="highlights">
            <div className="timeline">
              {/* to add more copy from class container */}
              <div className="container left">
                <div className="content">
                  <h3>Masters Degree</h3>
                  <h4>RMIT University</h4>
                  <h5>2012-2013</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, maxime.
                  </p>
                  <div className="timeline-icon">
                    <IoSchoolOutline />
                  </div>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <h3>Masters Degree</h3>
                  <h4>RMIT University</h4>
                  <h5>2012-2013</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, maxime.
                  </p>
                  <div className="timeline-icon">
                    <IoSchoolOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <h3>---- Experience -----</h3>
          <div className="highlights">
            <div className="timeline">
              <div className="container left">
                <div className="content">
                  <h3>Senior Developer</h3>
                  <h4>Google</h4>
                  <h5>2015-present</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, maxime.
                  </p>
                  <div className="timeline-icon">
                    <BsPeople />
                  </div>
                </div>
              </div>
              <div className="container right">
                <div className="content">
                  <h3>Senior Developer</h3>
                  <h4>Google</h4>
                  <h5>2015-present</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Corporis, maxime.
                  </p>
                  <div className="timeline-icon">
                    <BsPeople />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
