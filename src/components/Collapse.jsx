import React, { useState } from "react";
import "../styles/Collapse.scss";
import downArrow from "../assets/Vector_down.svg";

export default function Collapse({ title, content }) {
  const [isOpen, set] = useState(false);
  const openAndClose = () => {
    set(!isOpen);
  };
  return (
    <div className="collapse">
      <div className="collapse__header" onClick={openAndClose}>
        <h2 className="collapse__title">{title}</h2>
        <span className="collapse__span">
          <img src={downArrow} className={isOpen ? "rotate" : "rotate__up"} />
        </span>
      </div>
      <div className={`collapse__container ${isOpen && "open"}`}>
        <p className="collapse__content">{content}</p>
      </div>
    </div>
  );
}
