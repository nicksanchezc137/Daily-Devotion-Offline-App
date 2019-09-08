import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  ImageBackground,
  TouchableNativeFeedback
} from "react-native";
import styles from "./Styles/DailyButtonStyle";

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

  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.container}>
           <Text style={styles.day}>Day {this.props.day}: {this.props.subtitle}</Text>
           <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
