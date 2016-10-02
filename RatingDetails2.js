import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import Button from 'react-native-button';


class RatingDetails2 extends Component {
  render() {
    return (
      <Image style={styles.container} source={require('./review_allen_2.jpg')}>
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: '#F5FCFF',
    width: null,
    height: null
  },
  viewStyle: {
    height: 30,
  },
});

module.exports = RatingDetails2;
