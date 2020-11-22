import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Chloropeth from './Chloropeth'
import './Chloropeth.css';
function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
      <p className="hover">Hover over map to <br/> view active cases</p>
      <Chloropeth setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
export default Map;