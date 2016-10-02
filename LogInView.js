import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  AsyncStorage,
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
  constructor(props) {
    super(props);
    this.state = {loggingIn: false};
  }
  _handlePress(){
      if(data && data.username && data.password){
        this.state.loggingIn = true;
        var url = 'https://viaaorr5hk.execute-api.us-east-1.amazonaws.com/dev/login' +
              '?userid=' + data.username + '&password=' + data.password + '&active=1';
        fetch(url)
        .then((response) => response.json())
          .then((responseJson) => {
          this.tryLogin(responseJson);
      }
      )
      .catch((error) => {
        console.error(error);
      });
    }
  }

  tryLogin(loginStatus){
    this.state.loggingIn = false;
    if(loginStatus == 0){
      AlertIOS.alert('No Such Username');
    }
    else if(loginStatus == 1){
      AlertIOS.alert('Password Incorrect');
    }
    else{
      try {
        AsyncStorage.setItem('username_save', data.username);
        AsyncStorage.setItem('password_save', data.password);
      } catch (error) {
        console.log(error);
      }

      /*this.props.navigator.push({
        title: "Sign Up",
        component: SomethingSomething.js
      })*/
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
            <InputField disabled={this.state.loggingIn} ref='username' placeholder='User Name'/>
            <InputField disabled={this.stateloggingIn} ref='password' placeholder='Password' />
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
