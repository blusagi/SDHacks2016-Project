import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import EditUser  from './EditUser.js';
import EditAddress  from './EditAddress.js';
//CHECK TO MAKE SURE ALL THESE IMPORTS ARE CORRECT
//import EditSchedule  from './EditSchedule.js';
//import EditTopics  from './EditTopics.js';
//import EditPayments from './EditPayments.js';
var data;

class EditInfo extends Component {
  goToEditUser(){
    this.props.navigator.push({
      title: "Edit User",
      component: EditUser
    });
  }
  goToEditAddress(){
    this.props.navigator.push({
      title: "Edit Address",
      component: EditAddress
    });
  }
  //ADD OTHER EDIT PATHS
  render(){
    return(
      <View>
        <Image style={styles.topImage} source={require('./Picture1.png')} onPress={()=> this.goToEditUser()}></Image>
        <Image style={styles.imageStyle} source={require('./Picture2.png')} onPress={()=> this.goToEditAddress()}></Image>
        <Image style={styles.imageStyle} source={require('./Picture3.png')}onPress={()=> this.method()}></Image>
        <Image style={styles.fixTopic} source={require('./Picture4.png')}onPress={()=> this.method()}></Image>
        <Image style={styles.imageStyle} source={require('./Picture5.png')}onPress={()=> this.method()}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    flex: 1,
    width:400 * 0.6,
    height: 100 * 0.6,
    alignSelf: 'center',
    justifyContent:'center',
    marginBottom: 25
  },
  fixTopic: {
    flex: 1,
    width:400 * 0.54,
    height: 100 * 0.54,
    alignSelf: 'center',
    justifyContent:'center',
    marginBottom: 25,
    marginRight: 30
  },
  topImage: {
    width:400 * 0.6,
    height: 100 * 0.6,
    alignSelf: 'center',
    marginTop: 155,
    marginBottom: 30,
    //borderWidth:4,
    //borderColor:'black',
  },
})

module.exports=EditInfo;
