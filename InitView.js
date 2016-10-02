import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from 'react-native-button';
import SignUpView from './SignUpView.js';
import LogInView  from './LogInView.js';

class InitView extends Component {
  goToLogIn(){
    this.props.navigator.push({
      title: "Log in",
      component: LogInView
    });
  }
  goToCreateAccount(){
    this.props.navigator.push({
      title: "Sign up",
      component: SignUpView
    });
  }
  render() {
    return (
      <Image style={styles.container} source={require('./racial-diversity.png')}>
        <Button
          style={{fontSize: 20, color: 'white', backgroundColor: 'transparent'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.goToLogIn()}>
          LOG IN
        </Button>
        <View style={styles.viewStyle}>
        </View>
        <Button
          style={{fontSize: 20, color: 'white', backgroundColor: 'transparent'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.goToCreateAccount()}>
          CREATE AN ACCOUNT
        </Button>
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

module.exports = InitView;
