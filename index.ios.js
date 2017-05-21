import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
// import App from './App';
import AppGlamorous from './AppGlamour';

export default class glamorous_example extends Component {
  render() {
    return (
      <AppGlamorous />
    );
  }
}

AppRegistry.registerComponent('glamorous_example', () => glamorous_example);
