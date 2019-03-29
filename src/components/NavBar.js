import React from 'react';
import Logo from './Logo';
import NavList from './../containers/NavList';

/* Forma funcional, pueden recivir props */
const NavBar = () => (
    <div>
        <Logo />
        <NavList />
    </div>
);

export default NavBar;