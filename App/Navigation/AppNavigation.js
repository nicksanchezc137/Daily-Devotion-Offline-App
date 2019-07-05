import { StackNavigator } from 'react-navigation'
import GuideViewScreen from '../Containers/GuideViewScreen'
import CommentsScreen from '../Containers/CommentsScreen'
import SplashScreen from '../Containers/SplashScreen'
import BookmarksScreen from '../Containers/BookmarksScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  GuideViewScreen: { screen: GuideViewScreen },
  CommentsScreen: { screen: CommentsScreen },
  SplashScreen: { screen: SplashScreen },
  BookmarksScreen: { screen: BookmarksScreen },
  HomeScreen: { screen: HomeScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
