import React from "react";
import "../../font.css";

export default function Resume() {
  return (
    <div className="container googleFont">
      <header className="my-5">
        <h1 className="googleFont">Resume</h1>
      </header>
      <div>
        <p>
          Download my{" "}
          <a
            href="https://docs.google.com/document/d/1HbqUh3fNE_RKKAWbepwbXtnnp9ohfmw3/edit?usp=sharing&ouid=105100305547412249524&rtpof=true&sd=true"
            style={{ textDecoration: "none", color: "red" }}
          >
            resume
          </a>
        </p>
        <h2 className="googleFont">Front-end Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2 className="googleFont">Back-end Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
