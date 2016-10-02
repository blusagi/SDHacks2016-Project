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
class LogInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggingIn: false,
      username: "",
      password: "",
      remember: false
    };
  }
  componentWillMount () {
    var self = this;
    AsyncStorage.multiGet(['username_save', 'password_save'], function(err, result){
      if(err){
        console.log(err);
      }
      else if(result){
        var user;
        var pass;
        result.map((result, i, store) => {
           // get at each store's key/value so you can work with it
           let key = store[i][0];
           let value = store[i][1];
           if(key=="username_save"){
             user = value;
           }
           else{
             pass = value;
           }
        });
        self.setState({username: user, password : pass});
        console.log(self.state.username);
      }

      AsyncStorage.getItem('remember_login', function(err, result){
        if(err){
          console.log(err);
        }
        else if(result){

          if(result=="true"){
            self.setState({username: user, password : pass, remember : true});
            self._handlePress();
          }
        }
      });
      }
    );
  }
  _handlePress(){
      if(this.state.username && this.state.password){
        this.setState({loggingIn : true});
        var url = 'https://wimmehea19.execute-api.us-east-1.amazonaws.com/dev/login' +
              '?userid=' + this.state.username + '&password=' + this.state.password + '&active=1';
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
    this.setState({loggingIn : false});
    if(loginStatus == 0){
      AlertIOS.alert('No Such Username');
    }
    else if(loginStatus == 1){
      AlertIOS.alert('Password Incorrect');
    }
    else{
      try {
        AsyncStorage.setItem('username_save', this.state.username);
        AsyncStorage.setItem('password_save', this.state.password);
        AsyncStorage.setItem('remember_login', this.state.remember ? 'true' : 'false');
      } catch (error) {
        console.log(error);
      }

      this.props.navigator.push({
        title: "We're In",
        component: EditUser,
        props: {
          username : this.state.username,
          password : this.state.password
        }
      })
    }
  }

  goToCreateAccount(){
    this.props.navigator.push({
      title: "Sign Up",
      component: SignUpView
    });
  }
  handleFormChange(formData){
    this.setState({username : formData.state});
    this.setState({password : formData.password});
    this.setState({remember : formData.remember});
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
            <InputField disabled={this.state.loggingIn} ref='username' placeholder='User Name' value={this.state.username}/>
            <InputField disabled={this.state.loggingIn} ref='password' secureTextEntry={true} placeholder='Password' value={this.state.password}/>
            <SwitchField label='Remember Me' ref="remember" value={this.state.remember}/>
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
