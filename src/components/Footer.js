import React from 'react';
import './Footer.scss';

// TODO: Rework iframes
// Maybe just display image/text and link to project page and repo instead
// Have a chevron next to name that rotates according to state (active or not)

export default class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <h1>Contact Me!</h1>
        <a href="https://twitter.com/lbalvarenga55" target="_blank" rel="noreferrer">@lbalvarenga55</a>
      </div>
    );
  }
}
