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
        <ul>
          <li>
            <a href="https://twitter.com/lbalvarenga55" target="_blank" rel="noreferrer">
              @lbalvarenga55<span className="fg1">....</span>(Twitter)
            </a>
          </li>
          <li>
            <a href="https://github.com/lukeathedev/" target="_blank" rel="noreferrer">
              @lukeathedev<span className="fg1">......</span>(GitHub)
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lucas-alvarenga-682a17201/" target="_blank" rel="noreferrer">
              Lucas Alvarenga<span className="fg1">...</span>(LinkedIn)
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
