import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes';

export default StyleSheet.create({
  container: {
    height: 58,
    backgroundColor: Colors.background,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexDirection:'row'
  },
  title:{
    fontFamily: "OpenSans",
    fontSize: 24,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000",
    marginLeft:42
  }
})
