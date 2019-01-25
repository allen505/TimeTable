import React, { Component } from 'react';
import { Text, Button, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

import styles from '../style'
 
export default class DateTimePickerTester extends Component {
  constructor(props){
    super(props);
}
  
  state = {
    isDateTimePickerVisible: false,
    chosenDate:'',
  };
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (date) => {
    this.setState({
      chosenDate :moment(date).format('Do MMM, dddd')
    })    
    this._hideDateTimePicker();

  };
 
  render () {
    const { componentView, dateSelector } = styles
    return (
      <View style={[dateSelector, componentView]}>
        <Button onPress={this._showDateTimePicker} title='Select date'>
        </Button><Text> {this.state.chosenDate} </Text>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        
      </View>
    );
  }
 
}