import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import SignUp from './SignUp'
import Home from './Home'
import SignIn from './SignIn'
import Nav from './Nav'
import devToolsEnhancer from 'remote-redux-devtools';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
console.log(devToolsEnhancer)

class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <Router>
        <div className='mainContainer'>
          <Route exact path='/' component={Home} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    homeArticle: state.data,
    popularTags: state.tags
  }
}
export default connect(mapStateToProps)(App);























