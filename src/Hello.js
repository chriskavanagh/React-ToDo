import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <div>Hello { this.props.name }!</div>
        )
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <div>
                <Greeting name="Chris" />
                <Greeting name="Cam" />
                <Greeting name="Haley" />
            </div>
        )
    }
}

  
