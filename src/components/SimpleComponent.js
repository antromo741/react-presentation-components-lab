// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props) {
        super(props);

        // Initial state here...
        this.state = {
            mood: 'happy'
        };
    }

    handleClick = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
        // Probably do some work to update the state
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>;
        // Return JSX that renders into HTML
    }
} 
export default SimpleComponent;