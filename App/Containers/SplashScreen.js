import React, { Component } from 'react'
import { ScrollView, View, KeyboardAvoidingView, Image } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SplashScreenStyle'
import firebase from "../Services/Firebase";
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
  goToHome(user){
    if(user){
      this.props.navigation.navigate("HomeScreen",{
        isLoggedIn:true,
        user:user
      });
    }else{
      this.props.navigation.navigate("HomeScreen",{
        isLoggedIn:false,
      });
    }
    
  }
  checkIfLoggedIn(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user logged')
        this.goToHome(user);
      }else{
        this.goToHome(null);
      }
   });
  }
}



const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
