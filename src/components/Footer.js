import React from 'react';
import './Footer.scss';

// TODO: Rework iframes
// Maybe just display image/text and link to project page and repo instead
// Have a chevron next to name that rotates according to state (active or not)

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.footerSig = "function m(a,b,c){function j(a,b,c){let v=0,w=0; for(i=0;v*v +w*w<=4& i<c;i++) {z=v;v =v*v-w*w+ a;w=2*z* w+b}return i}function k(a,b,c, d,e){return a/(c-b) *(e-d)+d}for (w=0;w<b; w++){z=\"\" ;for(v=0; v<a;v++) {z+=\" .-+#\" [k(j(k (v,0,a, -1,1),k( w,0,b,-1, 1),c),0,c, 0,4)|0]} console.log(z) }}m(60, 30,40) // lucas a. (lukeathedev)";
  }

  render() {
    return (
      <div className="Footer">
        <h1>Contact Me</h1>
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
        <p className="footerSig fg1">
          {this.footerSig}
        </p>
      </div>
    );
  }
}
