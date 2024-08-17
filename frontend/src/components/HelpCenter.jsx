import HelpCenterNavbar from "./Navbar";
import HelpCenterFooter from "./Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import "../App.css";

const HelpCenter = () => {
  return (
    <div>
      <HelpCenterNavbar />
      <div className="help-center-container">
        <h1 className="body-heading">How can we help?</h1>
        <div className="search-container">
          <input type="search" className="search-bar" placeholder="search" />
          <FaArrowRightLong className="right-icon-search" />
        </div>
      </div>
      <div className="card-bg-contianer">
        <div className="cards-container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <hr className="card-line" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <hr className="card-line" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <hr className="card-line" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <hr className="card-line" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <hr className="card-line" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <hr className="card-line" />
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HelpCenterFooter />
    </div>
  );
};

export default HelpCenter;
