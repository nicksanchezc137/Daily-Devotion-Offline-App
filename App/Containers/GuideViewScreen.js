import React, { Component } from "react";
import { ScrollView, View, Text, AsyncStorage } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import Header from "../Components/Header";
// Styles
import styles from "./Styles/GuideViewScreenStyle";
import Fab from '../Components/Fab';
import Button from "../Components/Button";
import firebase from "../Services/Firebase";


class GuideViewScreen extends Component {

  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    this.state = {
      bookmarks_array:[]
    }
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("the user is " + JSON.stringify(user));
        this.setState({
          userId: user.uid,
        });
      } else {
        //alert("Please login to access your bookmarks")
      }
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
          console.warn("Error getting document:", error);
        });
    } else {
      alert("You need to be logged in");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation = {this.props.navigation} heading={this.params.title} />
        <ScrollView style={styles.container}>
          <Text style={styles.subtitle}>{this.params.subtitle}</Text>

          <View
            style={{
              borderRadius: 5,
              backgroundColor: "#fff",
              marginTop: 20
            }}
          >
            <Text style={styles.verse}>{this.params.book}</Text>
            <Text style={styles.verse}>{this.params.verse}</Text>
          </View>

          <Text style={styles.content}>{this.params.content}</Text>
          <Button
          style = {{
            marginTop:20,
            marginBottom: 100,
          }}
          onPress={() => {
           this.props.navigation.navigate("CommentsScreen",{
            title:this.params.title,
            day:this.params.day
           })
          }}
          name="Comments"
        />
        </ScrollView>
        <Fab
          style={{
            alignSelf: "flex-end",
            position:'absolute',
            justifyContent:'flex-end',
            bottom:0
          }}
          onPress={() => {
            this.addFavorite({
              userId:this.state.userId,
              day:this.params.day,
              title:this.params.title,
            })
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
