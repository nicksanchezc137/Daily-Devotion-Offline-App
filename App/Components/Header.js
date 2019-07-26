import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/HeaderStyle'
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
      <View style={styles.container}>
        <TouchableOpacity
        style = {{marginTop:10,marginLeft:20}}
         onPress = {()=>{this.props.navigation.goBack()}}
        >
        {this.props.hideBack?null: <Icon size = {19.5} color = '#343434' name = 'arrow-round-back' />}

         </TouchableOpacity>
        <Text style = {styles.title}>{this.props.heading}</Text>
      </View>
    )
  }
}
