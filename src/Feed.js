import React, {Component} from 'react'

class Feed extends Component {
	render() {
		return (
			<>
				<div className='conduit'>
					<h1>Conduit</h1>
					<p>A place to share your knowledge.</p>
				</div>
				<div className='article-tag-wrapper'>
					<div>
						<div className='bottom-bordering'>
							<span className={this.state.tags ? 'inactive-feed': 'active-feed'}>Global Feed</span>
							<span style={{paddingLeft: '20px'}} className={this.state.tags ? 'active-feed': 'inactive-feed'}>{this.state.tags? ('#' + this.state.tags): ''}</span>
						</div>
						<div className='articles'>
							{
								(articles ? articles: []).map((v, i) => {
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
							</div>
						</div>
					<div>
						<div className='popularTagsWrapper'>
							<h4 style={{paddingBottom: '10px'}}>Popular tags:</h4>
							<div className='popularTags'>
								{
									(populars ? populars : []).map((popular, i) => <button key={i} onClick={() => this.handleClick(popular)}>{popular}</button>)
								}
							</div>
						</div>
					</div>
					<Numbers getPage={this.getPageNumber} count={this.props.homeArticle.articlesCount}/>
				</div>
			</>
		)
	}
}