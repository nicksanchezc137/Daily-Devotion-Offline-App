import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'
import metrics from '../../Themes/Metrics';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor:Colors.white,
    height:metrics.deviceHeight
  },
  logo:{
    width: 372,
    height: 76,
    
  }
})
