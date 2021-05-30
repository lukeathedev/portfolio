import React from 'react';
import './Card.scss';

// TODO: Rework iframes
// Maybe just display image/text and link to project page and repo instead
// Have a chevron next to name that rotates according to state (active or not)

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.activeCardClass = '';
  }

  toggleMaximize(state) {
    if (state) {
      this.setState({ active: false });
      this.activeCardClass = '';
    }
    else {
      this.setState({ active: true });
      this.activeCardClass = ' card-active';
    }
  }

  render() {
    return (
      <div className={"Card bg1 fg0 border-ac0" + this.activeCardClass} onClick={() => this.toggleMaximize(this.state.active)}>
        <h1>{this.props.title}</h1>
        {/* Date should be localeDateString or smth */}
        <h3>Created {new Date(this.props.date).toLocaleDateString()}</h3>
        <p>{this.props.desc}</p>
        <hr></hr>
        <p> The repository is <a href={this.props.repo} target="_blank" rel="noreferrer">here</a>.&nbsp;
          <b>Hover over me</b> and click the image to open the project in a new tab.</p>
        <hr></hr>
        <a href={this.props.url} target="_blank" rel="noreferrer">
          <img src={this.props.image} alt={this.props.title}></img>
        </a>
      </div>
    );
  }
}