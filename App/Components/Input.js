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
      <View style={styles.container}>
        <TextInput
                textAlign={'left'}
                style = {styles.input}
                underlineColorAndroid="transparent"
                placeholderTextColor="#939393"
                placeholder={this.props.placeholder}
                secureTextEntry={this.props.secure}
                style={{
                  width: this.props.width?this.props.width: 260,
                  fontSize: 14,
                  height: 33,
                  padding: 0,
                  color: "#000",
                  marginLeft:-30
                  
                }}
                keyboardType = {this.props.inputType}
                onChangeText={this.props.onChangeText}
                value={this.props.value}
              />
      </View>
    )
  }
}
