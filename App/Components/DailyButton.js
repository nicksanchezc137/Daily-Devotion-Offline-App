import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text,ImageBackground,TouchableNativeFeedback } from 'react-native'
import styles from './Styles/DailyButtonStyle'

export default class DailyButton extends Component {
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
      <TouchableNativeFeedback 
       onPress = {this.props.onPress}
      >      
      <View style={styles.container}>
      <ImageBackground 
      imageStyle={{borderTopLeftRadius: 5,
         borderTopRightRadius:5}}
      source={this.props.source} style={{ width: 307,height: 275.9}}>
      <Text style = {styles.day}>Day {this.props.day}</Text>
  </ImageBackground>
     <View style = {styles.sub_container}>
       <Text style = {styles.title}>
            {this.props.title}
       </Text>
       <Text style = {styles.subtitle}>
            {this.props.subtitle}
       </Text>
       </View>
      </View>
      </TouchableNativeFeedback>

    )
  }
}
