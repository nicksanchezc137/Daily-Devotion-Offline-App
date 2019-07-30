import { StackNavigator,DrawerNavigator } from 'react-navigation'
import SideMenu from '../Containers/SideMenu'
import GuideViewScreen from '../Containers/GuideViewScreen'
import CommentsScreen from '../Containers/CommentsScreen'
import SplashScreen from '../Containers/SplashScreen'
import BookmarksScreen from '../Containers/BookmarksScreen'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import SignUpScreen from "../Containers/SignUpScreen"
import styles from './Styles/NavigationStyles'


const Drawer = DrawerNavigator ({
  
  HomeScreen: { screen: HomeScreen },
  GuideViewScreen: { screen: GuideViewScreen },
  BookmarksScreen: { screen: BookmarksScreen },
},
{
  contentComponent: SideMenu,
  drawerWidth: 300
}
);

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  GuideViewScreen: { screen: GuideViewScreen },
  CommentsScreen: { screen: CommentsScreen },
  SplashScreen: { screen: SplashScreen },
  BookmarksScreen: { screen: BookmarksScreen },
  HomeScreen: { screen: Drawer },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen:{screen:LoginScreen},
  SignUpScreen:{screen:SignUpScreen}
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
