/**
 * Entry Point
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import AppRouter from './src/router/app.router';

class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('poc', () => App);
