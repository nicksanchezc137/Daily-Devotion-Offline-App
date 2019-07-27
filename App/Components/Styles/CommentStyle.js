import { StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
   width:width-40,
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    borderColor: "#ddd",

  },
  vote_section:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  text:{
    fontFamily: "OpenSans",
    fontSize: 15,
    fontWeight: "100",
    fontStyle: "normal",
    letterSpacing: 1.4,
    width:width-60,
    textAlign: "left",
    color: "#000",

  },
  num:{
    fontFamily: "OpenSans",
    fontSize: 15,
    fontWeight: "100",
    fontStyle: "normal",
    letterSpacing: 1.4,
    textAlign: "center",
    color: "#000",   
  }
})
