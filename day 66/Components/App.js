import React , {Component, Fragment} from 'react'
import {Header, Footer} from './Layouts'
import Exercises from './Exercises'
import { muscles, exercises } from '../store.js'


class App extends Component{

	state = {
		exercises,
		exercise:{}

	}

getExercisesByMuscles(){
	const initExercises = muscles.reduce((exercises, category) =>({
		...exercises,
		[category]:[]
	}), {})
console.log(muscles, initExercises)

	return Object.entries( 
		this.state.exercises.reduce((exercises, exercise) =>{
			const { muscles } = exercise

			exercises[muscles] =[...exercises[muscles], exercise]
			

			return exercises
	},initExercises)
	)  
}

handleCategorySelect = category =>{
	this.setState({
		category
	})

}

handleExerciseSelect = id =>  {
	this.setState( ({exercises}) => ({

			exercise:exercises.find(ex => ex.id == id)
	}))


	
	}

handleExerciseCreate = exercise =>{
	this.setState(({exercises}) => ({
		exercises:[ 
		...exercises,
		exercise
		]
	}))

}

handleExerciseDelete = id =>{
	this.setState(({exercises}) =>({

		exercises:exercises.filter(ex => ex.id !== id)
	}) )
}


render(){
	const exercises = this.getExercisesByMuscles(),
	{category, exercise} = this.state
	return (
	 <Fragment>

			<Header 
			muscles={muscles}
			onExerciseCreate={this.handleExerciseCreate}
			/>
			<Exercises 

			exercises = {exercises}
			category = {category}
			exercise = {exercise}
			onSelect = {this.handleExerciseSelect}
			onDelete={this.handleExerciseDelete}

			/>

			<Footer 
			category ={category}
			muscles ={muscles}
			onSelect={this.handleCategorySelect}
			/>



   </Fragment>
)
}

 }

 export default App