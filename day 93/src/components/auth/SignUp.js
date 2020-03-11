import React, {Component} from 'react'
import { Redirect } from 'react-router'
import {connect } from 'react-redux'
import {signUp} from '../../store/actions/authActions'
class SingUp extends Component{
	state = {
		email:'',
		password:'',
		firstName:  '',
		lastName:''


	}
	
	handleChange = (e) => {

		this.setState({
			[e.target.id]:e.target.value

		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.signUp(this.state) //this.state represents the new user which we pass into signup
	}
	render() {
		const { auth } = this.props
		if(auth.uid) return <Redirect to = '/' />

	return (
		<div className="container">
		<form onSubmit={this.handleSubmit} className="white">

			<h5 className="grey-text text-darken-2">
			Sign Up
			</h5>

			<div className="input-field">
				<label htmlFor="email">Email</label>
				<input type="email" id="email" onChange={this.handleChange}/>
			</div>
			<div className="input-field"> 
				<label htmlFor="password">Password</label>
				<input type="password" id="password" onChange={this.handleChange}/>
			</div>
				<div className="input-field">
				<label htmlFor="firsname">First Name</label>
				<input type="text" id="firsname" onChange={this.handleChange}/>
			</div>
				<div className="input-field">
				<label htmlFor="lastname">Last Name</label>
				<input type="text" id="lastname" onChange={this.handleChange}/>
			</div>
			<div className="input-field">
			<button className="btn #4dd0e1 lighten-1 z-depth-0" >Sign Up</button>
			</div>		
		</form>
			
		</div>
	)
}
}

const mapStateToProps = (state) =>{
	return {
		auth: state.firebase.auth
	}
}
const mapDispatchToProps = (dispatch) =>{
	return {
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUp)