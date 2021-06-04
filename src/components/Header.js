import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.scss';

function Header(props) {
  const location = useLocation().pathname;

  // 0 for projects, 1 for blog
  const getCurrentPage = () => {
    let path = location.replace(/\/$/g, "");
    switch (path) {
      case '/projects': return 0;
      case '/blog': return 1;
      default: return -1;
    }
  }

  let page = getCurrentPage();

  return (
    <div className="Header ac1">
      <div>
        <h3 className="fg1">
          
          
          {/* Could be better i guess */}
          {page === 0 && <span>&gt;&gt; home &lt;&lt; <Link to="/blog">blog</Link></span>}
          {page === 1 && <span><Link to="/projects"> home</Link> &gt;&gt; blog &lt;&lt;</span>}
        </h3>
        <h1>
          {props.title}
          <br></br>
          <i className="fg1">Last updated {new Date(props.date).toLocaleDateString()}.</i>
        </h1>
      </div>
      <button onClick={props.themeHandler}>{props.theme} Mode</button>
    </div>
  );
}

export default Header;