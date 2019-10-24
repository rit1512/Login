import React, { Component } from 'react'
import '../../css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-scroll'
import { BrowserRouter as Router, Link as Anchor } from 'react-router-dom'

class Footer extends Component {

  state = {
    r: true
  }
  handleRedirect = () => {
    this.r = true
    console.log('button cliked !')
  }

  render() {
    return (
      /* <!--FOOTER  --> */
      <Router>
        <footer className='custom-footer col-sm-12' >
          <div className='container px-0 py-4'>
            <div className='d-flex flex- row'>
              <div className='col-md-3 col-lg-3 col-sm-12 px-2 mx-auto'>
              <h6><b>Quicks Links</b></h6>
                <ul className='list-group'>
                  <Link id='footer-overview' activeClass='active' to='overview' spy smooth offset={0} duration={1000}>Overview</Link>
                  <Link activeClass='active' to='features' spy smooth offset={30} duration={1000}>Features</Link>
                 
                </ul>

                
              </div>

             

              <div className='col-md-3 col-lg- col-sm-3 mx-auto px-2'>
               <h6><b>Services</b></h6>
               <ul className="list-group" >
                 <li className="list-group">
                   Service 1
                 </li>
                 <li className="list-group">
                   Service 2
                 </li>
                 <li className="list-group">
                   Service 3
                 </li>
                 <li className="list-group">
                   Service 4
                 </li>
               </ul>

              </div>
              <div className='col-md-3 col-lg- col-sm-3 mx-auto px-2'>
               <h6><b>Services areas</b></h6>
               <ul className="list-group">
               <li className="list-group">
                   Service Area 1
                 </li>
                 <li className="list-group">
                   Service Area 2
                 </li>
                 <li className="list-group">
                   Service Area 3
                 </li>
                 <li className="list-group">
                   Service Area 4
                 </li>
                 
               </ul>
               
               
              </div>

              <div className='col-md-3 col-lg- col-sm-3 mx-auto px-2'>
               <h6><b>Contact</b></h6>
               <ul  className="list-group">
             
                  <h6><b>webley</b></h6>
                  <li className="list-group">
                   4355 Wine Stress
                 </li>
                 <li className="list-group">
                   San Dega, CA 
                 </li>
                 <li className="list-group">
                   615-555-3333
                 </li>

                  <br/>
                  <br/>
                  <br/>
                  <br/>
                 <li className="list-group">
                   a@gmail.com
                 </li>
               
               </ul>
               
               
              </div>

              <div className='col-md-3 col-lg-3 col-sm-12 mx-auto px-2'>
               
              </div>

            </div>
          </div>
        </footer >
      </Router >
    )
  }
}

export default Footer
