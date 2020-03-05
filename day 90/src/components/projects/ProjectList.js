import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) =>{
	return(
		<div className="project-list section">
			{projects && projects.map(project => { //if we have projects, then map them else, dont

				return(
					<Link to = {'/project/' + project.id}>
					<ProjectSummary project={project} key={project.id} />
					</Link>
				)

			})}
		</div> 
		)

}
export default ProjectList