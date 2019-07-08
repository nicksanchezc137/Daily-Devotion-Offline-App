import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,TouchableOpacity } from 'react-native'
import styles from './Styles/FabStyle'
//import Icon from "react-native-vector-icons/FontAwesome5";

export default class Fab extends Component {
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
      <TouchableOpacity
       onPress = {this.props.onPress}
       style = {this.props.style}
      >
      <View style={styles.container}>
        <Text style = {{
          color:'#fff',
          fontSize:28
        }}>+</Text>
        {/* <Icon name = {this.props.name} color = '#fff' size = {24}/> */}
      </View>
      </TouchableOpacity>
    )
  }
}
