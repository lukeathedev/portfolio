import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <div className={"Card bg1 fg0 border-ac0"}>
      <h1>{props.title}</h1>
      {/* Date should be localeDateString or smth */}
      <h4>Created {new Date(props.date).toLocaleDateString()}</h4>
      <p>{props.desc}</p>
      <hr></hr>
      <p className="hideHover"><i>Hover or tap for more.</i></p>
      <div className="displayHover">
        <p>
          The repository is <a href={props.repo} target="_blank" rel="noreferrer">here</a>.
            Click the image below to open the project in a new tab.
          </p>
        <a href={props.url} target="_blank" rel="noreferrer">
          <img src={props.image} alt={props.title}></img>
        </a>
      </div>
    </div >
  );
}

export default Card;