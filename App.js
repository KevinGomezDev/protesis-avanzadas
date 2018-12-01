import React, { Component } from 'react'
import NavigationDrawer from './components/NavigationDrawer'
import BluetoothProvider from './components/BluetoothProvider'

class App extends Component {
  render() {
    return <BluetoothProvider>
      {({ manager, setBluetoohValue }) => 
        <NavigationDrawer 
          screenProps={{ manager, setBluetoohValue }} />
      }
    </BluetoothProvider>
  }
}

export default App