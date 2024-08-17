import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../App.css";
import { CgAbstract } from "react-icons/cg";

function HelpCenterNavbar() {
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
        <Button type="submit" className="submit-button">
          Submit a request
        </Button>
      </div>
    </div>
  );
}

export default HelpCenterNavbar;
