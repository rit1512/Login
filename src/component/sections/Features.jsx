import React, { Component } from "react";
import '../../css/main.css'
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
class Features extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <Router>
      <div
        className="col-lg-12 col-sm-12 col-xs-12 d-flex align-items-center custom-section bg-light p-0"
        id="features"
      >
        <div className="row m-0 p-0 justify-content-center my-5">
        
          <div className="row col-lg-10 my-5">
            <div className="align-items-center justify-content-center">
              <span className="align-items-center justify-content-center align-center row my-5">
                <span className="bg-dark section-head-line mx-2" />
                <p className="h3  my-3 section-head"><b>How can we help you?</b></p>
                <span className="bg-dark section-head-line mx-2" />
              </span>
              <div className="col-sm-12 col-xs-12 align-items-center justify-content-center align-center row m-0 p-0">
                <div className="d-flex flex-column col-lg-3 mx-auto col-sm-10 features-container justify-content-center p-3 my-2">
                  <div className="d-flex consolidate-image" id="workflow-feature-image" />
                  <p className="h5 my-3">WEBDESIGN.</p>
                  <p className="text-justify">
                  A web designer creates the look, layout, and features of a website. The job involves understanding both graphic design and computer programming. 
                  </p>
                  <Link to="#" class="btn btn-danger custom-btn">Read More</Link>
                 
                </div>
                 
                <div className="d-flex flex-column col-lg-3 justify-content-center mx-auto col-sm-10 features-container p-3 my-2">
                  <div className="bg-light d-flex consolidate-image" id="spotBuy-feature-image" />
                  <p className="h5 my-3">
                   SEO
                  </p>
                  <p className="text-justify">
                  SEO stands for “search engine optimization.” It is the process of getting traffic from the “free,” “organic,” “editorial” or “natural” search results on search engines.
                  </p>
                  <Link to="#" class="btn btn-danger custom-btn">Read More</Link>
                </div>
                <div className="d-flex flex-column col-lg-3 justify-content-center mx-auto col-sm-10 features-container p-3 my-2">
                  <div className="d-flex consolidate-image" id="easyToUse-feature-image" />
                  <p className="h5 my-3 text-left"> Hosting.</p>
                  <br />
                  <p className="text-justify">
                  Web hosting is effectively the process of using a server to host a website
                  </p>
                  <Link to="#" class="btn btn-danger custom-btn">Read More</Link>
                </div>
              </div>
            </div>
          </div>

        
     
        </div>
      </div>
      </Router>
    );
  }
}

export default Features;
