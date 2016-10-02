import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  AlertIOS,
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
    this.state.editable=false;
    var url = 'https://wimmehea19.execute-api.us-east-1.amazonaws.com/dev/login' +
          '?userid=' + this.props.userData.userid + '&password=' + data.password_old;
    fetch(url)
    .then((response) => response.json())
      .then((responseJson) => {
        this.state.editable = true;
      if(responseJson > 1){
        url = 'https://wimmehea19.execute-api.us-east-1.amazonaws.com/dev/createaccount' +
              '?userid=' + this.props.userData.userid + '&firstname=' + this.props.userData.firstname +
              '&lastname=' + this.props.userData.lastname + '&gender=' + this.props.userData.gender +
              '&password=' + data.password_new + '&active=1';
        fetch(url).then(function(){
          AlertIOS.alert("Password Successfully Changed!");
        });
      }
      else{
        AlertIOS.alert("incorrect old password.");
      }
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
    this.state = {
      editable: true
    }
  }

  render() {
    console.log(this.state.editable);
    return (
      <View style={styles.container}>
      <Form
        ref='registrationForm'
        //onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information"
        style={styles.field}>

        <Text style={styles.welcome}>
          Your Info
        </Text>
          <InputField editable={false} label="Username" value={this.props.userData.userid}/>
          <InputField editable={false} label="First Name" value={this.props.userData.firstname}/>
          <InputField editable={false}  label='Last Name' value={this.props.userData.lastname}/>
          <InputField editable={false} label='Gender' value={this.props.userData.gender == 0 ? 'Male' : 'Female'}/>
          <Separator label='Change Password'/>

          <InputField editable={this.state.editable} secureTextEntry={true} ref="password_old" placeholder="Old Password" />
          <InputField editable={this.state.editable} secureTextEntry={true} ref="password_new" placeholder="New Password" />

      </Form>

        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Update Password
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
