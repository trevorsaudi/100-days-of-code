import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
class CreateProject extends Component{
	state = {
		title:'',
		content:''

	}
	
	handleChange = (e) => {

		this.setState({
			[e.target.id]:e.target.value

		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state)
		this.props.createProject(this.state)
	}
	render() {
	return (
		<div id="container"className="container">
		<form onSubmit={this.handleSubmit} className="white">

			<h5 className="grey-text text-darken-2">
				Create New Project
			</h5>

			<div className="input-field">
				<label htmlFor="title">Title</label>
				<input type="text" id="title" onChange={this.handleChange}/>
			</div>
			<div className="input-field"> 
				<label htmlFor="content">Project Content</label>
				<textarea id="content" className="materialize-textarea" onChange={this.handleChange}> </textarea>
			</div>

			<div className="input-field">
			<button className="btn #4dd0e1 z-depth-0" >Create</button>
			</div>		
		</form>
			
		</div>
	)
}
}
const mapDispatchToProps = (dispatch) =>{
	return{
		createProject: (project) => dispatch(createProject(project)) //here we pass the project which is stored in the state
									//call the dispatch and an action creator
	}
	
}

export default connect(null,mapDispatchToProps)(CreateProject)
//the first parameter for the connect function is mapStateToProps