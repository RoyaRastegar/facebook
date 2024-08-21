import React from "react";
import "./menulink.scss";
const MenuLink = ({ icon, text }) => {
  return (
    <div className="menuLink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">{text === "logout" && "(Amber)"}</span>
    </div>
  );
};

export default MenuLink;
