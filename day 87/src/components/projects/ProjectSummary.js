import React from 'react'

const ProjectSummary = ({project}) =>{
	return(

			<div className="card z-depth-0 project-summary">
				<div className="card blue-grey darken-1 card-content white-text">
	<span className="card-title">{project.title}</span>
					<p>Posted by Trevor Saudi</p>
					<p className="grey-text">28th February, 10am</p>
				</div>
			</div>

		)
}

export default ProjectSummary 