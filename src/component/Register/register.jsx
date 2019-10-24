import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import './Login.css';
import axios from 'axios'

class Register extends Component {
	constructor(props)
	{
		super(props)
		this.state = {
			user_name : "",
			user_email : "",
			user_password: "",
			user_phone : ""
		}	
	}
	change = e => 
	{
	 this.setState({
		 [e.target.name] : e.target.value
	 })
	}
	
	onSubmit = e =>
	{
		e.preventDefault();
		console.log(this.state);
		this.setState({
			user_name : "",
			user_email : "",
			user_password: "",
			user_phone : ""
		})

//Api Call by Axios
		// axios.post(`${API_URL}`, this.state)
		
		// 	.then(function (response) {
				
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
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="card fat custom-card-margin">
						<div class="card-body">
							<h4 class="card-title">Register</h4>
							<form method="POST">
							 
								<div class="form-group">
									<label for="name">Name</label>
									<input id="name" type="text" class="form-control" name="user_name" value={this.state.user_name} onChange={e => this.change(e)} required autofocus />
								</div>

								<div class="form-group">
									<label for="email">E-Mail Address</label>
									<input id="email" type="email" class="form-control" name="user_email"value={this.state.user_email} onChange={e => this.change(e)} required />
								</div>

								<div class="form-group">
									<label for="mobile">Mobile Number</label>
									<input id="tel" type="tel" class="form-control" name="user_password" value={this.state.user_password} onChange={e => this.change(e)} required data-eye />
								</div>

								<div class="form-group">
									<label for="password">Password</label>
									<input id="password" type="password" class="form-control" name="user_password" value={this.state.user_password} onChange={e => this.change(e)} required data-eye />
								</div>

								

								<div class="form-group no-margin">
									<button class="btn btn-primary btn-block" onClick={e => this.onSubmit(e)}>
										Register
									</button>
								</div>
								<div class="margin-top20 text-center">
									Already have an account?
									 <Link to ='/' >Login</Link>
								</div>
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

export default Register;