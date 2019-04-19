import React, {Component} from 'react'
import Nav from './Nav' 

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	}

	handleChange = ({target}) => {
		console.log(target.name)
		this.setState({[target.name]: target.value})
	}

	render() {
		return(
			<>
	      <Nav />
					<div className='sign-in-wrapper'>
					<h1 style={{fontSize: '40px', paddingBottom: '20px'}}>Sign in</h1>
					<p style={{color: '#5cb85c', fontWeight: '700'}}>Need an account?</p>
					<div className='signIn'>
						<div className='input'>
							<input type='text' name='email' onChange={this.handleChange} placeholder='Email'/>
						</div>
						<div className='input'>
							<input type='password' name='password' onChange={this.handleChange} placeholder='Password'/>
						</div>
						<div>
							<button style={{fontSize: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor:'#5cb85c', color: 'white', fontWeight: '500', marginTop:'15px', float: 'right'}}>Sign in</button>	
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default SignIn;