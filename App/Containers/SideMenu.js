
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity, Image, Button, Platform, AsyncStorage} from 'react-native';
import {Icon} from 'native-base';
import firebase from "../Services/Firebase";
import { connect } from "react-redux";
//redux actions
import {setLoggedIn, setUserName,setFuid} from '../Redux/actions/userInfoAction';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuid:"",
      isLoggedIn:false
    }
  }
  componentWillMount(){
    console.warn(`user in sidemenu is ${this.props.userInfo}`)
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
                 this.props.navigation.navigate('BibleTrivia',{day:1})
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

           {!this.props.userInfo.loggedIn?
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
              firebase.auth().signOut().then(()=> {
                this.props.setLoggedIn(false);
                this.props.setFuid("");
                this.props.setUserName("no-name")
                // Sign-out successful.
                alert("Logged Out")
              }).catch((error)=> {
                console.log(error)
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
const mapStateToProps = state => {
  console.log('user obj in sidemenu is ', state.userInfo)
  return {
    userInfo:state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedIn: (status) => {
      dispatch(setLoggedIn(status))
    },
    setUserName: (name) => {
      dispatch(setUserName(name))
    },
    setFuid: (fuid) => {
      dispatch(setFuid(fuid))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
