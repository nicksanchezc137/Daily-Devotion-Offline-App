import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./Styles/HeaderStyle";
import { Icon } from "native-base";
import { Colors } from "../Themes";
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

  render() {
    return (
      <View style={[styles.container,{backgroundColor:this.props.hideBack || this.props.isComments?Colors.background:Colors.white}]}>
        <TouchableOpacity
          style={{ position: "absolute", left: 15, marginTop: 7 }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          {this.props.hideBack ? null : (
            <Icon size={19.5} color= {this.props.isComments?"#fff":"#343434"} name="ios-arrow-back" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", left: 15, marginTop: 7 }}
          onPress={() => {
            this.props.navigation.navigate("Drawer");
          }}
        >
           {!this.props.showMenu ? null : (
            <Icon size={19.5} style = {{color:'#fff'}} name="ios-menu" />
          )}
        </TouchableOpacity>
        {this.props.isComments?
        <Image style = {{ width: 156,
          position:'absolute',
           top:5,
          left:'20%',
          height: 49}}  source = {require('../Images/header2.png')}/>:null
      }
        {!this.props.showMenu?
        <Text style = {styles.title}>{this.props.title}</Text>:!this.props.isComments?
        <Image style = {{ width: 207,
          position:'absolute',
           top:5,
          left:'20%',
          height: 42.4}}  source = {require('../Images/logo-white.png')}/>:null
        }
       
        <TouchableOpacity
          style={{ position: "absolute", right: 15, marginTop: 7 }}
          onPress={this.props.onNextPress}
        >
          {this.props.showFront ? (
            <Icon size={19.5} color="#343434" name="ios-arrow-forward" />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  }
}
