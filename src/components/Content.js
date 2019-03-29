import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';

class Content extends Component {
    render () {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/experience" component={Experience} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default Content;