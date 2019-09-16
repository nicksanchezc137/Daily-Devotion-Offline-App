import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'
import firebase from "../Services/Firebase";

//redux actions
import {setLoggedIn,fetchSetName, setUserName,setFuid} from '../Redux/actions/userInfoAction';
class SplashScreen extends Component {
  componentWillMount(){
   this.checkIfLoggedIn()
  }
  render () {
    return (
      <ScrollView>
        <View  style={styles.container}>
          <Image 
            style = {styles.logo}
           source = {require('../Images/logo.png')}
          />
        </View>
      </ScrollView>
    )
  }
  goToHome(){
    this.props.navigation.navigate("HomeScreen"); 
  }

  checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user obj splash is ', user)
        this.props.setLoggedIn(true);
        this.props.setFuid(user.uid);
        this.props.fetchSetName(user.uid);
        this.goToHome();
      }else{
        this.goToHome();
      }
   });
  }
}



const mapStateToProps = (state) => {
  console.log('store data is ', state)
  return {
    userInfo:state.userInfo
  }
}

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
    },
    fetchSetName: (fuid) => {
      dispatch(fetchSetName(fuid))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
