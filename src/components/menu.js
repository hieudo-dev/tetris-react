import React from 'react';
import MenuButton from './menu_button';

const Menu = ({startGame}) => {
	return <div className="menu">
		<MenuButton onClick={startGame} link="#" text="Play" color="green"></MenuButton>
		<MenuButton link="#" text="About" color="light-blue"></MenuButton>
	</div>;
}

export default Menu;