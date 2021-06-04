import React from 'react';
import './Header.scss';

function Header(props) {
  return (
      <div className="Header ac1">
        <div>
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