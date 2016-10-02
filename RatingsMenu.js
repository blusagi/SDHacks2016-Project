import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} from 'react-native';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';
import Button from 'react-native-button';
import RatingDetails from './RatingDetails.js';
import RatingDetails2 from './RatingDetails2.js';


class RatingsMenu extends Component {
  goToRating(id){
    var ratingDetail = (id == 1 ? RatingDetails : RatingDetails2);
    this.props.navigator.push({
      title: "Details",
      component: ratingDetail
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Form style={styles.field}>

          <Separator label="Your Reviews" />
          <Text>
          {"\n"}
          </Text>
          <TouchableHighlight style= {styles.entry}  underlayColor= '#F5FCFF' onPress={() => this.goToRating(1)}>
            <Text style={styles.entryText}>

              Alan Zhu&#39;s Review
            </Text>
            </TouchableHighlight>
          <TouchableHighlight style= {styles.entry}  underlayColor= '#F5FCFF' onPress={() => this.goToRating(2)}>
            <Text style={styles.entryText}>
              Kevin Chen&#39;s Review
            </Text>
          </TouchableHighlight>

          <Separator label="Pending Reviews"/>
          <Text>
          {"\n"}
          </Text>
            <Text style={styles.entryText}>
              David Zheng&#39;s Review
            </Text>
            <Text>
            {"\n"}
            </Text>
        </Form>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    //backgroundColor: '#F5FCFF',
    width: null,
    height: null
  },
  field: {
    margin: 25,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  viewStyle: {
    height: 30,
  },
  entryText:{
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    margin: 0,
    color: '#003B31'
  },
  entry: {
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 5,
    height: 30,
  },
});

module.exports = RatingsMenu;
