import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: 307,
  height: 445,
  borderRadius: 28,
  backgroundColor: "#fff",
  elevation:3,
  margin:20
  },
  day:{
    fontFamily: "OpenSans",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 1.4,
    color: "#ffffff",
    marginTop:12,
    marginLeft:12
  },
  sub_container:{
   flexDirection:'column',

  },
  title:{
    width: 253,
    height: 27,
    fontFamily: "OpenSans",
    fontSize: 20,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "left",
    color: "#4d4d4d",
    marginLeft:12
  },
  subtitle:{
    marginLeft:12,
    fontFamily: "OpenSans",
    fontSize: 14,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: "left",
    color: "#4d4d4d"
  }
})
