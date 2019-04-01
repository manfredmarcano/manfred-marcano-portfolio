import React, { Component } from 'react';
import { Link } from "react-router-dom";
import About from './../components/About';
import Portfolio from './../components/Portfolio';
import Experience from './../components/Experience';
import Contact from './../components/Contact';
import './../styles/NavList.css';
import {
    Nav,
    NavItem } from 'reactstrap';

class NavList extends Component {
    constructor () {
        super();
        this.state = {
            menuItems: {
                en: [
                    {
                        title: 'About',
                        url: '/about',
                        view: About
                    },
                    {
                        title: 'Portfolio',
                        url: '/portfolio',
                        view: Portfolio
                    },
                    {
                        title: 'Experience',
                        url: '/experience',
                        view: Experience
                    },
                    {
                        title: 'Contact',
                        url: '/contact',
                        view: Contact
                    }
                ],
                es: [
                    {
                        title: 'Sobre mí',
                        url: '',
                        view: ''
                    },
                    {
                        title: 'Portafolio',
                        url: '',
                        view: ''
                    },
                    {
                        title: 'Experiencia',
                        url: '',
                        view: ''
                    },
                    {
                        title: 'Contacto',
                        url: '',
                        view: ''
                    }
                ]
            }
        };
    }

    render () {

        const menuItems = this.state.menuItems.en.map((item) => {
            return (
                <NavItem className="nav-item-manfred">
                   {/*  <NavLink href={ item.url }>{ item.title }</NavLink> */}
                    <Link to={ item.url } className="nav-link">{ item.title }</Link>
                </NavItem>
            );
        });

        console.log('menuItems:');
        console.log(menuItems);

        return (
            <Nav className="ml-auto" navbar>
                { menuItems }
            </Nav>
        );
    }

    /* <NavItem>
        <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    </NavItem> 
    
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div> */
}

export default NavList;