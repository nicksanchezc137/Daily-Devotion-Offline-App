import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/CommentsScreenStyle";
import Input from "../Components/Input";
import firebase from "../Services/Firebase";
import Button from "../Components/Button";
import Header from "../Components/Header";
class CommentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      comment: "",
      vote: 1,
      userId: "",
      comments_array: []
    };
    this.params = this.props.navigation.state.params;
  }
  componentWillMount() {
    this.fetchItems();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("the user is " + JSON.stringify(user));
        this.setState({
          userId: user.uid,
          email: user.email
        });
      } else {
      }
    });
  }
  onCommentChange = comment => {
    this.setState({ comment: comment });
  };
  fetchItems() {
    firebase
      .firestore()
      .collection("comments")
      .where("day", "==", this.params.day)
      .get()
      .then(snapshot => {
        var data = [];
        snapshot.docs.forEach(doc => {
          data.push(doc.data());
        });
        console.warn("the data is " + JSON.stringify(data));
        this.setState({ comments_array: data });
      });
  }
  renderComments() {
    console.log(this.state.comments_array);
    // if (this.state.comments.length != 0) {
    return this.state.comments_array.map((comment, index) => {
      return (
        <View
          key={index}
          style={{
            width:300,
            height:80,
            borderRadius: 5,
            backgroundColor: "#fff",
            elevation: 1,
            margin: 20
          }}
        >
          <Text>{comment.email}</Text>
          <Text>{comment.comment}</Text>
        </View>
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          navigation={this.props.navigation}
          heading={this.params.title}
        />

        <Input
          onChangeText={this.onCommentChange}
          placeholder="Write Comment"
        />
        <Button
          name="Comment"
          onPress={() =>
            this.createComment({
              email: this.state.email,
              vote: Number(this.state.vote),
              comment: this.state.comment,
              day: Number(this.params.day),
              userId: this.state.userId
            })
          }
        />
        <ScrollView>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            {this.renderComments()}
          </View>
        </ScrollView>
      </View>
    );
  }
  createComment(data) {
    console.log("the data is " + JSON.stringify(data));
    if (this.state.email) {
      firebase
        .firestore()
        .collection("comments")
        .doc()
        .set(data)
        .then(doc => {
           this.setState({comment:""})
           this.fetchItems()
          alert("Commented submitted");
        })
        .catch(function(error) {
          console.warn("Error getting document:", error);
        });
    } else {
      alert("You need to login bro");
    }
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
)(CommentsScreen);
