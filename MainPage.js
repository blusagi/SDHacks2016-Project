import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Button from 'react-native-button';
import EditInfo from './EditInfo.js';
import RatingsMenu from './RatingsMenu.js'
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
var data;
class MainPage extends Component {
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
  goToLogin() {
    this.props.navigator.pop();
  }
  goToHistory() {
    this.props.navigator.push({
      title: "History",
      component: RatingsMenu,
    })
  }
  goToSettings(){
    this.props.navigator.push({
      title: "Settings",
      component: EditInfo,
      passProps: {
        userData : this.props.userData
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.image} source={require('./Gertrude.jpg')} />
        <View style={{alignSelf : "center"}}>
          <Separator label="Your Next Meeting is With:" />
        </View>
        <Text> {'\n'} </Text>
        <Text style= {styles.welcome}>
          Gertrude Shillypeak
        </Text>
        <Text style= {styles.welcome}>
          October 8th, 2016
        </Text>
        <Text style= {styles.welcome}>
          Distance: 8 Miles
        </Text>
        <Text style= {styles.welcome}>
          Topics: Professional Pitch
        </Text>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', position: 'absolute', bottom: 0}}>
          <Button
            style={styles.field}
            styleDisabled={{color: 'red'}}
            onPress={() => this.goToLogin()}>
            Logout
          </Button>
          <Button
          style={styles.field}
            styleDisabled={{color: 'red'}}
            onPress={() => this.goToHistory()}>
            History
          </Button>
          <Button
          style={styles.field}
            styleDisabled={{color: 'red'}}
            onPress={() => this.goToSettings()}>
            Settings
          </Button>
        </View>

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
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 250,
    height: 250
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 2,
    color: '#003B31'

  },
  field: {
    margin: 25,
    marginTop: 200,
    fontSize: 20,
    color: '#003B31'

  }
});

module.exports = MainPage;
