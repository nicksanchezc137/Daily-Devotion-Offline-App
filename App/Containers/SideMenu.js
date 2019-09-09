
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
      <View style = {{flex:1}}>
        
        <ScrollView>

            <TouchableOpacity
              style = {{
                marginLeft:42,
                marginTop:97
              }}
             onPress = {()=>{
                 this.props.navigation.navigate('HomeScreen')
             }}
            >

            <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 24,
             fontWeight: "bold",
             fontStyle: "normal",
             letterSpacing: 0,
             color: "#000000"
         }}>
          Home
         </Text>
            </TouchableOpacity>
         

            <TouchableOpacity
            style = {{
              marginTop:30,
              marginLeft:42,
            }}
             onPress = {()=>{
                 this.props.navigation.navigate('BookmarksScreen')
             }}
            >
               
            <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 24,
             fontWeight: "bold",
             fontStyle: "normal",
             letterSpacing: 0,
             color: "#000000"
             
         }}>
          Favorite
         </Text>
            </TouchableOpacity>


            <TouchableOpacity
            style = {{
              marginTop:30,
              marginLeft:42,
            }}
             onPress = {()=>{
                 this.props.navigation.navigate('BibleTrivia')
             }}
            >
            <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 24,
             fontWeight: "bold",
             fontStyle: "normal",
             letterSpacing: 0,
             color: "#000000"
         }}>
          Discussion
         </Text>
            </TouchableOpacity>

           {!this.state.isLoggedIn?
            <TouchableOpacity
             onPress = {()=>{
                 this.props.navigation.navigate('LoginScreen')
             }}

             style = {{
              marginTop:30,
              marginLeft:42,
            }}
            >
              
            <Text style = {{
             fontFamily: "OpenSans",
             fontSize: 24,
             fontWeight: "bold",
             fontStyle: "normal",
             letterSpacing: 0,
             color: "#000000"
         }}>
          Login
         </Text>
            </TouchableOpacity>: 
            <TouchableOpacity
            style = {{
              marginTop:30,
              marginLeft:42,
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
             fontSize: 24,
             fontWeight: "bold",
             fontStyle: "normal",
             letterSpacing: 0,
             color: "#000000"
         }}>
          Logout
         </Text>
        </TouchableOpacity>}
         
        </ScrollView>
        <TouchableOpacity style = {{
          position:'absolute',
          bottom:0,
          left:47
        }}>
        <Text style = {{
           fontFamily: "OpenSans",
           fontSize: 24,
           fontWeight: "300",
           fontStyle: "normal",
           letterSpacing: 0,
           color: "#000000"
        }}>About</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;