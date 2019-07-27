import React, { Component } from "react";
import { ScrollView, TouchableOpacity,Text, View } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Header from "../Components/Header";
import firebase from "../Services/Firebase";
// Styles
import styles from "./Styles/BookmarksScreenStyle";
import { ALL_DATA } from "../Services/Data";
class BookmarksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
     favorites_array:[],
     favorites_id_array:[],
      userId: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} heading={"Favorite"} />
        <ScrollView style={styles.container}>
          {this.renderFavorites()}
        </ScrollView>
      </View>
    );
  }
  componentWillMount() {
    
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("the user is " + JSON.stringify(user));
        this.setState({
          userId: user.uid,
        });
        this.fetchItems(user.uid)
      } 
    });
  }
  renderFavorites(){
  return  this.state.favorites_array.map((favorite,index)=>{
      return(
        <TouchableOpacity 
        onPress = {()=>{
          console.warn('the position is '+favorite.day-1 )
          this.props.navigation.navigate("GuideViewScreen", {
            title: ALL_DATA[favorite.day-1].title,
            day: favorite.day,
            book: ALL_DATA[favorite.day-1].book,
            subtitle: ALL_DATA[favorite.day-1].subtitle,
            content: ALL_DATA[favorite.day-1].content,
            insight: ALL_DATA[favorite.day-1].insight,
            verse: ALL_DATA[favorite.day-1].verse
          });
        }}
        key = {index} style = {styles.fav_container}>
          <Text style = {styles.text}>{favorite.title}</Text>
        </TouchableOpacity>
      )
    })
  }

  fetchItems(userId) {
    firebase
      .firestore()
      .collection("favorites")
      .where("userId", "==", userId)
      .get()
      .then(snapshot => {
        var data = [];
        snapshot.docs.forEach(doc => {
          let id = doc.id;
          data.push(doc.data());
          this.setState({
            favorites_id_array: [...this.state.favorites_id_array, id]
          });
          this.setState({
            favorites_array: [...this.state.favorites_array, doc.data()]
          });
        });
        console.warn(JSON.stringify(data))
      });
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
)(BookmarksScreen);
