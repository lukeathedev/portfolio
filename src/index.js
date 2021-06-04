import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Projects from './pages/Projects';
import Blog from './pages/Blog';

// TODO: Add persistent themes across pages and history
// TODO: Have a global theme setter, instead of per-page

ReactDOM.render(
  // <React.StrictMode>
  //   <Projects />
  // </React.StrictMode>,
  // document.getElementById('root')

  <BrowserRouter>
    <Switch>
      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/">
        <Redirect to="/projects" />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
