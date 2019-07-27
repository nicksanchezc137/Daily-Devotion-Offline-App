import React, { Component,Dimensions } from "react";
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/CommentStyle";
import { Icon } from "native-base";


export default class Content extends Component {
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
      <View style={styles.container}>
        <Text style = {styles.text}>{this.props.comment}</Text>

        <View style={styles.vote_section}>
          <TouchableOpacity
           onPress = {this.props.onUpVote}
          >
             {!this.props.isDownVoted?
            <Icon name="arrow-dropup" size={30} color="#343434" />: <Icon name="arrow-dropup" size={30} color="#999" />}
          </TouchableOpacity>
   
          <Text style = {styles.num}>{this.props.vote}</Text>
          <TouchableOpacity
            onPress = {this.props.onDownVote}
          >
            {!this.props.isUpVoted?
            <Icon name="arrow-dropdown" size={30} color="#343434" />: <Icon name="arrow-dropdown" size={30} color="#999" />}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
