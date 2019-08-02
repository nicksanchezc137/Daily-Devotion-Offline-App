import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  text:{
    fontFamily: "OpenSans",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 1.4,
    textAlign: "center",
    color: "#000",
    marginLeft:21,
   marginTop:10,
   marginLeft:10,
  },
  fav_container:{
    alignItems:'center',
    justifyContent:"center"
  }
})
