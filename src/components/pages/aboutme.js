import React from "react";
import "../../font.css";
import profilePic from "../../images/me.png";

export default function About() {
  return (
    <div className="container googleFont">
      <header className="my-5">
        <h1 className="googleFont">About Me</h1>
      </header>
      <div>
        <img
          src={profilePic}
          alt="myself"
          style={{ width: 150, height: 150 }}
        ></img>
        <p className="my-3">
          Greetings. My name is Kevin Wang and I graduated from the University
          of California, Riverside with a bachelor degree in Business Economics.
          After graduating in 2019, I moved to Japan and studied their language
          and culture till 2021. I moved back to the states and started working
          as an inventory control supervisor. I was introducted to basic
          programs that were used to calculate numbers for monitoring products.
          Working there allowed me to realize working as a computer programmer
          is more stuited to me.
        </p>
      </div>
    </div>
  );
}
