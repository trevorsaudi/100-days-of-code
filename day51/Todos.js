import React from 'react'

const Todos = ({todos,deleteTodo}) => {//accepting the props of the todo object in app.js
	const todoList = todos.length ? (
			todos.map(todo => { //react expects a unique key for every surrounding element in map
				return(

						<div className ="collection-item" key={todo.id}>
						<span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
						</div>
					)

			})
		):(
<p className="center">You have no todo's left, yaay</p>
		)


	return ( //returning a template
	<div className =  "todos collection">

		{todoList}
	</div>
		)
}


export default Todos