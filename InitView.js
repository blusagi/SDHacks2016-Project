import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import SignUpView from './SignUpView.js';
import LogInView  from './LogInView.js';

import { Separator } from 'react-native-form-generator';

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
      <View style={styles.container}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.goToLogIn()}>
          LOG IN
        </Button>
        <Separator />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.goToCreateAccount()}>
          CREATE AN ACCOUNT
        </Button>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
});

module.exports = InitView;
