import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../Themes";
import Header from "../Components/Header";
import Input from "../Components/Input";
import firebase from "../Services/Firebase";
import Button from "../Components/Button";
import metrics from "../Themes/Metrics";

export default class SignUpScreen extends Component {
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
  onConfirmPasswordChange = confirmPassword => {
    this.setState({ confirmPassword: confirmPassword });
  };

  signupWithEmailAndPassword(email, password, confirmPassword) {
    console.log("the email and passwords are ", email.trim(), password.trim());
    if (email.trim() && password.trim() === confirmPassword.trim()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password.trim())
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
      alert("Invalid email or passwords do not match");
    }
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <Header navigation={this.props.navigation} heading={"Sign Up"} /> */
      }
         
         <View>
           <Text style = {{fontFamily: "OpenSans",
  fontSize: 18,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#000000",
  alignSelf:'center',
  marginTop:49
  }}>Sign up</Text>
         </View>
        <Input style = {{marginTop:78}} onChangeText={this.onEmailChange} placeholder="Email" />

        <Input
           style = {{marginTop:49.5}}
          secure={true}
          onChangeText={this.onPasswordChange}
          placeholder="Password"
         
        />

        <Input
        style = {{marginTop:49.5}}
          secure={true}
          onChangeText={this.onConfirmPasswordChange}
          placeholder="Confirm Password"
        />

        <Button
        style = {{marginTop:30.5}}
          onPress={() => {
            this.signupWithEmailAndPassword(
              this.state.email,
              this.state.password,
              this.state.confirmPassword
            );
          }}
          name="Signup"
        />

        <TouchableOpacity
         style = {{
          position:'absolute',
          bottom:0,
          alignSelf:'center'
         }}
          onPress={() => {
            this.props.navigation.navigate("LoginScreen");
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
           Have an account? Sign in
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
