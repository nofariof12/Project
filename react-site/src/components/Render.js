import React, { useState } from "react";
import Menu from "./Menu";
import Display from "./Display";
import MyCalendar from "./Calendar";
import MyHistory from "./MyHistory";

function Render() {
  const [activeMenu, setActiveMenu] = useState("My_history");

  return (
    <div className="Render">
      <Menu setActiveMenu={setActiveMenu} />
      <Display activeMenu={activeMenu} />
      <MyCalendar activeMenu={activeMenu} />
      <MyHistory activeMenu={activeMenu} />
    </div>
  );
}

export default Render;