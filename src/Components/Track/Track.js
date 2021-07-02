import React from 'react';
import './Track.css';

export class Track extends React.Component {
    renderAction() {
      if (this.props.isRemoval === true) {
        return <button className="Track-action">-</button>
      } else {
        return <button className="Track-action">+</button>
      }
    }

    render() {
        return (
            <div className="Track">
              <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist}</p><p>{this.props.track.album}</p>
              </div>
              <button className="Track-action"></button>
            </div>
        )
    }
}