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
        <Header navigation={this.props.navigation} heading={"Login"} />

        <Input onChangeText={this.onEmailChange} placeholder="Email" />

        <Input
          secure={true}
          onChangeText={this.onPasswordChange}
          placeholder="Password"
        />

        <Button
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
            marginTop: 30
          }}
          onPress={() => {
            this.props.navigation.navigate("SignUpScreen");
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans",
              fontSize: 18,
              fontWeight: "500",
              fontStyle: "normal",
              letterSpacing: 1.4,
              textAlign: "center",
              color: "#000"
            }}
          >
            Sign up here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}