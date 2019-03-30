import React from 'react';

class Square extends React.Component{
	constructor(props){
		super(props);
		this.state = {color: props.color};
	}

	render(){
		return <div className={"square square-" + this.state.color}/>
	}
} 

export default Square;