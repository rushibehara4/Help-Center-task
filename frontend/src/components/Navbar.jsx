import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import HelpCenterModal from './submitModal';
import "../App.css";
import { CgAbstract } from "react-icons/cg";

function HelpCenterNavbar() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <p className="logo-background">
          <CgAbstract className="logo-image" />
        </p>
        <p className="nav-heading bold-font">Abstract</p>
        <hr className="vertical-line" />
        <p className="nav-heading">Help Center</p>
      </div>
      <div className="button-container">
        <Button type="button" variant='secondary' className="submit-button" onClick={() => setModalShow(true)}>
          Submit a request
        </Button>
      </div>
      <HelpCenterModal
        show={modalShow}
        handleClose={() => setModalShow(false)}
      />
    </div>
  );
}

export default HelpCenterNavbar;
