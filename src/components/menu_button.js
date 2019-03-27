import React from 'react';

const MenuButton = ({onClick, link, text}) => {
	return <div className="btn-wrap">
		<a onClick={onClick} href={link} className="btn btn-white btn-animated">
			{text}
		</a>
	</div>
};

export default MenuButton;