import React, { Component } from "react";
import { ScrollView, View, StatusBar } from "react-native";
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
      comment_id_array: [],
      can_trigger_on_scroll: true,
      limit: 7,
      last_id: 1000000,
      comment_id: 0
    };
    this.params = this.props.navigation.state.params;
  }

  componentWillMount() {
    this.fetchItems();
    this.getCommentsCount();
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
  componentWillUnmount(){
   
  }
  onCommentChange = comment => {
    this.setState({ comment: comment });
  };
  getCommentsCount() {
    let self = this;
    firebase
      .firestore()
      .collection("comments")
      .get()
      .then(querySnapshot => {
        console.log("the item count is " + querySnapshot.size);
        self.setState({
          comment_id: querySnapshot.size
        });
      });
  }

  fetchItems() {
    this.setState({
      can_trigger_on_scroll: false
    });
    firebase
      .firestore()
      .collection("comments")
      .where("day", "==", this.params.day)
      .orderBy("id", "desc")
      .startAt(this.state.last_id - 1)
      .limit(this.state.limit)
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
        });7
        console.log("the data is  " + data);
        let last_item = snapshot.docs[snapshot.docs.length - 1];
        console.log("the last id is " + last_item.data().id);
        this.setState({
          last_id: last_item.data().id,
          can_trigger_on_scroll: true
        });
      });
  }
  checkVote(
    commentId,
    comments_array,
    comment,
    index,
    vote_value,
    comment_id_array
  ) {
    if(commentId){
      firebase
      .firestore()
      .collection("votes")
      .where("commentId", "==", commentId)
      .where("userId", "==", this.state.userId)
      .get()
      .then(snapshot => {
        var data = [];
        var data_ids = [];
        snapshot.docs.forEach(doc => {
          data.push(doc.data());
          data_ids.push(doc.id);
        });
        console.log("data-------", snapshot);
        if (data.length != 0) {
          console.log(
            "i have already up voted the vote is " + data[data.length - 1].vote
          );
          if (data[data.length - 1].vote == 1) {
            //the vote was +1
            if (vote_value == 1) {
              //has upvoted
              console.log("will reduce the vote since had voted up");
              this.appendVote(
                comments_array,
                comment,
                index,
                -1,
                comment_id_array,
                true,
                data_ids[data.length - 1],
                {
                  commentId: data[data.length - 1].commentId,
                  userId: data[data.length - 1].userId,
                  vote: 0
                }
              );
            } else {
              //has downvoted
              console.log(
                "will reduce the vote since had voted up save the vote as zero"
              );
              this.appendVote(
                comments_array,
                comment,
                index,
                -1,
                comment_id_array,
                true,
                data_ids[data.length - 1],
                {
                  commentId: data[data.length - 1].commentId,
                  userId: data[data.length - 1].userId,
                  vote: 0
                }
              );
            }
          } else if (data[data.length - 1].vote == -1) {
            //the vote was -1
            console.log("will increase the vote since had voted down");

            if (vote_value == 1) {
              //has upvoted
              this.appendVote(
                comments_array,
                comment,
                index,
                1,
                comment_id_array,
                true,
                data_ids[data.length - 1],
                {
                  commentId: data[data.length - 1].commentId,
                  userId: data[data.length - 1].userId,
                  vote: 0
                }
              );
            } else {
              //has downvoted
              this.appendVote(
                comments_array,
                comment,
                index,
                1,
                comment_id_array,
                true,
                data_ids[data.length - 1],
                {
                  commentId: data[data.length - 1].commentId,
                  userId: data[data.length - 1].userId,
                  vote: 0
                }
              );
            }
          } else {
            //the vote was 0 should
            this.appendVote(
              comments_array,
              comment,
              index,
              vote_value,
              comment_id_array,
              true,
              data_ids[data.length - 1],
              {
                commentId: data[data.length - 1].commentId,
                userId: data[data.length - 1].userId,
                vote: vote_value
              }
            );
          }
        } else {
          this.appendVote(
            comments_array,
            comment,
            index,
            vote_value,
            comment_id_array,
            false,
            data_ids[data.length - 1]
          );
          //has not upvoted
          console.log("i have not voted " + data[0].vote);
        }
      });
    }else{
      alert("This is your own comment");
    }
  }
  appendVote(
    comments_array,
    comment,
    index,
    vote_value,
    comment_id_array,
    shouldUpdate,
    vote_id,
    vote_data
  ) {
    let new_array = Object.assign([], comments_array, {
      [index]: {
        email: comment.email,
        vote: comment.vote + vote_value,
        comment: comment.comment,
        day: comment.day,
        userId: comment.userId
      }
    });
    this.setState({ comments_array: new_array });
    this.vote(
      comment.vote,
      comment_id_array[index],
      vote_value,
      shouldUpdate,
      vote_id,
      vote_data
    );
  }
  vote(vote, doc_id, vote_value, shouldUpdate, vote_id, vote_data) {
    firebase
      .firestore()
      .collection("comments")
      .doc(doc_id)
      .update({ vote: vote + vote_value });
    if (shouldUpdate) {
      this.updateVote(vote_id, vote_data);
    } else {
      this.saveVote({
        userId: this.state.userId,
        vote: vote_value,
        commentId: doc_id
      });
    }
  }

  saveVote(data) {
    firebase
      .firestore()
      .collection("votes")
      .doc()
      .set(data)
      .then(doc => {})
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  updateVote(vote_id, vote_data) {
    firebase
      .firestore()
      .collection("votes")
      .doc(vote_id)
      .update(vote_data);
  }
  renderComments() {
    console.log(this.state.comments_array);
    const { comment_id_array, comments_array, userId } = this.state;
    // if (this.state.comments.length != 0) {
    return this.state.comments_array.map((comment, index) => {
      return (
        <Comment
          key={index}
          vote={comment.vote}
          comment={comment.comment}
          onUpVote={() => {
            if (userId) {
              this.checkVote(
                comment_id_array[index],
                comments_array,
                comment,
                index,
                1,
                comment_id_array
              );
            } else {
              alert("Please login to upvote this comment");
            }

            //this.vote(comment.vote + 1, comment_id_array[index], 1);
          }}
          onDownVote={() => {
            if (userId) {
              this.checkVote(
                comment_id_array[index],
                comments_array,
                comment,
                index,
                -1,
                comment_id_array
              );
            } else {
              alert("Please login to downvote this comment");
            }
            //this.vote(comment.vote - 1, comment_id_array[index], -1);
          }}
        />
      );
    });
  }
  handleScroll = e => {
    if (this.state.can_trigger_on_scroll) {
      let paddingToBottom = 10;
      paddingToBottom += e.nativeEvent.layoutMeasurement.height;
      if (
        e.nativeEvent.contentOffset.y >=
        e.nativeEvent.contentSize.height - paddingToBottom
      ) {
        console.log("has reached the end");
        this.fetchItems();
      }
    }
  };
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
              userId: this.state.userId,
              id: this.state.comment_id
            })
          }
        />
        <ScrollView onScroll={this.handleScroll}>
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
      if (data.comment) {
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
            console.log("Error getting document:", error);
          });
      } else {
        alert("Your comment should have something");
      }
    } else {
      alert("Please login to comment");
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