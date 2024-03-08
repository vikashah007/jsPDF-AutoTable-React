import { useState } from "react"
import React  from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Selectbox from "./Selectbox";


const Openmodel = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
   
    <Button variant="primary" onClick={handleShow}>
    Launch static backdrop modal
  </Button>

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    centered
  >
    <Modal.Header closeButton>
    </Modal.Header>
    <Modal.Body>
    <h3>Select Box</h3>
      <Selectbox></Selectbox>
    </Modal.Body>
    
  </Modal>
    </>
  )
}

export default Openmodel

// <Modal.Footer>
//       <Button variant="secondary" onClick={handleClose}>
//         Close
//       </Button>
//     </Modal.Footer>