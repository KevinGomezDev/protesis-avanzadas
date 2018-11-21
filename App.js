import React, { Component } from 'react'
import { createDrawerNavigator } from 'react-navigation'

import { HomeScreen, FunctionsScreen, SettingsScreen, InfoScreen, AboutScreen } from './screens'
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
    Functions: {
      screen: FunctionsScreen
    },
    Information: {
      screen: InfoScreen
    },
    Settings: {
      screen: SettingsScreen
    }, 
    About: {
      screen: AboutScreen
    },
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