import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Import all pages
import FrontPage from "pages/front-page";
import MemberPage from "pages/member-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Route path="/" exact component={FrontPage} />
            <Route path="/members" exact component={MemberPage} />
            <Route
              exact
              path="/members/techlead/generate-code/:key"
              component={MemberPage}
            />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
