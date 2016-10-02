import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';

import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
var data;
class EditUser extends Component {
  _handlePress(){

    var url = 'https://wimmehea19.execute-api.us-east-1.amazonaws.com/dev/processsignup' +
          '?userid=' + data.username + '&firstname=' + data.first_name + '&lastname=' + data.last_name +
          '&gender=' + (data.gender == 'Male' ? 0 : 1) + '&password=' + data.password1 + '&active=1';
    console.log(url);
    fetch(url)
    .then((response) => response.json())
      .then((responseJson) => {
      console.log(responseJson);
  }
  )
  .catch((error) => {
    console.error(error);
  });
  }
  handleFormChange(formData){
    data = formData;
  }
  componentWillMount () {
    var url = 'https://wimmehea19.execute-api.us-east-1.amazonaws.com/dev/getaccount/' + this.props.username;
    fetch(url)
    .then((response) => response.json())
      .then((responseJson) => {
      this.state.userData = responseJson;
    }
    )
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    //if()
    return (
      <View style={styles.container}>

      <Form
        ref='registrationForm'
        //onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information"
        style={styles.field}>
        <Text style={styles.welcome}>
          Sign Up
        </Text>
          <InputField disabled='true' value='User Name'/>
          <InputField disabled='true' value='First Name'/>
          <InputField disabled='true'  value='Last Name'/>
          <InputField disabled='true' value=''/>
      </Form>
        <Separator />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Save Info!
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

module.exports = EditUser;
