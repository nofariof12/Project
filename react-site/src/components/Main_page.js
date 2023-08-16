import React from "react";
import BackButton from "./BackButton";
import Render from "./Render";

function MainPage() {
  return (
    <div>
      <Render />,
      <BackButton/>
    </div>
  );
}

export default MainPage;