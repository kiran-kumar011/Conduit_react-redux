import React, { Component } from 'react'

function Article(props) {
	console.log(props.array)
	return (
		{
			props.array.map((article, i) => {
				return (
					<div key={i} className='article'>
						<div style={{width: '250px', display: 'grid', gridTemplateColumns: 'auto auto'}}>
							<img style={{borderRadius: '50%', width: '40px'}} ng-src="https://static.productionready.io/images/smiley-cyrus.jpg" src="https://static.productionready.io/images/smiley-cyrus.jpg" alt='user-image'/>
							<div>
								<p className='username' onClick={()=> this.getAuthorName(v.author.username)}>{v.author.username}</p>
								<p>{this.getDate(v.createdAt)}</p>
							</div>		
						</div>
						<h5 style={{fontSize: '20px', padding:'10px 0'}}>{v.title}</h5>
						<p style={{fontSize: '16px',paddingBottom:'10px' }}>{v.description}</p>
						<span style={{color:'rgba(0,0,0,0.3)', fontSize:'14px'}}>Read more...</span>
						<div className='likes'>
							<i className="fas fa-heart"/>
							<span>{v.favoritesCount}</span>
						</div>
					</div>
				)
			})
		}
	)
}

export default Article;