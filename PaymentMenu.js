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
import PaymentEdit from './PaymentEdit.js';

class PaymentMenu extends Component {
  goToPaymentEdit(){
    this.props.navigator.push({
      title: "Payments",
      component: PaymentEdit
    });
  }
  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={()=>this.goToPaymentEdit()} underlayColor='white'>
        <Image style={styles.viewStyle} source={require('./payment.jpg')}></Image>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: '#F5FCFF',
  },
  viewStyle: {
    alignSelf: 'center',
    height: 800,
    width: 400,
  },
});

module.exports = PaymentMenu;
