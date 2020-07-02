import React, { Component } from "react";
import "./App.css";
import { Home, About, Contact, NavBar } from "./components";

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                    <NavBar />
                </div>
                <div className="main">
                    <Home />
                    <About />
                </div>
                <div className="footer">
                    <Contact />
                </div>
            </div>
        );
    }
}

export default App;
