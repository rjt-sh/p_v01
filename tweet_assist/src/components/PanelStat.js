import React from "react";
import "./Panel.css";

const PanelStat = ({ words, tweets }) => {
  return (
    <div className="stats">
      <p className="display-6">Words : {words} </p>
      <p className="display-6">Tweet(s) : {tweets}</p>
      <button type="button" className="btn btn-outline-info">
        Preview
      </button>
      <button type="button" className="btn btn-outline-success">
        Post
      </button>
    </div>
  );
};

export default PanelStat;
