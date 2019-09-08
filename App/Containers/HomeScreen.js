import React, { Component } from "react";
import { ScrollView, View, Text, StatusBar } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/HomeScreenStyle";
import { ALL_DATA } from "../Services/Data";
import DailyButton from "../Components/DailyButton";
import Header from "../Components/Header";
import { Colors } from "../Themes";

class HomeScreen extends Component {
  componentWillMount() {
    console.log("The data is " + JSON.stringify(ALL_DATA));
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor(Colors.background)
  }

  constructor(props) {
    super(props);
    this.params = this.props.navigation.state.params;
    this.state = {
      isLoggedIn:this.params.isLoggedIn,
      user:{}
    }
    if(this.params.isLoggedIn){
      this.setState({
        user:this.params.user
      })
    }

  }
  renderDailyButton() {
    return ALL_DATA.map((item, index) => {
     
      return (
        <DailyButton
          title={item.title}
          key={index}
          subtitle={item.book}
          source={item.image_source}
          onPress={() => {
            console.log("the verse is " + item.verse);
            this.props.navigation.navigate("GuideViewScreen", {
              title: item.title,
              day: item.day,
              book: item.book,
              content: item.content,
              insight: item.insight,
              verse: item.verse
            });
          }}
          day={item.day}
        />
      );
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header navigation = {this.props.navigation} showMenu = {true} hideBack = {true} heading="Home" />
        <ScrollView
          style={{ alignSelf: "center", flexDirection: "row" }}
          horizontal={true}>
          {this.renderDailyButton()}
        </ScrollView>
        <ScrollView
          horizontal={true}>
        </ScrollView>
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
)(HomeScreen);
