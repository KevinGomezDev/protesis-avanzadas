import React, { Component } from 'react'
import { BleManager } from 'react-native-ble-plx';


import { Image, Text, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Container, View, Icon, Content, Button, Footer } from 'native-base'
import MainHeader from '../components/MainHeader';

class HomeScreen extends Component {
  constructor (props){
    super(props)
    this.manager = new BleManager();
  }

  static navigationOptions = {
    drawerLabel: 'Mi PA3D',
    drawerIcon: () => <Icon name='menu' style={{fontSize: 50, color: 'white'}} />,
  };

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
      <MainHeader title='Mi PA3D' toggleMenu={this.props.navigation.openDrawer} />
      <Content contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('../assets/zoom-icon.png')} style={{ width: 200, height: 200 }}/>
        <View style={styles.searchContainer}>
          <Text style={styles.searchLabel}>Buscando...</Text>
          <Button style={{backgroundColor: '#317579'}}><Icon type="FontAwesome" name='bluetooth-b' /></Button>
        </View>
      </Content>
      <Footer style={styles.footer}>
        <Image source={require('../assets/isotipo.png')} style={{ width: 50, height: 50 }}/>
      </Footer>
    </Container>
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    textAlign: 'center',
  },
  searchContainer: {
    width: '90%',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
  },
  searchLabel: {
    fontSize: 30,
    paddingLeft: 10,
  },
  footer: {
    backgroundColor: '#fff',
  }
});

export default HomeScreen