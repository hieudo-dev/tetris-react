import React from 'react';
import MenuButton from './menu_button';

const Menu = ({startGame}) => {
	return <div className="menu">
		<MenuButton onClick={startGame} link="#" text="Play"></MenuButton>
		<MenuButton link="#" text="About"></MenuButton>
	</div>;
}

export default Menu;