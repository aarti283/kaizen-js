// Gamegrid.js
import "../App.css";
import { useEffect, useState } from "react";
import Controls from "./controls";

function GridGame() {
  const [gridSize, setGridSize] = useState(4);
  const [state, setState] = useState(1);
  const [block, setBlock] = useState(6);
  const [action, setAction] = useState("");

  useEffect(() => {
    if (state === block) {
      setAction("Player Blocked");
    } else {
      setAction("");
    }
  }, [state]);

  const up = () => {
    if (state <= gridSize) {
      setAction("Action not Allowed");
    } else {
      setState((prevState) => prevState - gridSize);
    }
  };

  const down = () => {
    if (state > gridSize * (gridSize - 1)) {
      setAction("Action not Allowed");
    } else {
      setState((prevState) => prevState + gridSize);
    }
  };

  const right = () => {
    if (state % gridSize === 0) {
      setAction("Action not Allowed");
    } else {
      setState((prevState) => prevState + 1);
    }
  };

  const left = () => {
    if (state % gridSize === 1) {
      setAction("Action not Allowed");
    } else {
      setState((prevState) => prevState - 1);
    }
  };

  return (
    <><div className="container dynamic_grid">
    {state}
    <div className="row">
      {Array.from({ length: gridSize * gridSize }, (_, index) => index + 1).map((item, index) => (
        <div key={index} className={`col-${12 / gridSize} mb-1`}>
          <div
            className="mover"
            style={{
              backgroundColor:
                item == state ? "red" : "white" && item == block ? "black" : "white" && state == block ? "black" : "white",
            }}
          ></div>
        </div>
      ))}
    </div>
  </div>

  <Controls up={up} down={down} left={left} right={right} action={action} />

    
        </>
  );
}

export default GridGame;
