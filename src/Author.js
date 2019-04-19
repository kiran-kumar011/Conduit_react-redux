import React, {Component} from 'react'
import {connect} from 'react-redux'

class Author extends Component{
	state = {
		loading: false,
	}
	componentDidMount() {
		fetch(`https://conduit.productionready.io/api/articles?${this.props.name? 'author' + '='+ this.props.name + '&': ''}limit=10&offset=0&`).then(res => res.json()).then(data => {
			this.props.dispatch({type: 'USER_INFO', payload: data})
		})
	}

	getDate(date) {
		let newDate = date.split('T');
		return newDate[0].split('-').reverse().join('-');
	}

	render() {
		console.log(this.props.author.articles? true: false)
		return (
			<div>
				{
					(this.props.author.articles ? this.props.author.articles : []).map((v, i) => {
						return (
							<div key={i} className='author-article'>
								<div className='user-image'>
									<img src={v.author.image} />
									<span>{v.author.username}</span>
								</div>
								<div className='header-author-article'>
									<div>
										<span>my articles</span>
										<span>favorited articles</span>
									</div>
									<div key={i} className='article'>
										<div style={{width: '250px', display: 'grid', gridTemplateColumns: 'auto auto'}}>
											<img style={{borderRadius: '50%', width: '40px'}} src={v.author.image} alt='user-image'/>
											<div>
												<p className='username'>{v.author.username}</p>
												<p>{this.getDate(v.createdAt)}</p>
											</div>		
										</div>
										<h5 style={{fontSize: '20px', padding:'10px 0'}}>{v.title}</h5>
										<p style={{color: 'rgba(0,0,0,0.3)', fontSize: '16px',paddingBottom:'10px' }}>{v.description}</p>
										<span onClick={() => this.readMoreData(v)} style={{cursor:'pointer',color:'rgba(0,0,0,0.3)', fontSize:'12px'}}>Read more...</span>
										<div className='likes'>
											<i className="fas fa-heart"/>
											<span>{v.favoritesCount}</span>
										</div>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
}

function mapStateProps(state) {
	return ({
		author: state.author
	})
}

export default connect(mapStateProps)(Author)



