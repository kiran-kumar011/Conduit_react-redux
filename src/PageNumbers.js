import React from 'react';

function createArray(articles) {
	let array =[]
	for(let i = 1; i<= Math.ceil(articles / 10); i++) {
		array.push(i)
	}
	return array;
}

function Numbers(props) {
	return (
		<div className='page-numbers'>
			{
				props.count ? (
					createArray(props.count).map((v, i)=> <button onClick={() => props.getPage(v)} key={i} className='page-button'>{v}</button>)
					)
					: 
					''
				
			}
		</div>
	)
}

export default Numbers;