import React from "react";
import HeadlineWithFocus from "../components/HeadlineWithFocus";
import Helmet from "react-helmet";

import ToolBoxListContainer from "../containers/ToolBoxListContainer";

export default () => (
  <div className="c-content-box">
    <Helmet title="Skill Set" />

    <HeadlineWithFocus>
      Languages and technologies <span>I have experience with</span>
    </HeadlineWithFocus>
    <ToolBoxListContainer />
  </div>
);
