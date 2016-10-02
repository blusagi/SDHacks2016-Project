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
class TopicsEdit extends Component {
  _handlePress(){
    AsyncStorage.setItem('prof', data.prof ? "true" : "false");
    AsyncStorage.setItem('social', data.social ? "true" : "false");
    AsyncStorage.setItem('personal', data.personal ? "true" : "false");
    this.props.navigator.pop();
  }
  handleFormChange(formData){
    data = formData;
  }
  render() {
    data = this.props.topic;
    return (
      <View style={styles.container}>
        <Form
          ref='registrationForm'
          //onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Personal Information">
          <Text style={styles.welcome}>
            Select your topics of interest
          </Text>
            <Separator label='Address'/>
            <SwitchField label='Professional Pitch' ref='prof' value={this.props.topic.prof} defaultValue={this.props.topic.prof}/>
            <SwitchField label='Social Exercise' ref='social' value={this.props.topic.social} defaultValue={this.props.topic.social}/>
            <SwitchField label='Personal Advice' ref='personal' value={this.props.topic.personal} defaultValue={this.props.topic.personal}/>
        </Form>
        <Separator />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Save Topics
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

module.exports = TopicsEdit;
