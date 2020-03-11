import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) =>{
	return(
		<div className="project-list section">
			{projects && projects.map(project => { //if we have projects, then map them else, dont

				return(
					 <Link to = {'/project/' + project.id} key={project.id} > 
					 
					<ProjectSummary project={project} /> 
					
					</Link> 
				)
						//the key always has to be associated with the parent element, so you move it to Link tag from the projectSummary
			})}
		</div> 
		)

}
export default ProjectList