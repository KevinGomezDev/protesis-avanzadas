import React, {Component} from 'react'
import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import FunctionsScreen from './screens/FunctionsScreen'
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
      screen: FunctionsScreen
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
      itemStyle: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255, 0.4)',
      },
      labelStyle: {
        fontSize: 25,
        fontWeight: 'normal',
      },
    },
  })

export default App