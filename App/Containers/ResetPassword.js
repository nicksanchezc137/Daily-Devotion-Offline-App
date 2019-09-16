import React, { Component } from "react";
import { TouchableOpacity, View, Text, StatusBar,Alert } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// Styles
import styles from "./Styles/HomeScreenStyle";
import { ALL_DATA } from "../Services/Data";
import DailyButton from "../Components/DailyButton";
import Header from "../Components/Header";
import { Colors } from "../Themes";
import Input from "../Components/Input";
import firebase from "../Services/Firebase";
import Button from "../Components/Button";

class ResetPassword extends Component {
  componentWillMount() {
    console.log("The data is " + JSON.stringify(ALL_DATA));
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor(Colors.background)
  }

  constructor(props) {
    super(props);
    this.state = {
        email:""
    }
  }
  componentWillMount(){
    
    console.log(`user logged in is ${this.props.userInfo}`);
  }
  changePassword = (email) => {
    console.log('email', email);
    try {
        const user = firebase
          .auth()
          .sendPasswordResetEmail(email)
          .then((res) => {
            Alert.alert(
                '',
                'Kindly check your email',
                [
                  {text: '', onPress: () => console.log('Kindly check your email')},
                  {text: '', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Ok', onPress: () => { this.props.navigation.navigate('Login');}},
                ],)
            
           }).catch((error)=> {
            Alert.alert(
                '',
                'Email does not exist!!',
                [
                  {text: '', onPress: () => console.log('Ask me later pressed')},
                  {text: '', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Ok', onPress: () => {}},
                ],)
         
             
          });
      } catch (errorMsg) {
        console.log('catch....', error);
       
      }
}

handleEmail = (email)=>{this.setState({email})}
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
         <View>
           <Text style = {{fontFamily: "OpenSans",
  fontSize: 18,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#000000",
  alignSelf:'center',
  marginTop:49
  }}>Reset Password</Text>
         </View>

        <Input
          style = {{marginTop:49.5}}
          onChangeText={this.handleEmail}
          placeholder="Email"
          value = {this.state.email}
        />

        <Button
        style = {{marginTop:30.5}}
          onPress={() => {
            this.changePassword(this.state.email)
          }}
          name="Reset Password"
        />


        <TouchableOpacity
          style={{
            marginTop: 30,
            alignSelf:'center'
          }}
          onPress={() => {
            this.props.navigation.navigate("LoginScreen")
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans",
              fontSize: 18,
              fontWeight: "normal",
              fontStyle: "normal",
              letterSpacing: 0,
              color: "#000000"
            }}
          >
            Login Now
          </Text>
        </TouchableOpacity>
       
      
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo:state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
