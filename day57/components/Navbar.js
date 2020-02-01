import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
//withRouter is a higher order component that super charges other components
//a higher order component wraps other componenent and add functionality to the component
const Navbar = (props) =>{

	// setTimeout(() =>{
	// 	props.history.push('/about')




	// },2000)
	return(

			<nav className="nav-wrapper red darken-3">

				<div className="container">
					<a className="brand-logo"> </a>

					<ul className = "right">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>

					</ul>
				</div>
			</nav>
		)
}

export default withRouter(Navbar)
