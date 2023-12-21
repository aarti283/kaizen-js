
import { useEffect, useState } from "react";


const useKeyPress = (targetKey) => {
    const [keyPressed, setKeyPressed] = useState(false);
  
    useEffect(() => {
      const downHandler = ({ key }) => {
        if (key === targetKey) {
          setKeyPressed(true);
        }
      };
  
      const upHandler = ({ key }) => {
        if (key === targetKey) {
          setKeyPressed(false);
        }
      };

      const leftHandler = ({ key }) => {
        if (key === targetKey) {
          setKeyPressed(true);
        }
      };
  
      const rightHandler = ({ key }) => {
        if (key === targetKey) {
          setKeyPressed(false);
        }
      };

      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      window.addEventListener('keyleft', leftHandler);
      window.addEventListener('keyright', rightHandler);
  
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
        window.removeEventListener('keyleft', leftHandler);
        window.removeEventListener('keyright', rightHandler);
      };
    }, [targetKey]);
  
    return keyPressed;
  };

  export default useKeyPress