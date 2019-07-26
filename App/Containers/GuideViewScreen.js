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

class GuideViewScreen extends Component {

  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    this.state = {
      bookmarks_array:[]
    }
  }
  componentWillMount(){
  this.getBookmark();
  }
  saveBookmark(day){
    let bookmarks = []
   bookmarks = this.state.bookmarks_array.push(day);
   let data = {
      bookmark_array:bookmarks
   }

   console.warn("the data saved is "+ data)
    try{
      AsyncStorage.setItem('BOOKMARKS',JSON.stringify(data));
    }catch(error){

    }
  }
  checkIfBookmarkExists(day){
    console.warn("checking "+ day)
    if(this.state.bookmarks_array.length == 0){
      this.saveBookmark(day);
    }else{
      console.warn('looping thru ',this.state.bookmarks_array.length)

      for(let i = 0; i <= this.state.bookmarks_array.length; i ++){
        console.warn('has entered loop')
        if(day == this.state.bookmarks_array[i]){
          //the bookmark already exists
          alert("This is already bookmarked");
          // return;
        }else{
          this.saveBookmark(day);
          // return;
        }
      }
    }
    
  }
 async  getBookmark(){
    try{
    let bookmarks = await  AsyncStorage.getItem('BOOKMARKS' );
    if(bookmarks){

      let bookmark_obj = JSON.parse(bookmarks);
      this.setState({bookmarks_array: bookmark_obj.bookmark_array});
      console.warn('the bookmark array is '+ (bookmarks))
    }else{
      console.warn('no data')
    }
    }catch(error){

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
              elevation: 1,
              margin: 20
            }}
          >
            <Text style={styles.verse}>{this.params.book}</Text>
            <Text style={styles.verse}>{this.params.verse}</Text>
          </View>

          <Text style={styles.content}>{this.params.content}</Text>
        </ScrollView>
        <Fab
          style={{
            alignSelf: "flex-end",
            position:'absolute',
            justifyContent:'flex-end',
            bottom:0
          }}
          onPress={() => {
            this.checkIfBookmarkExists(this.params.day)
          }}
        />
        <Button
          onPress={() => {
           this.props.navigation.navigate("CommentsScreen",{
            title:this.params.title,
            day:this.params.day
           })
          }}
          name="Comments"
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
