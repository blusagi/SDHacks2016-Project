import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  NavigatorIOS
} from 'react-native';
import Button from 'react-native-button';
import InitView from './InitView.js';

class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: InitView,
          title:""
        }}
        style={{flex: 1}}
      />
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject /*AwesomeProject*/ );
