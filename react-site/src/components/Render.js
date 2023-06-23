import React, { useState } from "react";
import Menu from "./Menu";
import Display from "./Display";

function Render() {
  const [activeMenu, setActiveMenu] = useState("My history");

  return (
    <div className="Render">
      <Menu setActiveMenu={setActiveMenu} />
      <Display activeMenu={activeMenu} />
    </div>
  );
}

export default Render;