// Controls.js
import React from "react";

const Controls = ({ up, down, left, right, action }) => {
  return (
    <div className="controls">
      <div className="iner">
        <div className="roww">
          <div className="left hide"></div>
          <div className="right" id="up" onClick={up}>
            up
          </div>
          <div className="up hide"></div>
        </div>
        <div className="roww">
          <div className="left" onClick={left}>
            left
          </div>
          <div className="right hide"></div>
          <div className="up" onClick={right}>
            right
          </div>
        </div>
        <div className="roww">
          <div className="left hide"></div>
          <div className="right" onClick={down}>
            down
          </div>
          <div className="up hide"></div>
        </div>
        <div className="roww">
          <h1>{action}</h1>
        </div>
      </div>
    </div>
  );
};

export default Controls;
