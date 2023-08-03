import React from "react";
import "../components//About/Resume.css";
import Work from "../components/About/Travail";
import Education from "../components/About/Formation";
import Skill from "../components/About/CompétenceCode";
import Skill2 from "../components/About/CompétenceAutres";
import Footer from "../components/Footer/Footer"

const Resume = ({ data }) => {
  if (!data) return null;

  const { skillmessage, education, work, skills, skills2 } = data;

  return (
    <section id="resume">
      <div className="GridContenue">
        <Education className="Education" education={education} />
        <Work className="Work" work={work} />
      </div>
      <Skill skillmessage={skillmessage} skills={skills} />
      <Skill2 skillmessage={skillmessage} skills2={skills2} />
      <footer>
        <Footer/>
      </footer>
    </section>
  );
};

export default Resume;
