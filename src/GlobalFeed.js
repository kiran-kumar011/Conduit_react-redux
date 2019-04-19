import React, {Component} from 'react'
import {connect} from 'react-redux'
import Numbers from './PageNumbers'

class Global extends Component{
		state = {
		tags: '',
		page: 1,
	}

	componentDidMount() {
		this.setState({loading: true})
		this.fetchData()
		fetch(`https://conduit.productionready.io/api/tags`).then(res => res.json()).then(data => {
			const array = data.tags.map(tag => ({name: tag, isClicked: false}))
			console.log(array)
			this.props.dispatch({type: 'ADD_TAGS', payload: array})
			this.setState({ loading: false })
		})
	}

	fetchData() {
		fetch(`https://conduit.productionready.io/api/articles?limit=10&offset=${this.state.page === 1? '0': (this.state.page * 10)}&tag=${this.state.tags? this.state.tags : ''}`).then(res => res.json()).then(data => {
				this.props.dispatch({type: 'ADD_HOME_PAGE', payload: data})
		})
		console.log('hello')
	}

	getPageNumber = (number) => {
		console.log('clicked')
		this.setState({page: number}, () => this.fetchData())
	}

	handleClick = (data) => {
		this.setState({tags: data.name},() => {
		this.fetchData()
		})
	}

	getAuthorName = (name) => {
		console.log(name)
		this.setState({author: name})
	}

	removeTagName = (e) => {
		console.log(e)
		this.setState({tags: ''}, ()=> this.fetchData())
	}

	getDate(date) {
		let newDate = date.split('T');
		var res = newDate[0].split('-').reverse().join('-')
		return res;
	}


	render() {
		const articles = this.props.homeArticle.articles;
		const populars = this.props.popularTags;
		return (
			<div>
				<div className='conduit'>
					<h1>Conduit</h1>
					<p>A place to share your knowledge.</p>
				</div>
				<div className='article-tag-wrapper'>
					<div>
						<div className='bottom-bordering'>
							<span onClick={this.removeTagName} className={this.state.tags ? 'inactive-feed': 'active-feed'}>Global Feed</span>
							<span style={{paddingLeft: '15px'}} className={this.state.tags ? 'active-feed': 'inactive-feed'}>{this.state.tags? ('#' + this.state.tags): ''}</span>
						</div>
						<div className='articles'>
							{
								(articles ? articles: []).map((v, i) => {
									return (
										<div key={i} className='article'>
											<div style={{display: 'flex', flexWrap:'wrap'}}>
												<img style={{borderRadius: '50%', marginRight:'10px', width: '40px', height:'40px'}} src={v.author.image} alt='user-image'/>
												<div>
													<p className='username' onClick={()=> this.props.getName(v.author.username)}>{v.author.username}</p>
													<p>{this.getDate(v.createdAt)}</p>
												</div>		
											</div>
											<h5 style={{fontSize: '20px', padding:'10px 0'}}>{v.title}</h5>
											<p style={{color: 'rgba(0,0,0,0.3)', fontSize: '16px',paddingBottom:'10px' }}>{v.description}</p>
											<span onClick={() => this.props.read(v)} style={{cursor:'pointer',color:'rgba(0,0,0,0.3)', fontSize:'12px'}}>Read more...</span>
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
									(populars ? populars : []).map((popular, i) => <button key={i} onClick={() => this.handleClick(popular)}>{popular.name}</button>)
								}
							</div>
						</div>
					</div>
					<Numbers getPage={this.getPageNumber} count={this.props.homeArticle.articlesCount}/>
				</div>
			</div>	
		)
	}
}

function mapStateToProps(state) {
  return {
    homeArticle: state.data,
    popularTags: state.tags
  }
}

export default connect(mapStateToProps)(Global);


