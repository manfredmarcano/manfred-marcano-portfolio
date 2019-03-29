import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './../components/About';

class NavList extends Component {
    constructor () {
        super();
        this.state = {
            menuItems: {
                en: [
                    {
                        title: 'About me',
                        url: '/about',
                        view: About
                    },
                    {
                        title: 'Portfolio',
                        url: '/portfolio',
                        view: About
                    },
                    {
                        title: 'Experience',
                        url: '/experience',
                        view: About
                    },
                    {
                        title: 'Contact',
                        url: '/contact',
                        view: About
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
            return item;
        });

        console.log('menuItems:');
        console.log(menuItems);

        return (
        
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/experience">Experience</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavList;