import React, { Component } from 'react'
import '../../css/main.css'
import Home from '../sections/Home'
import Features from '../sections/Features'


import Feedback from '../sections/Feedback'
import Footer from '../sections/Footer'

import 'bootstrap/dist/css/bootstrap.css'
import { Link, animateScroll as scroll } from "react-scroll"

class Home1 extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  onLogout = e =>
  {
        this.props.history.push('/')
  }
  render() {
    return (
      <div>

        {/* <!-- Navbar --> */}
        <nav className='navbar navbar-expand-lg sticky-top navbar-dark custom-navbar'>
          <Link className='navbar-brand mx-5 font-weight-bold text-uppercase' onClick={this.scrollToTop} to=""><i>Webly</i></Link>
          <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav'
            aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='overview' spy smooth offset={0} duration={1000}><b>Home</b></Link>
              </li>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='features' spy smooth offset={30} duration={1000}><b>About us</b></Link>
              </li>
              
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='feedback-section' spy smooth offset={30} duration={1000}><b>Sub page</b></Link>
              </li>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='footer' spy smooth offset={30} duration={1000}><b>Contact</b></Link>
              </li>
              <li className='nav-item mx-3'>
                <Link className='nav-link' activeClass='active' to='footer' spy smooth offset={30} duration={1000}onClick = {e => this.onLogout(e)} ><b>Logout</b></Link>
              </li>
             
              
              
            </ul>
          </div>
        </nav>

       
        <Home  />
        <Features />
        <Feedback />
        <Footer id='footer' />

      </div >
    )
  }
}

export default Home1
