import React, {Component} from 'react';
import './Person.css'

const Persons = ({persons , deletePerson}) =>{

const personList = persons.map(persons=>{
	return persons.age>20 ? (

				<div className="Persons" key={persons.id}>

					<div>Name: { persons.name }</div> 
					<div>Age: { persons.age } </div> 
					<div> University: { persons.university }</div> 
					<button onClick={() => {deletePerson(persons.id)}}>Delete Person</button>
{/*
	we surround a function in an anonymous function to prevent it from being called every time the component re-renders
*/}
				</div>

		) : null
}) 

	return(
		<div className = "persons-list">

			{personList}

		</div>


		);



}

export default Persons;




{/*}
in funtional components, we pass props as a parameter to the function
we do not use states, since we are primarily concerned with the UI


	const persons = this.props


	
	const personList  = persons.map(persons =>{  

		if (persons.age>20){

		return (
				<div className="Persons" key={persons.id}>

					<div>Name: { persons.name }</div> 
					<div>Age: { persons.age } </div> 
					<div> University: { persons.university }</div> 


				</div>


			)
	}
	else 
		return null
			})	
*/}
