import React, {Component} from 'react'
import {connect} from 'react-redux'
import Numbers from './PageNumbers'
import Global from './GlobalFeed'
import Author from './Author'
import Nav from './Nav'
import Read from './Readmore'

class Home extends Component {
		state = {
		tags: '',
		page: 1,
		readState: false,
		user: null,
		author: '',
	}

	clearData = (e) => {
		console.log(e)
		this.setState({tags: '', author: '', page: 1, readState: false}, () => this.fetchData())	
	}

	fetchData() {
		fetch(`https://conduit.productionready.io/api/articles?${this.state.author? 'author='+ this.state.author + '&': ''}limit=10&offset=${this.state.page * 10}&tag=${this.state.tags? this.state.tags : ''}`).then(res => res.json()).then(data => {
				this.props.dispatch({type: 'ADD_HOME_PAGE', payload: data})
		})
	}

	getPageNumber = (number) => {
		console.log('clicked')
		this.setState({page: number}, () => this.fetchData())
	}

	getAuthorName = (name) => {
		console.log(name)
		this.setState({author: name})
	}

	readMoreData = (data) => {
		console.log(data)
		this.setState({readState: true, user: data})
	}

	render() {
		return (
			<main>
        <Nav clear={this.clearData}/>
					{
						this.state.readState ? <Read user={this.state.user}/> : (
							this.state.author? (<Author name={this.state.author}/>):(<Global read={this.readMoreData} removeName={this.removeTagName} getName={this.getAuthorName}/>)
						)
					}
				{
				// 	this.state.author ? (<Author name={this.state.author}/>): (<Global read={this.readMoreData} removeName={this.removeTagName} getName={this.getAuthorName}/>)
				}
			</main>	
		)
	}
}

function mapStateToProps(state) {
  return {
    homeArticle: state.data,
    popularTags: state.tags,
    author: state.author,
  }
}

export default connect(mapStateToProps)(Home);
