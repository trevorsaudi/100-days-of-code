import React from 'react'

const ProjectDetails =(props)=> {
	const id = props.match.params.id;


	return (
		<div className ="container section project-details">
			<div className = "card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>Nostrud duis in incididunt officia anim non cillum ex labore adipisicing exercitation dolore in ullamco consectetur anim.</p>
				</div>
				<div className="card-section grey lighten-4 grey-text">
					<div>Posted by Trevor Saudi</div>
					<div>28th February, 10am</div>
				</div>

				</div>
			
		</div>
	)
}

export default ProjectDetails