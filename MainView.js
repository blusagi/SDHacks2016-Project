import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

class MainView extends Component {
  render(){
    return(
      <TabBarIOS>
        <TabBarIOS.item={'contacts'}></TabBarIOS.item>
      </TabBarIOS>
    );
  }
}

module.exports = MainView
