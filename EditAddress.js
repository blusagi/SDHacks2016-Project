import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  AsyncStorage
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
    AsyncStorage.setItem('address1', data.address1 ? data.address1 : "");
    AsyncStorage.setItem('address2', data.address2 ? data.address2 : "");
    AsyncStorage.setItem('city', data.city ? data.city : "");
    AsyncStorage.setItem('state', data.state ? data.state : "");
    AsyncStorage.setItem('country', data.country ? data.country : "");
    this.props.navigator.pop();
  }
  handleFormChange(formData){
    data = formData;
  }
  render() {
    data = this.props.loc;
    return (
      <View style={styles.container}>
        <Form
          ref='registrationForm'
          //onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Personal Information">
          <Text style={styles.welcome}>
            Put your location here
          </Text>
            <Separator label='Address'/>
            <InputField ref='address1' placeholder='Address Line 1' value={this.props.loc.address1} defaultValue={this.props.loc.address1}/>
            <InputField ref='address2' placeholder='Address Line 2' value={this.props.loc.address2} defaultValue={this.props.loc.address3}/>
            <InputField ref='city' placeholder='City' value={this.props.loc.city} defaultValue={this.props.loc.city}/>
            <InputField ref='state' placeholder='State'  value={this.props.loc.state} defaultValue={this.props.loc.state}/>
            <InputField ref='country' placeholder='Country'  value={this.props.loc.country} defaultValue={this.props.loc.country}/>
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

module.exports = EditAddress;
