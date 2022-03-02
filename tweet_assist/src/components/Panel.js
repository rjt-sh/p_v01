import React, { useState } from "react";
import "./Panel.css";
import PanelStat from "./PanelStat";

const Panel = () => {
  const [words, setWords] = useState(0);
  const [tweets, setTweets] = useState(0);
  return (
    <div className="main-container">
      <PanelStat words={words} tweets={tweets} />
      <div className="text-container">
        <textarea className="form-control text-area" placeholder="start typing here..."></textarea>
      </div>
    </div>
  );
};

export default Panel;
