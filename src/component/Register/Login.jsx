import React, { Component } from 'react';
import './Login.css';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'


class AddLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
			email_id:"",
			password:"",
			hidden:true
			
		}

	}

	change = e => {
		this.setState({
			[e.target.name]: e.target.value,

		})
	
	}

	toggleShow=()=> {
		this.setState({ hidden: !this.state.hidden });
	  }
	onSubmit = e => {

		e.preventDefault();
		if (this.state.email_id =="rddubey31@gmail.com" && this.state.password ==123)
		{
			
			this.props.history.push('/home') 
			
			

		}
		this.setState({
			email_id:"",
			password:""
		
		})
		console.log(this.state);

// Api Calling
		// axios.post(`${API_URL}company/login`, this.state)
			
		// 	.then(function (response) {
				
				
		// 		//console.log(tokentext)
		// 		if (response.data.success) {
					
		// 		}
				
		// 	}.bind(this))
		// 	.catch(error => {
		// 		console.log(error);
		// 	})


	}
	render() {
		const onRouteChange = this.props.onRouteChange;
		return (
			<div>
				<div class="my-login-page">
					<section class="h-100">
						<div class="container h-100">
						<br/><br/><br/><br/>
							<div class="row justify-content-md-center h-100 pt-5 ">
								
								<div class="card-wrapper">
									<div class="card fat custom-card-margin">
										<div class="card-body p-5">
											<center>
											<i class="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
											</center>
										
											<center><h3 class="card-title pt-1">Login</h3></center>
											<form method="POST">

												<div class="form-group">
													<label for="email">Enter Email</label>

													<input id="email" type="text" class="form-control" placeholder="Email" name="email_id" value={this.state.email_id} onChange={e => this.change(e)} required autofocus />
												</div>

												<div class="form-group">
													<label for="password">Password
										
													</label>
													<input id="password" type={this.state.hidden ? "password" : "text"}
                                                class="form-control" name="password" value={this.state.password} onChange={e => this.change(e)} required/>
													<span onClick={this.toggleShow} toggle="#password-field" class="fa fa-fw fa-eye fa-1.5x field-icon toggle-password"></span>
												</div>

												
                                                
												<div class="form-group no-margin">
													<button class="btn btn-primary btn-block" onClick={e => this.onSubmit(e)} >
														Login
									</button>
												</div> <Link to='/forget' class="float-right pt-1">
											Forgot Password?
										</Link>
										<Link to ="/Register"> 
                                      <p  class="float-left">Sign up</p>
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
		);
	}
}

export default AddLogin;