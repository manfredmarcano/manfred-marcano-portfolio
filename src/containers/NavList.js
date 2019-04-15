import React, { Component } from 'react';
import { Link } from "react-router-dom";
import About from './../components/About';
import Portfolio from './../components/Portfolio';
import Experience from './../components/Experience';
import Contact from './../components/Contact';
import './../styles/NavList.scss';
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
                    <Link to={ item.url } className="nav-link">{ item.title }</Link>
                </NavItem>
            );
        });

        /* console.log('menuItems:');
        console.log(menuItems); */

        return (
            <Nav className="ml-auto" navbar>
                { menuItems }
            </Nav>
        );
    }
}

export default NavList;