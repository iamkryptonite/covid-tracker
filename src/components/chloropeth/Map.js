import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import Chloropeth from './Chloropeth'
function Map() {
  const [content, setContent] = useState("");
  return (
    <div>
      <Chloropeth setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}
export default Map;