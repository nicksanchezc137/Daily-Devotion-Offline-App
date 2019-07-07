import React, { Component } from 'react'
import { ScrollView, View,Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Header from '../Components/Header';
// Styles
import styles from './Styles/GuideViewScreenStyle'


class GuideViewScreen extends Component {
  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
  }
  render () {
    return (
      
      <View style={styles.container}>
         <Header heading = {this.params.title}/>
         <ScrollView style={styles.container}>

           <Text style = {styles.subtitle}>{this.params.subtitle}</Text>

           <View style = {{
             borderRadius: 5,
             backgroundColor: "#fff",
             elevation:1,
             margin:20
           }}>
             <Text style = {styles.verse}>
               {this.params.book}
             </Text>
             <Text style = {styles.verse}>
               {this.params.verse}
             </Text>
           </View>


           <Text style = {styles.content}>
                    {this.params.content}
                    
           </Text>
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
