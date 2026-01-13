import React from "react";
import "./PageLoader.css";
import logo from "/public/trust1.png";

const PageLoader = ({ show }) => {
  if (!show) return null;

  return (
    <div className="page-loader active">
      <img src={logo} alt="Trusto Biotech" />
      <span className="loader-bar"></span>
    </div>
  );
};

export default PageLoader;
