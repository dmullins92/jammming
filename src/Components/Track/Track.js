import React from 'react';
import './Tract.css';

export class Tract extends React.Component {
    render() {
        return (
            <div className="Track">
              <div className="Track-information">
                <h3>Default</h3>
                <p></p>
              </div>
              <button className="Track-action"></button>
            </div>
        )
    }
}