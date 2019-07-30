
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity, Image, Button, Platform, AsyncStorage} from 'react-native';
import {Icon} from 'native-base';
import firebase from "../Services/Firebase";
class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuid:"",
      isLoggedIn:false
    }
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("the user is " + JSON.stringify(user));
        this.setState({
          isLoggedIn : true,
        });
      } else {
        //alert("Please login to access your bookmarks")
      }
    });
  }
  

  render () {
    return (
      <View>
        <View style = {{
            backgroundColor:'#5D4037',
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
              style = {{
                alignItems:'center', justifyContent:'center', flexDirection:'row'
              }}
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

             style = {{
              alignItems:'center', justifyContent:'center', flexDirection:'row'
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
          Favorite
         </Text>
            </TouchableOpacity>

           {!this.state.isLoggedIn?
            <TouchableOpacity
             onPress = {()=>{
                 this.props.navigation.navigate('LoginScreen')
             }}

             style = {{
              alignItems:'center', justifyContent:'center', flexDirection:'row'
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
            </TouchableOpacity>: 
            <TouchableOpacity
            style = {{
              alignItems:'center', justifyContent:'center', flexDirection:'row'
            }}
             onPress = {()=>{
              firebase.auth().signOut().then(function() {
                // Sign-out successful.
                alert("Logged Out")
              }).catch(function(error) {
                // An error happened.
              }); 
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
          Logout
         </Text>
            </TouchableOpacity>}
         
        
         
        </ScrollView>
        
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;