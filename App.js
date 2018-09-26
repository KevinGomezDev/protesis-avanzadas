import React, {Component} from 'react'
import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return <NavigatorDrawer />
  }
}

const NavigatorDrawer = createDrawerNavigator({
    Home: {
      screen: HomeScreen
    },
    Funciones: {
      screen: SettingsScreen
    },
    Información: {
      screen: SettingsScreen
    },
    Ajustes: {
      screen: SettingsScreen
    }
  },{
    contentComponent: SideBar,
    contentOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
    },
  })

export default App