import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import getHeaderStylesAndSetTitle from  './../services/header.service';

export default class ViewOne extends Component {

  static navigationOptions = getHeaderStylesAndSetTitle('Importer');

  render() {
    return (
      <Text>View One</Text>
    );
  }
}
