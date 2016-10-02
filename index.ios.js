import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
//import SignUpView from './SignUpView.js';
import Button from 'react-native-button';
import InitView from './InitView.js';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
var data;

/*class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        //renderScene={this.renderScene.bind(this)}
        initialRoute={{
          component: AwesomeProject,
          title: 'My Initial Scene',
        }}
        style={{flex: 1}}
      />
    );
  }
}
*/
class AwesomeProject extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: InitView,
          title:""
        }}
        style={{flex: 1}}
      />
    );
  }
}
class AwesomeProject2 extends Component {

  _handlePress(){
    /*var url = 'https://7zil7kqdg4.execute-api.us-east-1.amazonaws.com/dev/createaccount' +
              '?userid=' + data.username + '&password=' + data.password + '&active=1';
    console.log(url);
    fetch(url)
    .then((response) => response.json())
      .then((responseJson) => {
      //tryLogin(responseJson);
      console.log(responseJson);
    }
    )
    .catch((error) => {
      console.error(error);
    });*/
    //this._onForward(SignUpView);
  }
  /*
  _onForward(destination){
    this.props.navigator.push({
        component: destination
    })
  }
  */
  goToCreateAccount(){
    console.log("We should be changing views here");
    //this._onForward(SignUpView);

  }

  tryLogin(LoginInfo){

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
          onPress={()=>goToCreateAccount()}>
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

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject /*AwesomeProject*/ );
