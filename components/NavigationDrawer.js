import React from 'react'
import { Image } from 'react-native'
import { Icon } from 'native-base'
import { createDrawerNavigator } from 'react-navigation'

import { HomeScreen, FunctionsScreen, SettingsScreen, InfoScreen, AboutScreen } from '../screens'
import SideBar from './SideBar'

const NavigationDrawer = createDrawerNavigator({
  Home: {
    screen: props => <HomeScreen {...props} />,
    navigationOptions: () => ({
      drawerLabel: 'Mi PA3D',
      drawerIcon: () => <Icon name='menu' style={{fontSize: 50, color: 'white'}} />,
    }),
  },
  Functions: {
    screen: FunctionsScreen,
    navigationOptions: () => ({
      drawerLabel: 'Funciones',
      drawerIcon: () => (
        <Image
          source={require('../assets/sidebar-functions.png')}
          style={[{height: 50, width: 50}]}
        />
      ),
    }),
  },
  Information: {
    screen: InfoScreen,
    navigationOptions: () =>({
      drawerLabel: 'Información Prót.',
      drawerIcon: () => (
        <Image
          source={require('../assets/sidebar-info.png')}
          style={[{height: 50, width: 50}]}
        />
      ),
    }),
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: () => ({
      drawerLabel: 'Ajustes',
      drawerIcon: () => (
        <Image
          source={require('../assets/sidebar-settings.png')}
          style={[{height: 50, width: 50}]}
        />
      ),
    }),
  }, 
  About: {
    screen: AboutScreen,
    navigationOptions: () => ({
      drawerLabel: 'Acerca de',
      drawerIcon: () => (
        <Image
          source={require('../assets/sidebar-about.png')}
          style={[{height: 50, width: 50}]}
        />
      ),
    }),
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

export default NavigationDrawer