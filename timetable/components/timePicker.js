import React, { Component } from 'react';
import { Text, Button, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import styles from '../style'
 
export default class DateTimePickerTester extends Component {
  state = {
    isDateTimePickerVisible: false,
  };
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };
 
  render () {
    const { componentView, dateSelector } = styles
    return (
      <View style={[dateSelector, componentView]}>
        <Button onPress={this._showDateTimePicker} title='Select date'>
          {/* <Text></Text> */}
        </Button>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
 
}