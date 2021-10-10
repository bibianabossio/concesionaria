import React from "react";
import "./Title.css";

//delaro el objeto y lo que espero que muestre

const Title = ({ text }) => {
  return (
    <div >
      <label className="title-label">{text}</label>
    </div>
  );
};
export default Title;
