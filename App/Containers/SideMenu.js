
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity, Image, Button, Platform, AsyncStorage} from 'react-native';




class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuid:""
    }
  }
  

  render () {
    return (
      <View>
        <View style = {{
            backgroundColor:'#43dae6',
            height:200,
            justifyContent:'center'
        }}>
         <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 20,
             fontWeight: "600",
             fontStyle: "normal",
             lineHeight: 22,
             letterSpacing: 0,
             textAlign: "center",
             color: "#ffffff"
         }}>
           Daily Devotion
         </Text>
        </View>
        <ScrollView>

            <TouchableOpacity
             onPress = {()=>{
                 this.props.navigation.navigate('HomeScreen')
             }}
            >
            <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 20,
             marginTop:21,
             fontWeight: "600",
             fontStyle: "normal",
             lineHeight: 22,
             letterSpacing: 0,
             textAlign: "center",
             color: "#777"
         }}>
          Home
         </Text>
            </TouchableOpacity>
         

            <TouchableOpacity
             onPress = {()=>{
                 this.props.navigation.navigate('BookmarksScreen')
             }}
            >
            <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 20,
             marginTop:21,
             fontWeight: "600",
             fontStyle: "normal",
             lineHeight: 22,
             letterSpacing: 0,
             textAlign: "center",
             color: "#777"
         }}>
          Bookmarks
         </Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress = {()=>{
                 this.props.navigation.navigate('LoginScreen')
             }}
            >
            <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 20,
             marginTop:21,
             fontWeight: "600",
             fontStyle: "normal",
             lineHeight: 22,
             letterSpacing: 0,
             textAlign: "center",
             color: "#777"
         }}>
          Login
         </Text>
            </TouchableOpacity>
         
        
         
        </ScrollView>
        
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;