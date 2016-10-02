import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SignUpView from './SignUpView.js'
//import SignUpView from './SignUpView.js';
import Button from 'react-native-button';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
var data;
class LogInView extends Component {
  _handlePress(){

      var url = 'https://viaaorr5hk.execute-api.us-east-1.amazonaws.com/dev/login' +
            '?userid=' + data.username + '&password=' + data.password + '&active=1';
      fetch(url)
      .then((response) => response.json())
        .then((responseJson) => {
        tryLogin(responseJson);
    }
    )
    .catch((error) => {
      console.error(error);
    });
  }

  tryLogin(loginStatus){
    if(loginStatus == 0){
      Alert.alert
    }
  }

  goToCreateAccount(){
      this.props.navigator.push({
            title: "Sign Up",
            component: SignUpView
        });
  }
  handleFormChange(formData){
    data = formData;
  }
  render() {
    return (
      <View style={styles.container}>

        <Form
          ref='registrationForm'
          //onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Personal Information"
          style={styles.field}>
          <Text style={styles.welcome}>
            Login
          </Text>
            <InputField ref='username' placeholder='User Name'/>
            <InputField ref='password' placeholder='Password' />
            <SwitchField label='Remember Me' ref="Remember"/>
        </Form>

        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Log In
        </Button>
        <Text>

        </Text>
        <Text>

        </Text>
        <Button
          style={{fontSize: 16, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.goToCreateAccount()}>
          Create an Account
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  field: {
    margin: 25,
  }
});

module.exports = LogInView;
