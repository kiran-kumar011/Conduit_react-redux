import React, {Component} from 'react'

class Read extends Component {
	getDate(date) {
		let newDate = date.split('T');
		var res = newDate[0].split('-').reverse().join('-')
		return res;
	}


	render() {
		console.log(this.props)
		const user = this.props.user;
		return(
			<div className='read-more-header'>
				<h1>{user.title}</h1>
				<div style={{display: 'flex', flexWrap:'wrap'}}>
					<img style={{borderRadius: '50%', marginRight:'10px', width: '40px', height:'40px'}} src={user.author.image} alt='user-image'/>
					<div>
						<p style={{color: 'white'}} onClick={()=> this.props.getName(user.author.username)}>{user.author.username}</p>
						<p style={{color: 'white'}}>{this.getDate(user.createdAt)}</p>
					</div>	
				</div>
				<span style={{color: 'white', fontSize:'12px', padding:'2px 10px', border: '1px solid white'}}>+Follow {user.author.username}</span>
				<span style={{color: 'white', fontSize:'12px', padding:'2px 10px', border: '1px solid white',}}>Favorite Article</span>
			</div>
		)
	}
}

export default Read;