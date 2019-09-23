import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from "./pages/login";
import MainLayout from "./pages/mainLayout";

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/" component={MainLayout} />
          </Switch>
      </Router>
  );
}

export default App;
