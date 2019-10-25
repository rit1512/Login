import React from 'react'
import '../../css/main.css'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

function Feedback() {
  return (
    <Router>
      {/* <!-- SECTION 9 --> */}
      <div className='feed-image'>
      <div className='col-lg-12 col-sm-12 col-xs-12 d-flex justify-content-center ' id='feedback-section'>
        <div className=' col-lg-10 row m-0 p-0 align-items-center'>
          <div className='mx-auto col-lg-10 col-sm-12 col-xs-12 text-justify justify-content-center text-center'>
            <p className='feedback-text-h1 product-title font-weight-regular'> Get in touch with us
            </p><br />
           
            <div className='row'>
            
            <input  type="text" class=" ml-auto bg-transparent border-top-0 border-left-0 border-right-0 form-control col-4" placeholder="Enter Email" name="email"  required autofocus />
            
            <input  type="text" class="ml-auto form-control col-4 bg-transparent border-top-0 border-left-0 border-right-0" placeholder="Enter Password" name="password"  required autofocus />
           
            </div>
            <br />
            <br />
            <br />
            <div className='row'>
            
            <input  type="text" class=" ml-auto bg-transparent border-top-0 border-left-0 border-right-0 form-control col-4" placeholder="Enter Email" name="email"  required autofocus />
            
            <input  type="text" class="ml-auto form-control col-4 bg-transparent border-top-0 border-left-0 border-right-0" placeholder="Enter Password" name="password"  required autofocus />
           
            </div>
            
            <br /><br />
            <Link to='#' className='btn btn-primary demo-btn feedback-btn font-weight-bold m-4'>Submit</Link>
           
          </div>
        </div>
      </div>
      </div>
    </Router >
  )
}
export default Feedback
