import React, {Component} from 'react'
import Nav from './Nav'

class SignUp extends Component {
	state = {
		email: '',
		username: '',
		password: '',
	}
	handleChange = (e) => {
		console.log(e)
		this.setState({[e.target.name]: e.target.value})
	}
	render() {
		return(
			<>
	      <Nav />
				<div className='sign-in-wrapper'>
					<h1 style={{fontSize: '40px', paddingBottom: '20px'}}>Sign up</h1>
					<p style={{color: '#5cb85c', fontWeight: '700'}}>Have an account?</p>
					<div className='input'>
						<input type='text' name='username' onChange={this.handleChange} value={this.state.username} placeholder='Username'/>
					</div>
					<div className='input'>
						<input type='email' name='email' onChange={this.handleChange} value={this.state.email} placeholder='Email'/>
					</div>
					<div className='input'>
						<input type='password' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password'/>
					</div>
					<div>
						<button style={{fontSize: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor:'#5cb85c', color: 'white', fontWeight: '500', marginTop:'15px', float: 'right'}}>Sign up</button>	
					</div>
				</div>
			</>
		)
	}
}

export default SignUp;