import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase' //connecting to a firestore collection
import { compose } from 'redux'

class Dashboard extends Component{
	
	render(){
		// console.log(this.props)
		const {projects} =this.props

		return(

			<div className  = "dashboard container ">
				<div className = "row">
					<div className="col s12 m6">
					<ProjectList projects={projects} />
					</div> 
					<div className="col s12 m5 offset-m1">
						<Notifications/>
						</div>
					
				</div>

			</div>

			)
	}
}

const mapStateToProps = (state) =>{
	console.log(state)
	return{
		projects: state.firestore.ordered.projects //projects received here are from firestore
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'projects'}
	])
)(Dashboard)