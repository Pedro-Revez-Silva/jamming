import React from "react";
import ReactDOM from "react-dom";
import "./Track.css";

export class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAction() {
    if (this.props.isRemoval) {
      return <button className='Track-action'>+</button>;
    } else {
      return <button className='Track-action'>-</button>;
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track Name</h3>
          <p>Track Artist | track Album</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
