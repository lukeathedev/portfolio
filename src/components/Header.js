import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header ac1">
        <div>
          {/* <h3 className="blogLink">
            <a href="#" className="fg0">Home</a> | <a href="#" className="fg1">Blog</a></h3>
          <br></br> */}
          <h1>
            Lucas' Portfolio<br></br>
            <i className="fg1">Last updated {new Date(this.props.date).toLocaleDateString()}.</i>
          </h1>
        </div>
        <button onClick={this.props.themeFunc}>{this.props.theme} Mode</button>
      </div>
    );
  }
}