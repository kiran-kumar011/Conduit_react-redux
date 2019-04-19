import React from 'react'
const {NavLink, Link} = require('react-router-dom');

function Navigation(props) {
	return (
		<header>
			<div className='headerWrapper'>
				<Link className='link' to='/'><h3 onClick={props.clear}>conduit</h3></Link>
				<ul className='navigationheader'>
					<li>
						<NavLink className='basic' exact activeClassName='active' to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink className='basic' activeClassName='active' to='/signIn'>Sign In</NavLink>
					</li>
					<li>
						<NavLink className='basic' activeClassName='active' to='/signUp'>Sign Up</NavLink>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Navigation; 