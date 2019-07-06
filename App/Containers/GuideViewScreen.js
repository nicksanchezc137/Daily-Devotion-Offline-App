import React, { Component } from 'react'
import { ScrollView, View,Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Header from '../Components/Header';

// Styles
import styles from './Styles/GuideViewScreenStyle'


class GuideViewScreen extends Component {
  render () {
    return (
      
      <View style={styles.container}>
         <Header heading = 'Guide View'/>
         <ScrollView style={styles.container}>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(GuideViewScreen)
