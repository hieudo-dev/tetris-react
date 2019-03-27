import React from 'react';

const MenuButton = ({link, text}) => {
	return <div className="btn-wrap">
		<a href={link} className="btn btn-white btn-animated">
			{text}
		</a>
	</div>
};

export default MenuButton;