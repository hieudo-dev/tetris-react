import './menu.scss';
import React from 'react';
import MenuButton from '../MenuButton/menu_button';

const Menu = ({startGame}) => {
	return <div className="menu">
		<MenuButton onClick={startGame} link="#" text="Play" color="green"></MenuButton>
	</div>;
}

export default Menu;