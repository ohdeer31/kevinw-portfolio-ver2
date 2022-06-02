import React from "react";
import Card from "react-bootstrap/Card";
// import image1 from "../../images/picture1.jpeg";
const projects = [
  {
    id: 1,
    name: "Doggo Meet Up",
    image: "picture1.jpeg",
    tools: "JavaScript/Handlebars",
  },
  {
    id: 2,
    name: "Unblock.Unwind",
    image: "picture4.jpeg",
    tools: "JavaScript/Materialize",
  },
  {
    id: 3,
    name: "My Work Day Scheduler",
    image: "picture2.jpeg",
    tools: "JavaScript",
  },
  {
    id: 4,
    name: "Here You Go Weather",
    image: "picture5.jpeg",
    tools: "JavaScript/Bootstrap",
  },
  {
    id: 5,
    name: "Password Generator",
    image: "picture3.jpeg",
    tools: "JavaScript",
  },
];

export default function Portfolio() {
  return (
    <div className="container">
      <header className="my-5">
        <h1>Portfolio</h1>
      </header>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projects.map(({ name, image, tools }) => (
          <Card className="bg-dark text-white" key={projects.id}>
            <Card.Img
              src={process.env.PUBLIC_URL + `/images/${image}`}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{tools}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </div>
  );
}
