import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about d-flex flex-column align-items-center justify-content-center my-4">
      <h2 className="mb-3">CSI DMCE</h2>
      <div className="my-3 text-center font-light">
        <h4>Year of Establishment: 2012</h4>
        <h4>Faculty Coordinator: Dr. Chhaya Pawar</h4>
        <p>
          CSI DMCE - Student branch, establishment in the year 2012, conducts
          various workshops, seminars, technical competition and also Technical
          fest in association with Computer Association for Technological Trends
          (catt).
        </p>
        <p>
          The committee continuously works for fostering experience teamwork,
          networking etc. in our college. It is the Committee Responsible for
          organsing all the department level events like workshops, seminars,
          competitions, celebrations,etc.
        </p>
        <p>
          CSI CATT ALSO CONTRIBUTES LARGELY IN ORGANISING EVENTS OF TECHNITUDE
          (TECHNICAL fESTIVAL OF DMCE ). ALL EFFORTS ARE VERY WELL ENCOURAGED BY
          dR CHHAYA PAWAR (FACULTY cOORDINATOR) AND dR aMOL PANDE (HEAD OF
          DEPARTMENT).
        </p>
      </div>
    </div>
  );
};

export default About;
