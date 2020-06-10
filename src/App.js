import React, { Component } from "react";
import { Header } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link "/link" About />
      </div>
    );
  }
}

export default App;
