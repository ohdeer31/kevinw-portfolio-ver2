import React from "react";
import "../font.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="d-inline">
      <ul className="nav googleFont" style={{ fontSize: "20px" }}>
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("Aboutme")}
            className={
              currentPage === "Aboutme" ? "nav-link active" : "nav-link"
            }
            // style={{ color: "white" }}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
