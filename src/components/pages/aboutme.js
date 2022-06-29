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
          I started working as an inventory control supervisor where I was
          introducted to basic programs that were used to calculate numbers for
          monitoring products. Working there allowed me to realize my interest
          in working as a computer programmer. As a result, I started developing
          new skills as a full-stack developer at University of California, San
          Diego Extension Studies.
        </p>
      </div>
    </div>
  );
}
