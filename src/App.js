import React, { Component } from "react";
import "./App.css";
import { Home, About, Contact } from "component";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Home />
                <About />
                <Contact />
            </div>
        );
    }
}

export default App;
