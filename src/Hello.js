import React, { Component } from 'react';
import './Hello.css';
// import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <div className="props-name">Hello { this.props.name }!</div>
        )
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <div className="name-container">
                <Greeting name="Chris" />
                <Greeting name="Cam" />
                <Greeting name="Haley" />
            </div>
        )
    }
}

  
