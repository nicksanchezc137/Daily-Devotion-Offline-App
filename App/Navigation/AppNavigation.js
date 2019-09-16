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
import BibleTrivia from "../Containers/BibleTrivia"
import ResetPassword from "../Containers/ResetPassword"

const Drawer = DrawerNavigator ({
  HomeScreen: { screen: HomeScreen },
  CommentsScreen: { screen: CommentsScreen },
 
},
{
  contentComponent: SideMenu,
  drawerWidth: 300
}
);
// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: Drawer },
  SplashScreen: { screen: SplashScreen },
  BibleTrivia:{screen:BibleTrivia},
  GuideViewScreen: { screen: GuideViewScreen },
  BookmarksScreen: { screen: BookmarksScreen },
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen:{screen:LoginScreen},
  SignUpScreen:{screen:SignUpScreen},
  ResetPassword: { screen: ResetPassword },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
