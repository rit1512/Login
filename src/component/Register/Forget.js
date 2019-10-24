import React, { Component } from 'react'
import './Login.css';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'


export class ForgotPassword extends Component {
    constructor(props)
	{
		super(props);
		this.state = {
		email_id : "",
		otp:"",
		new_password:""
		
			  
		}	
		
	}

	change = e => 
	{
	 this.setState({
		 [e.target.name] : e.target.value,

	 })
	}
	
	
  render() {
    const onRouteChange = this.props.onRouteChange;
    return (
      
        <div>
        <div class="my-login-page">
<section class="h-100">
 <div class="container h-100">
     <div class="row justify-content-md-center h-100">
         <div class="card-wrapper">
             <div class="card fat custom-card-margin">
                 <div class="card-body">
                     <h4 class="card-title">Forget Password</h4>
                     <form method="POST">
                      
                         <div class="form-group">
                             <label for="email">Enter E - Mail </label>

                             <input id="email" type="email" class="form-control" name="email_id" value={this.state.email_id} onChange={e => this.change(e)} required autofocus />
							 
							<p class="float-right pt-2">
							<button class="btn btn-primary custom-edit-btn btn-sm" >
                                submit
                             </button>	
							 </p>
										
                         </div>
						
						 <div class="form-group">
                             <label for="OTP">OTP </label>
                             <input type="text" placeholder="Enter OTP" class="form-control" name="otp"  onChange={e => this.change(e)} required autofocus />
                         </div>
						 <div class="form-group">
                             <label for="Password">PassWord </label>
                             <input  type="password" placeholder="Enter Password" class="form-control" name="new_password"  onChange={e => this.change(e)} required autofocus />
                         </div>

                             <button class="btn btn-primary btn-block" >
                                 Login
                             </button>
        
                          <Link to="/">
                             <button type="cancel" class="btn btn-default pull-right btn-secondary btn-block mt-2" >
                                 Cancel
                             </button>
                             </Link>
                         
                        
                     </form>
                 </div>
             </div>
         </div>
     </div>
 </div>
</section>
</div>

         
     </div>
    )
  }
}

export default ForgotPassword
