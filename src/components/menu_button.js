import React from 'react';

const MenuButton = ({onClick, link, text, color}) => {
	return <div className="btn-wrap">
		<a onClick={onClick} href={link} className={"btn btn-" + color + " btn-animated"}>
			{text}
		</a>
	</div>
};

export default MenuButton;