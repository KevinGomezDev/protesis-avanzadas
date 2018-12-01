import React, { Component } from 'react'
import NavigationDrawer from './components/NavigationDrawer'
import BluetoothProvider from './components/BluetoothProvider'

class App extends Component {
  render() {
    return <BluetoothProvider>
      {({ setBluetoohValue }) => <NavigationDrawer screenProps={{ setBluetoohValue }} />}
    </BluetoothProvider>
  }
}

export default App