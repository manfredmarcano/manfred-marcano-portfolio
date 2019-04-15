import React, { Component } from 'react';
import { 
    Route, 
    Switch 
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import My404Component from './My404Component';

class Content extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/experience" component={Experience} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={My404Component} />
            </Switch>
        );
    }
}

export default Content;