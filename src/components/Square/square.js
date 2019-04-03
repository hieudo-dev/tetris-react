import React from 'react';
import './square.scss';

const Square = ({color}) => {
	return <div className={"square square-" + color}/>;
}


export default Square;