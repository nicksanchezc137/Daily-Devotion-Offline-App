import React, { Component } from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { Images } from "../Themes";
import Header from "../Components/Header";
import Input from "../Components/Input";
import firebase from "../Services/Firebase";
import Button from "../Components/Button";

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };
  componentDidMount() {
    try {
      // window = undefined;
    } catch (error) {}
  }
  onEmailChange = email => {
    this.setState({ email: email });
  };
  onPasswordChange = password => {
    this.setState({ password: password });
  };
 

  signInWithEmail(email, password) {
    console.log("the email and passwords are ", email.trim(), password.trim());
    if (email.trim() && password.trim()) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.trim(), password.trim())
        .then(user => {
          // let user = firebase.auth().currentUser;
          console.log("the user is " + user);
          this.props.navigation.navigate("HomeScreen", {
            isLoggedIn: true
          });
        })
        .catch(error => {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert("Invalid email or passwords");
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <Header navigation={this.props.navigation} heading={"Login"} /> */}
        <View>
           <Text style = {{fontFamily: "OpenSans",
  fontSize: 18,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#000000",
  alignSelf:'center',
  marginTop:49
  }}>Sign in</Text>
         </View>

        <Input style = {{marginTop:78}} onChangeText={this.onEmailChange} placeholder="Email" />

        <Input
          style = {{marginTop:49.5}}
          secure={true}
          onChangeText={this.onPasswordChange}
          placeholder="Password"
        />

        <Button
        style = {{marginTop:30.5}}
          onPress={() => {
            this.signInWithEmail(
              this.state.email,
              this.state.password
            );
          }}
          name="Login"
        />


        <TouchableOpacity
          style={{
            marginTop: 30,
            alignSelf:'center'
          }}
          onPress={() => {
            
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
            Forgot password
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
         style = {{
          position:'absolute',
          bottom:0,
          alignSelf:'center'
         }}
          onPress={() => {
            this.props.navigation.navigate("SignUpScreen");
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans",
  fontSize: 18,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#000000",
 
            }}
          >
           Don’t have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
