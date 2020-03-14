import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";

import ToolBoxListContainer from "../containers/ToolBoxListContainer";

export default () => (
  <div className="c-content-box">
    <Helmet title="Minhas Competências" />

    <HeadlineWithFocus>
      Linguagens e tecnologias <span>que tenho experiência</span>
    </HeadlineWithFocus>
    <ToolBoxListContainer />
  </div>
);
