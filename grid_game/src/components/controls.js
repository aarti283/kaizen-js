// Controls.js
import React from "react";
import useKeyPress from "./keyboard.js"
import { useEffect, useState } from "react";

const Controls = ({ up, down, left, right, action }) => {
  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const arrowLeftPressed = useKeyPress('ArrowLeft');
  const arrowRightPressed = useKeyPress('ArrowRight');


  useEffect(() => {
    if (arrowUpPressed) {
      up()
      console.log('arrowUpPressed');
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      down()
      console.log('arrowDownPressed');
    }
  }, [arrowDownPressed]);
  useEffect(() => {
    if (arrowLeftPressed) {
      left()
      console.log('arrowLeftPressed');
    }
  }, [arrowLeftPressed]);

  useEffect(() => {
    if (arrowRightPressed) {
      right()
      console.log('arrowRightPressed');
    }
  }, [arrowRightPressed]);


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
