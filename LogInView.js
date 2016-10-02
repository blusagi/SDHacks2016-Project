import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AlertIOS,
  AsyncStorage,
} from 'react-native';
import SignUpView from './SignUpView.js';
import EditUser from './EditUser.js';
import Button from 'react-native-button';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';

var data;
class LogInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false
    };
    data = {
      username: this.props.username,
      password: this.props.password,
      remember: this.props.remember
    }
  }
  componentWillMount () {

  }
  _handlePress(){
      if(data.username && data.password){
        this.state.loggingIn = true;
        var url = 'https://wimmehea19.execute-api.us-east-1.amazonaws.com/dev/login' +
              '?userid=' + data.username + '&password=' + data.password;
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
    else{
      AlertIOS.alert('Please input Username and Password');
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
        AsyncStorage.setItem('remember_login', data.remember ? 'true' : 'false');
      } catch (error) {
        console.log(error);
      }
      var url = 'https://wimmehea19.execute-api.us-east-1.amazonaws.com/dev/getaccount/' + data.username;
      fetch(url)
      .then((response) => response.json())
        .then((responseJson) => {
          this.props.navigator.push({
            title: "We're In",
            component: EditUser,
            passProps: {
              userData : responseJson
            }
          })
      }
      )
      .catch((error) => {
        console.error(error);
      });

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
            <InputField editable={!this.state.loggingIn} ref='username' placeholder='User Name' value={this.props.username}/>
            <InputField editable={!this.state.loggingIn} ref='password' secureTextEntry={true} placeholder='Password' value={this.props.password}/>
            <SwitchField label='Remember Me' ref="remember" value={this.props.remember}/>
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
