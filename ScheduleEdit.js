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
class ScheduleEdit extends Component {
  _handlePress(){
    AsyncStorage.setItem('year1', data.year1 ? data.year1 : "");
    AsyncStorage.setItem('month1', data.month1 ? data.month1 : "");
    AsyncStorage.setItem('day1', data.day1 ? data.day1 : "");
    AsyncStorage.setItem('hour1', data.hour1 ? data.hour1 : "");
    AsyncStorage.setItem('year2', data.year2 ? data.year2 : "");
    AsyncStorage.setItem('month2', data.month2 ? data.month2 : "");
    AsyncStorage.setItem('day2', data.day2 ? data.day2 : "");
    AsyncStorage.setItem('hour2', data.hour2 ? data.hour2 : "");
    this.props.navigator.pop();
  }
  handleFormChange(formData){
    data = formData;
  }
  render() {
    data = this.props.time;
    return (
      <View style={styles.container}>
        <Form
          ref='registrationForm'
          //onFocus={this.handleFormFocus.bind(this)}
          onChange={this.handleFormChange.bind(this)}
          label="Available Time Period">
          <Text style={styles.welcome}>
            Put your location here
          </Text>
            <Separator label='Start Time'/>
            <InputField ref='year1' placeholder='YYYY' value={this.props.time.year1} defaultValue={this.props.time.year1}/>
            <InputField ref='month1' placeholder='MM' value={this.props.time.month1} defaultValue={this.props.time.month1}/>
            <InputField ref='day1' placeholder='DD' value={this.props.time.day1} defaultValue={this.props.time.day1}/>
            <InputField ref='hour1' placeholder='HH'  value={this.props.time.hour1} defaultValue={this.props.time.hour1}/>
            <Separator label='End'/>
            <InputField ref='year2' placeholder='YYYY' value={this.props.time.year2} defaultValue={this.props.time.year2}/>
            <InputField ref='month2' placeholder='MM' value={this.props.time.month2} defaultValue={this.props.time.month2}/>
            <InputField ref='day2' placeholder='DD' value={this.props.time.day2} defaultValue={this.props.time.day2}/>
            <InputField ref='hour2' placeholder='HH'  value={this.props.time.hour2} defaultValue={this.props.time.hour2}/>
        </Form>
        <Separator />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Save Schedule
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
    marginTop: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = ScheduleEdit;
