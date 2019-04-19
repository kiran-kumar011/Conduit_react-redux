import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {articles, tags, author} from './reducer'
import devToolsEnhancer from 'remote-redux-devtools';


const rootReducer = combineReducers({
	data: articles,
	tags,
	author,
})

// export const store = createStore(rootReducer, devToolsEnhancer());



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
