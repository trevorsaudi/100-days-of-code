import React from 'react'

const Rainbow = (WrappedComponent) => {


	const colors = ['red', 'green', 'blue', 'orange', 'yellow', 'pink']
	const randomColor = colors[Math.floor(Math.random() * 5)]
	const className = randomColor + '-text'

	return (props) =>{
		return(

				<div className ={className}>

					<WrappedComponent {...props}/>


				</div>

			)
	}


}

export default Rainbow