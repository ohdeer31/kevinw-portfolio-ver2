import React from "react";
import { MDBContainer } from "mdbreact";

const FooterPage = () => {
  return (
    <div className="footer-copyright text-center py-3">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://github.com/ohdeer31"> Kevin W. </a>
      </MDBContainer>
    </div>
  );
};

export default FooterPage;
