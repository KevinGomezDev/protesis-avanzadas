import React, { Component } from 'react'
import { BleManager } from 'react-native-ble-plx'
import { Buffer } from 'buffer'

class BluetoothProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      deviceID: null,
      serviceID: '0000ffe0-0000-1000-8000-00805f9b34fb',
      characteristicID: '0000ffe1-0000-1000-8000-00805f9b34fb',
    }
    this.manager = new BleManager()
  }

  componentWillMount() {
    /* const subscription = this.manager.onStateChange((state) => {
       console.log('currentState')
       console.log(state)
         if (state === 'PoweredOn') {
             this.scanAndConnect()
             subscription.remove()
         }
     }, true) */
   }

  scanAndConnect = () => {
    console.log('Escaneando dispositivos')
    this.manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            return
        }
        if (device.name === "MLT-BT05") {
          device.connect().then((device) => {
            return device.discoverAllServicesAndCharacteristics(device.id)
          }).then((device) => {
              console.log(device)
              this.setState({ deviceID: device.id})
            })
            .catch((error) => {
                console.log('ups an eerror')
                console.log(error)
            })
            this.manager.stopDeviceScan()
        }
    })
  }

  setBluetoohValue = (value) => {
    const encodedValue = Buffer.from(value).toString('base64')
    const { deviceID, serviceID, characteristicID } = this.state
    console.log(encodedValue)
    /*this.manager.writeCharacteristicWithResponseForDevice(
      deviceID,
      serviceID,
      characteristicID,
      encodedValue
    ).then((characteristic) => {
      console.log(characteristic)
    })*/
  }

  render() {
    const { setBluetoohValue } = this
    return <React.Fragment>
      {this.props.children({ setBluetoohValue })}
    </React.Fragment>
  }
}

export default BluetoothProvider