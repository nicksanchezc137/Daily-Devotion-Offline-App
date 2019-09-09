import React, { Component } from "react";
import { ScrollView, View, Text, StatusBar } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Header from "../Components/Header";
// Styles
import styles from "./Styles/GuideViewScreenStyle";
import Fab from '../Components/Fab';
import Button from "../Components/Button";
import firebase from "../Services/Firebase";
import { ALL_DATA } from "../Services/Data";
import { Colors } from "../Themes";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "BookMark",
    iconColor:"#fff",
    iconName:'ios-bookmark',
    name: "Bookmark",
    position: 1
  },
  {
    text: "Chat",
    iconColor:"#fff",
    iconName:'ios-chatbubbles',
    name: "Chat",
    position: 2
  },
  
];

class GuideViewScreen extends Component {

  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    this.state = {
      bookmarks_array:[]
    }
  }
  componentWillMount(){
    StatusBar.setBarStyle( 'dark-content',true)
    StatusBar.setBackgroundColor(Colors.white)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("the user is " + JSON.stringify(user));
        this.setState({
          userId: user.uid,
        });
        this.fetchItems(user.userId)
      } else {
        //alert("Please login to access your bookmarks")
      }
    });
  }
  componentWillUnmount(){
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor(Colors.background)
  }
  checkFav(data) {
    firebase
      .firestore()
      .collection("favorites")
      .where("userId", "==", this.state.userId)
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
         if(doc.data().day == this.params.day){
           //has already favorited

         }else{
           //can favorite
           this.addFavorite(data)
         }
        });
      
      });
}
  addFavorite(data) {
    console.log("the data is " + JSON.stringify(data));
  
    if (this.state.userId) {
      firebase
        .firestore()
        .collection("favorites")
        .doc()
        .set(data)
        .then(doc => {
          alert("Added to Favorites");
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    } else {
      alert("You need to be logged in");
    }
  }

  onSwipeLeft(gestureState) {
   this.goToNextPage()
  }
 
  onSwipeRight(gestureState) {
    this.props.navigation.goBack();
  }
 
  onSwipe(gestureName, gestureState) {
 
  }

  goToNextPage (){
    const {day} = this.params
    this.props.navigation.push("GuideViewScreen",{
      title: ALL_DATA[day].title,
      day: ALL_DATA[day].day,
      book: ALL_DATA[day].book,
      subtitle: ALL_DATA[day].subtitle,
      content: ALL_DATA[day].content,
      insight: ALL_DATA[day].insight,
      verse: ALL_DATA[day].verse
    })
  }

  render() {
  
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
      <View
        style={styles.container}
        >
        <Header navigation = {this.props.navigation} 
        title={this.params.title} 
        showFront = {true}
          onNextPress = {()=>{
            this.goToNextPage();
          }}
        />
        <ScrollView style={styles.container}>
          <Text style={styles.subtitle}>{this.params.book}</Text>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: "#fff",
              marginTop: 20
            }}
          >
            <Text style={styles.verse}>{this.params.verse}</Text>
          </View>

          <Text style={styles.content}>{this.params.content}</Text>
          <Text style={[styles.content,{ fontWeight: "600",}]}>INSIGHT</Text>
          <Text style={[styles.content,{ fontWeight: "400",}]}>{this.params.insight}</Text>
        
        </ScrollView>
       

        <FloatingAction
    actions={actions}
    onPressItem={name => {
      //console.warn(`selected button: ${name}`);
      //alert(`selected button: ${name}`);
      if(name == "Chat"){
           this.props.navigation.navigate('CommentsScreen',{
            day:this.params.day,
            title:this.params.title,
           })
      }else{
        this.checkFav({
          userId:this.state.userId,
          day:this.params.day,
          title:this.params.title,
        })
      }
    }}
  />

        
     
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GuideViewScreen);
