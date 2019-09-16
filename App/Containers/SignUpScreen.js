import React, { Component } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Images } from "../Themes";
import Header from "../Components/Header";
import Input from "../Components/Input";
import firebase from "../Services/Firebase";
import Button from "../Components/Button";
import metrics from "../Themes/Metrics";
import { connect } from "react-redux";
//redux actions
import {setLoggedIn, setUserName,setFuid} from '../Redux/actions/userInfoAction';
 class SignUpScreen extends Component {
  state = {
    email: "",
    password: "",
    name:"",
    confirmPassword: ""
  };
  componentDidMount() {
   
  }
  onNameChange = name => {
    this.setState({ name: name });
  };
  onEmailChange = email => {
    this.setState({ email: email });
  };
  onPasswordChange = password => {
    this.setState({ password: password });
  };
  onConfirmPasswordChange = confirmPassword => {
    this.setState({ confirmPassword: confirmPassword });
  };
  createUser(data){
    firebase
    .firestore()
    .collection("users")
    .doc()
    .set(data)
    .then(doc => {
      this.props.navigation.navigate("HomeScreen");
      alert("Successfully Signed Up");
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  signupWithEmailAndPassword(name,email, password, confirmPassword) {
    console.log("the email and passwords are ", email.trim(), password.trim());
    if (name.trim(),email.trim() && password.trim() === confirmPassword.trim()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(), password.trim())
        .then(user => {          // let user = firebase.auth().currentUser;
          this.props.setLoggedIn(true);
          this.props.setFuid(user.user.uid);
          data = {
            name:this.state.name,
            email:this.state.email,
            fuid:user.user.uid
          }
          this.createUser(data)
          console.log("the user is " + user);
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
        <Input style = {{marginTop:40}} onChangeText={this.onNameChange} placeholder="Username" />
        <Input style = {{marginTop:49.5}} onChangeText={this.onEmailChange} placeholder="Email" />

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
              this.state.name,
              this.state.email,
              this.state.password,
              this.state.confirmPassword
            )
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
const mapStateToProps = state => {
  console.log('user obj in login is ', state.userInfo)
  return {
    userInfo:state.userInfo
  };
};

const mapDispatchToProps = (dispatch) => {
  
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
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen);
