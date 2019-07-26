import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/ButtonStyles'
import { Icon } from "native-base";
export default class Header extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   heading: PropTypes.string,
   
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
  
        <TouchableOpacity
        style = {styles.container}
         onPress = {this.props.onPress}
        >
          <Text style = {styles.title}>{this.props.name}</Text>
         </TouchableOpacity>
        
    )
  }
}
