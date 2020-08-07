import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="row full-height">
        <div className="col-md-12 mt-5">
          <Navbar />
        </div>

        <div className="col-md-12 mt-5">HEY! THERE</div>
        <div className="col-md-12">I'M</div>
        <div className="col-md-12 my-name">DEVON WINTZ</div>
        <div className="col-md-12 mb-5">
          A FREELANCE
          <span
            class="txt-rotate"
            data-period="2000"
            data-rotate='[ " WEB DEVELOPER.", " DESIGNER." ]'
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
