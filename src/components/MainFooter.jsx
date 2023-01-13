import React from "react";
import Link from "gatsby-link";

const MainFooter = () => (
  <div className="c-main-footer">
    <p className="c-main-footer__note">
      Developed with  {" "}
      <a
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>{" "}
      e{" "}
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        React 
      </a>
      {" "}©{" "}
      <a
        href="https://focanainternet.com.br"
        target="_blank"
        rel="noopener noreferrer"
      >
        Foca na Internet
      </a>
    </p>
  </div>
);

export default MainFooter;
