import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text ,TextInput} from 'react-native'
import styles from './Styles/InputStyles'

export default class Insight extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      
        <TextInput
                textAlign={'left'}
                style = {styles.input}
                underlineColorAndroid="#000"
                placeholderTextColor="#000"
                placeholder={this.props.placeholder}
                secureTextEntry={this.props.secure}
                style={[{
                  marginLeft:20,
                  marginRight:21,
//width: this.props.width?this.props.width: 260,
                  fontSize: 18,
                  height: 33,
                  padding: 0,
                  color: "#000",
                 
                },this.props.style]}
                keyboardType = {this.props.inputType}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
              />
     
    )
  }
}
