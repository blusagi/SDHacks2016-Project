import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import SignUpView from './SignUpView.js';
import Button from 'react-native-button';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
var data;
class EditAddress extends Component {
  _handlePress(){
    console.log(data);
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
          label="Personal Information">
          <Text style={styles.welcome}>
            Welcome to Pitch Perfect! BITCH
          </Text>
            <Separator label='Address'/>
            <InputField ref='Address1' placeholder='Address Line 1'/>
            <InputField ref='Address2' placeholder='Address Line 2'/>
            <InputField ref='City' placeholder='City'/>
            <InputField ref='State' placeholder='State' />
            <InputField ref='Country' placeholder='Country' />
        </Form>
        <Separator />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Save Address
        </Button>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('EditAddress', () => EditAddress);
