import React, { Component } from 'react'
import { BleManager } from 'react-native-ble-plx';


import { Image, Text, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Container, View } from 'native-base'
import MainHeader from '../components/MainHeader';

class HomeScreen extends Component {
  constructor (props){
    super(props)
    this.manager = new BleManager();
  }

  componentWillMount() {
    /* const subscription = this.manager.onStateChange((state) => {
      console.log('currentState')
      console.log(state)
        if (state === 'PoweredOn') {
            this.scanAndConnect();
            subscription.remove();
        }
    }, true); */
  }

  scanAndConnect = () => {
    console.log('Escaneando dispositivos')
    this.manager.startDeviceScan(null, null, (error, device) => {
      console.log('Error:')
      console.log(error)
      console.log('Device:')
      console.log(device)
        if (error) {
            // Handle error (scanning will be stopped automatically)
            return
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (device.name === "TI BLE Sensor Tag" || 
            device.name === 'SensorTag') {

        device.connect().then((device) => {
              console.log('connected')
                return device.discoverAllServicesAndCharacteristics()
            }).then((device) => {
              console.log('this is the conected device')
              console.log(device)
              // Do work on device with services and characteristics
            })
            .catch((error) => {
                console.log('ups an eerror')
                console.log(error)
            });
            // Stop scanning as it's not necessary if you are scanning for one device.
            this.manager.stopDeviceScan();

            // Proceed with connection.
        }
    });
}


  render() {
    return <Container>
      <MainHeader toggleMenu={this.props.navigation.openDrawer} />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      <Text>Vamos a verificar si el dispositivo esta conectado</Text>
      </ScrollView>
    </Container>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 5,
    width: Dimensions.get('window').width / 2.2, //Device width divided in almost a half
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSelected: {
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default HomeScreen