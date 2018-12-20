import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Import all pages
import FrontPage from "pages/front-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route path="/" component={FrontPage} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
