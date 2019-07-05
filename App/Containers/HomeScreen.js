import React, { Component } from 'react'
import { ScrollView,View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';
import {ALL_DATA} from '../Services/Data';
import DailyButton from '../Components/DailyButton';


class HomeScreen extends Component {
  componentWillMount(){
    console.warn("The data is "+ JSON.stringify(ALL_DATA))
  }
  
  constructor(props){
    super(props);

    this.state = {

    }
  }
  renderDailyButton(){
     ALL_DATA.map(()=>{

     }) 
  }
  render () {
    return (
      <View style={styles.container}>
      <Header heading = 'Home'/>
       <Text>
         hello
       </Text>
      </View>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
      import Header from '../Components/Header';

