import React, { useState } from "react";
import Navigation from "./Navigation";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import nintendo from "../images/nintendo-bg.jpeg";
import "../font.css";

export default function Header() {
  const [currentPage, setCurrentPage] = useState("Aboutme");

  // This function is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    switch (currentPage) {
      case "Aboutme":
        return <Aboutme />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <nav
        className="navbar"
        style={{ backgroundImage: `url(${nintendo})`, padding: "70px" }}
      >
        <h1
          className="p-2 m-1 googleFont"
          style={{ color: "white", fontSize: "40px" }}
        >
          Kevin Wang
        </h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
      <div className="d-flex flex-column min-vh-100">{renderPage()}</div>
    </div>
  );
}
