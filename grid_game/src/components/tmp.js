import "../App.css";
import { useEffect, useState } from "react";

function Gamegrid() {
  const [gridSize, setGridSize] = useState(4); // Change this to set the initial grid size
  const [state, setState] = useState(1);
  const [block, setBlock] = useState(6);
  const [action, setAction] = useState("");

  const grid_no = Array.from({ length: gridSize * gridSize }, (_, index) => index + 1);

  useEffect(() => {
    if (state == block) {
        setAction("Player Blocked");
    }
    else{
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
    <>
      <div className="container dynamic_grid">{state}
        <div className="row">
          {/* Using map to iterate over the items */}
          {grid_no.map((item, index) => (
            <div key={index} className={`col-${12 / gridSize} mb-1`}>
              <div
                className="mover"
                style={{
                  backgroundColor: item == state ? 'red' :'white' && item == block ? 'black' : 'white'&& state==block?'black':'white'}}
              >
              </div>
            </div>
          ))}
        </div>
      </div>

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
    </>
  );
}

export default Gamegrid;
