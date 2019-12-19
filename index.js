import React from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-360';
import Root from './src/Root'

import styles from './css/styles'

export default class VirtualPlanning extends React.Component {
  render() {
    return (
      <Root />
    );
  }
};

AppRegistry.registerComponent('VirtualPlanning', () => VirtualPlanning);
