import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className="Header ac1">
        <h1>Lucas' Portfolio <i className="fg1">Last updated {new Date(this.props.date).toLocaleDateString()}.</i></h1>
      </div>
    );
  }
}