import { StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
   width:width-34,
    justifyContent:'space-between',
    flexDirection:'row',
    borderRadius: 8,
    backgroundColor: "#ffffff",
    marginTop:10,
    elevation:3

  },
  txt_container:{
  flexDirection:"column",
  marginLeft:14
  },
  name:{
    fontFamily: "OpenSans",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#a8a8a7"
  },
  vote_section:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginRight:14
  },
  text:{
    fontFamily: "OpenSans",
  fontSize: 18,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#000000",
  marginRight:43,
  flexWrap:'wrap'

  },
  num:{
    fontFamily: "OpenSans",
  fontSize: 18,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "#000000"
  }
})
