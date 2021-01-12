import React, { Component } from "react";
import {
Route,
NavLink,
HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume"



class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {/* <li><NavLink to="/resume">Resume</NavLink></li> */}
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/resume" component={Resume}/>
                </div>
            </div>
            </HashRouter>
    );
  }
}
 
export default Main;