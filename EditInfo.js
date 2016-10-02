import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage
} from 'react-native';
import EditUser  from './EditUser.js';
import EditAddress  from './EditAddress.js';
import PaymentMenu from './PaymentMenu.js';
import ScheduleEdit from './ScheduleEdit.js';
import TopicsEdit from './TopicsEdit.js';
//CHECK TO MAKE SURE ALL THESE IMPORTS ARE CORRECT
//import EditSchedule  from './EditSchedule.js';
//import EditTopics  from './EditTopics.js';
//import EditPayments from './EditPayments.js';
var data;

class EditInfo extends Component {
  goToEditUser(){
    this.props.navigator.push({
      title: "Edit User",
      component: EditUser,
      passProps: {
        userData : this.props.userData
      }
    });
  }
  goToEditAddress(){
    var propsToPass = {
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
    };
    var self = this;
    AsyncStorage.multiGet(['address1', 'address2', 'city', 'state', 'country'], function(err, result){
      if(err){
        console.log(err);
        self.props.navigator.push({
          title: "Edit Address",
          component: EditAddress
        });
      }
      else if(result){
        result.map((result, i, store) => {
           // get at each store's key/value so you can work with it
           let key = store[i][0];
           let value = store[i][1];
           if(key=="address1"){
             propsToPass.address1 = value;
           }
           else if(key=="address2"){
             propsToPass.address2 = value;
           }
           else if(key=="city"){
             propsToPass.city = value;
           }
           else if(key=="state"){
             propsToPass.state = value;
           }
           else{
             propsToPass.country = value;
           }
        });
        self.props.navigator.push({
        title: "Edit Address",
        component: EditAddress,
        passProps: {
          userData : self.props.userData,
          loc : propsToPass
        }
        });
      }
  });
}
  goToPaymentMenu(){
    this.props.navigator.push({
      title: "Payments",
      component: PaymentMenu
    });
  }
  goToScheduleEdit(){
    var propsToPass = {
      hour1: "",
      hour2: "",
      day1: "",
      day2: "",
      month1: "",
      month2: "",
      year1: "",
      year2: "",

    };
    var self = this;
    AsyncStorage.multiGet(['hour1', 'day1', 'month1', 'year1', 'hour2', 'day2', 'month2', 'year2'], function(err, result){
      if(err){
        console.log(err);
        self.props.navigator.push({
          title: "Edit Address",
          component: EditAddress
        });
      }
      else if(result){
        result.map((result, i, store) => {
           // get at each store's key/value so you can work with it
           let key = store[i][0];
           let value = store[i][1];
           if(key=="year1"){
             propsToPass.year1 = value;
           }
           else if(key=="month1"){
             propsToPass.month1 = value;
           }
           else if(key=="day1"){
             propsToPass.day1 = value;
           }
           else if(key=="hour1"){
             propsToPass.hour1 = value;
           }
           else if(key=="year2"){
             propsToPass.year2 = value;
           }
           else if(key=="month2"){
             propsToPass.month2 = value;
           }
           else if(key=="day2"){
             propsToPass.day2 = value;
           }
           else{
             propsToPass.hour2 = value;
           }

        });
        self.props.navigator.push({
        title: "Edit Schedule",
        component: ScheduleEdit,
        passProps: {
          userData : self.props.userData,
          time : propsToPass
        }
        });
      }
  });
  }
  goToTopicsEdit(){
    var propsToPass = {
      prof: false,
      social: false,
      personal: false
    };
    var self = this;
    AsyncStorage.multiGet(['prof', 'social', 'personal'], function(err, result){
      if(err){
        console.log(err);
        self.props.navigator.push({
          title: "Edit Topics",
          component: TopicsEdit
        });
      }
      else if(result){
        result.map((result, i, store) => {
           // get at each store's key/value so you can work with it
           let key = store[i][0];
           let value = store[i][1];
           if(key=="prof"){
             propsToPass.prof = (value == "true" ? true : false);
           }
           else if(key=="social"){
             propsToPass.social = (value == "true" ? true : false);
           }
           else{
             propsToPass.personal = (value == "true" ? true : false);
           }
        });
        self.props.navigator.push({
        title: "Edit Topics",
        component: TopicsEdit,
        passProps: {
          userData : self.props.userData,
          topic : propsToPass
        }
        });
      }
  });
  }
  //ADD OTHER EDIT PATHS
  render(){
    return(
      <View>
      <TouchableHighlight onPress={()=>this.goToEditUser()} underlayColor='white'>
        <Image style={styles.topImage} source={require('./Picture1.png')}></Image>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>this.goToEditAddress()} underlayColor='white'>
        <Image style={styles.imageStyle} source={require('./Picture2.png')}></Image>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>this.goToScheduleEdit()} underlayColor='white'>
        <Image style={styles.imageStyle} source={require('./Picture3.png')}></Image>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>this.goToTopicsEdit()} underlayColor='white'>
        <Image style={styles.fixTopic} source={require('./Picture4.png')}></Image>
      </TouchableHighlight>
        <TouchableHighlight onPress={()=>this.goToPaymentMenu()} underlayColor='white'>
          <Image style={styles.imageStyle} source={require('./Picture5.png')}></Image>
        </TouchableHighlight>
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
