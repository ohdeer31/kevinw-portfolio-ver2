import React from "react";
import "../../font.css";

const projects = [
  {
    name: "The Bowel Mvmt",
    image: "picture1.jpeg",
    tools: "JavaScript/React/MongoDB/GraphQL/Express.js",
    link: "https://ancient-refuge-47910.herokuapp.com/",
  },
  {
    name: "Doggo Meet Up",
    image: "picture2.jpeg",
    tools: "JavaScript/Handlebars",
    link: "https://hidden-reaches-52880.herokuapp.com/",
  },
  {
    name: "Unblock.Unwind",
    image: "picture3.jpeg",
    tools: "JavaScript/Materialize",
    link: "https://christinaa126.github.io/unblock-unwind/",
  },
  {
    name: "Here You Go Weather",
    image: "picture4.jpeg",
    tools: "JavaScript/Bootstrap",
    link: "https://ohdeer31.github.io/here-you-go-weather/",
  },
  {
    name: "My Work Day Scheduler",
    image: "picture5.jpeg",
    tools: "JavaScript",
    link: "",
  },
];

export default function Portfolio() {
  return (
    <div className="container">
      <header className="my-5">
        <h1 className="googleFont">Portfolio</h1>
      </header>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map(({ name, image, tools, link }) => (
          <div className="col">
            <div className="card">
              {/* <div
                className="bg-image hover-zoom"
                style={{ maxWidth: "22rem" }}
              > */}
              <a href={link} style={{ textDecoration: "none" }}>
                <img
                  src={process.env.PUBLIC_URL + `/images/${image}`}
                  className="w-100"
                  alt="My project"
                />
                {/* <div
                    className="mask"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  ></div> */}
                {/* </div> */}
                <div className="card-body">
                  <h5
                    style={{ color: "black" }}
                    className="card-title googleFont"
                  >
                    {name}
                  </h5>
                  <p
                    style={{ color: "black" }}
                    className="card-text googleFont"
                  >
                    {tools}
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
