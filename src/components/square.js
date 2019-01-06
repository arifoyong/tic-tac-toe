import React, { Component } from 'react';
import './square.css';

class Square extends Component {
     render() {
        return (
            <td className="square" onClick={this.props.onClick}>
                {this.props.value}
            </td>
        );
    }
}

export default Square;