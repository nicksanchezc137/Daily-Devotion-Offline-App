import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1
  },
  subtitle:{
    fontFamily: "OpenSans",
  fontSize: 20,
  fontWeight: "600",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#4d4d4d",
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
  color: "#4d4d4d",
  marginTop:21,
  marginLeft:21
  },
  verse:{
    fontFamily: "OpenSans",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#4d4d4d" ,
    marginLeft:21
  }
})
