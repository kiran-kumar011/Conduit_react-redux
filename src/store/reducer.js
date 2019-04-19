export function articles(state=[], action) {
	switch(action.type) {
		case 'ADD_HOME_PAGE':
			console.log(action.payload)
			return	action.payload
		default:
			return state;
	}
}

export function tags(state=[], action) {
	switch(action.type) {
		case 'ADD_TAGS':
			return action.payload
		default:
			return state;
	}

}

export function author(state=[], action) {
	switch(action.type) {
		case 'USER_INFO':
		console.log(action.payload)
		return action.payload;
		default :
			return state;
	}
}