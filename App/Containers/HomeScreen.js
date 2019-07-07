import React, { Component } from 'react'
import { ScrollView,View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';
import {ALL_DATA} from '../Services/Data';
import DailyButton from '../Components/DailyButton';

import Header from '../Components/Header';

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
   return  ALL_DATA.map((item)=>{
      return(
        <DailyButton 
        title = {item.title}
        subtitle = {item.subtitle}
        source = {require('../Images/pic2.jpg')}
        onPress = {()=>{
          console.warn('the verse is '+ item.verse)
          this.props.navigation.navigate('GuideViewScreen',{
            title:item.title,
            day:item.day,
            book:item.book,
            subtitle:item.subtitle,
            content:item.content,
            insight:item.insight,
            verse:item.verse
          });
        }}
        day = {item.day}/>
      )
     }) 
  }
  render () {
    return (
      <View style={styles.container}>
      <Header heading = 'Home'/>
      <ScrollView style = {{alignSelf:'center',flex:1,flexDirection:'row'}} horizontal = {true}>
        
         {this.renderDailyButton()}
        
      </ScrollView>
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
     
