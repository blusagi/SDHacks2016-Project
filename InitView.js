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
import LogInView from './LogInView.js';
import SignUpView from './SignUpView.js';

import MainPage from './MainPage.js';

import RatingsMenu from './RatingsMenu.js';

class InitView extends Component {
  goToLogIn(){
    var self = this;
    var propsToPass={
      username:"",
      password:"",
      remember:false
    };
    AsyncStorage.multiGet(['username_save', 'password_save'], function(err, result){
      if(err){
        console.log(err);
        self.props.navigator.push({
          title: "Log in",
          component: LogInView
        });
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
        propsToPass.username = user;
        propsToPass.password = pass;
      }

      AsyncStorage.getItem('remember_login', function(err, result){
        if(err){
          console.log(err);
        }
        else if(result){
          propsToPass.remember = (result=="true" ? true : false);
        }
        self.props.navigator.push({
          title: "Log in",
          component: LogInView,
          passProps: {
            username: propsToPass.username,
            password: propsToPass.password,
            remember: propsToPass.remember
          }
        });
      });
      }
    );
  }
  goToCreateAccount(){
    this.props.navigator.push({
      title: "Sign up",
      component: SignUpView
    });
  }
  render() {
    return (
      <Image style={styles.container} source={require('./welcome.jpg')}>
      <Text style={{backgroundColor: 'transparent'}}>
        {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
      </Text>
        <Button
          style={{fontSize: 20, color: '#003B31', backgroundColor: 'transparent'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this.goToLogIn()}>
          LOG IN
        </Button>
        <View style={styles.viewStyle}>
        </View>
        <Button
          style={{fontSize: 20, color: '#003B31', backgroundColor: 'transparent'}}
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
    //display:flex,
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
