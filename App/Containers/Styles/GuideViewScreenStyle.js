import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    backgroundColor:'white'
  },
  subtitle:{
    fontFamily: "OpenSans",
  fontSize: 20,
  fontWeight: "600",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#000",
  marginTop:21,
  marginLeft:21
  },
  content:{
    fontFamily: "OpenSans",
  fontSize: 18,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#000",
  marginTop:21,
  marginLeft:21
  },
  verse:{
    fontFamily: "OpenSans",
    fontSize: 16,
    fontWeight: "200",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#343434" ,
    marginLeft:21
  }
})
