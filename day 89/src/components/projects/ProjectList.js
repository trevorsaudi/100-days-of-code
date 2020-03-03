import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) =>{
	return(
		<div className="project-list section">
			{projects && projects.map(project => { //if we have projects, then map them else, dont

				return(
					<ProjectSummary project={project} key={project.id} />
				)

			})}
		</div> 
		)

}
export default ProjectList