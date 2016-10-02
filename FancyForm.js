import React, { Component } from 'react';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';

export class MyCoolComponent extends React.Component{
  handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
      first_name:"",
      last_name:"",
      gender: '',
      birthday: Date,
      has_accepted_conditions: bool
    }
     */

   }
   render(){
     return (
      <Form
        ref='registrationForm'
        onFocus={this.handleFormFocus.bind(this)}
        onChange={this.handleFormChange.bind(this)}
        label="Personal Information">
          <InputField ref='first_name' label='First Name' placeholder='First Name'/>
          <InputField ref='last_name' placeholder='Last Name'/>
          <PickerField ref='gender' placeholder='Gender'
            options={{
              male: 'Male',
              female: 'Female'
            }}/>
          <DatePickerField ref='birthday'
            minimumDate={new Date('1/1/1900')}
            maximumDate={new Date()} mode='date' placeholder='Birthday'/>
          <Separator label='Terms & Conditions'/>
          <LinkField label='Read terms & conditions'     onPress={this.openTermsAndConditionsURL.bind(this)}/>
          <SwitchField label='I accept Terms & Conditions' ref="has_accepted_conditions"
            helpText='Please read carefully the terms & conditions'/>
      </Form>
  );
  }
}
