import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
} from 'reactstrap';
import Logo from './Logo';
import NavList from './../containers/NavList';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar expand="md">
                    <Logo />
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <NavList />
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;