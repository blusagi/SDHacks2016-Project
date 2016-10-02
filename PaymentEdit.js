import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import Button from 'react-native-button';


class PaymentEdit extends Component {
  render() {
    return (
        <Image style={styles.container} source={require('./add_payment.jpg')}></Image>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    height: 700,
    width: 400,
    marginBottom: 200,
  },
  viewStyle: {

  },
});

module.exports = PaymentEdit;
