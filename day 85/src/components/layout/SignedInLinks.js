 import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {

	return (
	<ul className="right">
		<li><NavLink to='/'>New Project</NavLink></li>
		<li><NavLink to='/'>Log Out</NavLink></li>
		<li><NavLink to='/' className='btn btn-floating blue-grey lighten-1'>RP</NavLink></li>
	</ul>
		)

}
export default SignedInLinks