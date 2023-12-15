import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';

function Counter() {
    const [num,setNum] = useState(0);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() =>{
        if(num < -5 || num > 5){
            setNum(val=>0);  
            handleShow(); 
        }
       
    },[num])

    const increm = () =>{
        setNum(val=>val+1);
        if(num < -5){
            setNum(val=>0);    
        }
    }
    const decre = () =>{
        setNum(val=>val-1);
    }
    return (
      <div className='container'>
        <h1>inside counter</h1>
        <ButtonGroup aria-label="Basic example">
      <Button variant="primary" onClick={decre}>-</Button>
        <h1>{num}</h1>
      <Button variant="primary" onClick={increm}>+</Button>
    </ButtonGroup>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Value Resetting to 0!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
  
  export default Counter;
