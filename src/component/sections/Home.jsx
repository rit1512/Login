import React, { Component } from "react";
import '../../css/main.css'
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class Overview extends Component {
  render() {
    return (
      // <!-- SECTION 1 -->
      <Router>
        <div
          className="d-flex col-lg-12 col-sm-12 col-sx-12 custom-section justify-content-center align-items-center"
          id="overview"
        >
          <div className="row col-lg-10">
            <div className="my-auto col-lg-6 col-sm-12 col-xs-12 text-justify justify-content-center">
              <p className="overview-title text-left product-title">
               <div>
                Webdesign for
                </div>
                 Local Businesses
               
    </p>
              <br />
              <p className="h3 font-weight-regular product-intro" />
              <br />
              <Link to="#" className="btn  btn-danger custom-btn">
               GET A FREE QUOTE TODAY
              </Link>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Overview;
