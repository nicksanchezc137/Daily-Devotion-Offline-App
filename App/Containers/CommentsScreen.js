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
import Comment from "../Components/Comment";
class CommentsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      comment: "",
      userId: "",
      comments_array: [],
      comment_id_array: []
    };
    this.params = this.props.navigation.state.params;
  }
  vote(vote, doc_id, vote_value) {
    firebase
      .firestore()
      .collection("comments")
      .doc(doc_id)
      .update({ vote: vote });
       this.saveVote({
         userId:this.state.userId,
         vote:vote_value,
         commentId:doc_id
       })
      
  }
  saveVote(data){
    firebase
        .firestore()
        .collection("votes")
        .doc()
        .set(data)
        .then(doc => {
         
        })
        .catch(function(error) {
          console.warn("Error getting document:", error);
        });
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
     .orderBy('vote', 'desc')
      .get()
      .then(snapshot => {
        var data = [];
        snapshot.docs.forEach(doc => {
          let id = doc.id;
          data.push(doc.data());
          this.setState({
            comment_id_array: [...this.state.comment_id_array, id]
          });
          this.setState({
            comments_array: [...this.state.comments_array, doc.data()]
          });
        });
        console.warn("the ids " + this.state.comment_id_array);
      });
  }
  renderComments() {
    console.log(this.state.comments_array);
    const { comment_id_array, comments_array } = this.state;
    // if (this.state.comments.length != 0) {
    return this.state.comments_array.map((comment, index) => {
      return (
        <Comment
          vote={comment.vote}
          comment={comment.comment}
          onUpVote={() => {
            this.vote(comment.vote + 1, comment_id_array[index], 1);
            let new_array = Object.assign([], comments_array, {
              [index]: {
                email: comment.email,
                vote: comment.vote + 1,
                comment: comment.comment,
                day: comment.day,
                userId: comment.userId
              }
            });
            this.setState({ comments_array: new_array });
          }}
          onDownVote={() => {
            this.vote(comment.vote - 1, comment_id_array[index], -1);
            let new_array = Object.assign([], comments_array, {
              [index]: {
                email: comment.email,
                vote: comment.vote - 1,
                comment: comment.comment,
                day: comment.day,
                userId: comment.userId
              }
            });
            this.setState({ comments_array: new_array });
          }}
        />
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
          value={this.state.comment}
        />
        <Button
          name="Comment"
          onPress={() =>
            this.createComment({
              email: this.state.email,
              vote: 0,
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
    const { comment_id_array, comments_array } = this.state;
    if (this.state.email) {
      firebase
        .firestore()
        .collection("comments")
        .doc()
        .set(data)
        .then(doc => {
          this.setState({
            comments_array: [...this.state.comments_array, data]
          });
          this.setState({ comment: "" });
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
