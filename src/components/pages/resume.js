import React from "react";

export default function Resume() {
  return (
    <div className="container">
      <header className="my-5">
        <h1>Resume</h1>
      </header>
      <p>
        Download my{" "}
        <a href="https://docs.google.com/document/d/1HbqUh3fNE_RKKAWbepwbXtnnp9ohfmw3/edit?usp=sharing&ouid=105100305547412249524&rtpof=true&sd=true">
          resume
        </a>
      </p>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
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
  );
}
