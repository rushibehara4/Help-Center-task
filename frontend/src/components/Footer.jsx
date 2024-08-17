import "../App.css";
import { CgAbstract } from "react-icons/cg";

const HelpCenterFooter = () => {
  return (
    <div className="footer-container">
      <div className="row">
        <div className="col-md-2">
          <h1 className="footer-heading">Abstract</h1>
          <p className="footer-para">Branches</p>
        </div>
        <div className="col-md-2">
          <h1 className="footer-heading">Resources</h1>
          <p className="footer-para">Blog</p>
          <p className="footer-para">Help Center</p>
          <p className="footer-para">Release Notes</p>
          <p className="footer-para">Status</p>
        </div>
        <div className="col-md-2">
          <h1 className="footer-heading">Community</h1>
          <p className="footer-para">Twitter</p>
          <p className="footer-para">Linkdin</p>
          <p className="footer-para">Facebook</p>
          <p className="footer-para">Dribble</p>
          <p className="footer-para">Podcast</p>
        </div>
        <div className="col-md-6">
          <h1 className="footer-heading">Company</h1>
          <p className="footer-para">About Us</p>
          <p className="footer-para">Carrer</p>
          <p className="footer-para">Legal</p>

          <div className="contact-container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="footer-heading">Contact Us</h1>
                <p className="footer-para">info@abstract.com</p>
              </div>
              <div className="col-md-6 company-information">
                <p className="logo-background">
                  <CgAbstract className="logo-image" />
                </p>
                <p className="footer-para">&#169; Copyright 2022</p>
                <p className="footer-para">Absract studio design, Inc</p>
                <p className="footer-para">All right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterFooter;
