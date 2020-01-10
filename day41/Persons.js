import React, {Component} from 'react';

class Persons extends Component{
	render(){

	const { persons } = this.props;
	const personList  = persons.map(persons =>{


		return (
				<div className="Persons" key={persons.id}>

					<div>Name: { persons.name }</div> 
					<div>Age: { persons.age } </div> 
					<div> University: { persons.university }</div> 


				</div>


			)
			})	


	return(
		<div className = "persons-list">

			{personList}

		</div>


		);


}
}

export default Persons;