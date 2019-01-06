import React, { Component } from 'react';
import './square.css';

class Square extends Component {
    constructor(props) {
        super(props);
        this.handlePlayer = this.handlePlayer.bind(this);
    }

    handlePlayer(value) {
        const valueIs = "valueIs" + value;
        if (value === 'X') {
            return <span className={valueIs}>{value}</span>
        } 
        
        return <span className={valueIs}>{value}</span>
    }

    render() {
        return (
            <td className="square" onClick={this.props.onClick}>
                {this.handlePlayer(this.props.value)}
            </td>
        );
    }
}

export default Square;