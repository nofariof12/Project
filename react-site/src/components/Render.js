import React, { useState } from "react";
import Menu from "./Menu";
import Display from "./Display";
import MyCalendar from "./Calendar";

function Render() {
  const [activeMenu, setActiveMenu] = useState("My history");

  return (
    <div className="Render">
      <Menu setActiveMenu={setActiveMenu} />
      <Display activeMenu={activeMenu} />
      <MyCalendar activeMenu={activeMenu} />
    </div>
  );
}

export default Render;