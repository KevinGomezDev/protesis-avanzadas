import React, { Component } from 'react'
import { BleManager } from 'react-native-ble-plx'
import { Image, Text, StyleSheet } from 'react-native'
import { Container, View, Icon, Content, Button, Footer } from 'native-base'


import MainHeader from '../components/MainHeader'

class HomeScreen extends Component {
  constructor (props){
    super(props)
    this.state = {
      info: 'Buscar'
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

  handlePress = () => {
    this.setState({ info: 'Buscando...' })
    setTimeout(() => {
      this.setState({ info: 'Conectado'})
    }, 5000)
  }

  scanAndConnect = () => {
    console.log('Escaneando dispositivos')
    this.manager.startDeviceScan(null, null, (error, device) => {
      console.log(error)
        if (error) {
            // Handle error (scanning will be stopped automatically)
            return
        }

        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        if (device.name === "MLT-BT05") {
          console.log('conectado')
        device.connect().then((device) => {
              console.log('connected')
                return device.discoverAllServicesAndCharacteristics(device.id)
            }).then((device) => {
              device.services().then((service) => {
                console.log(service)
                device.readCharacteristicForService('0000ffe0-0000-1000-8000-00805f9b34fb', '0000ffe1-0000-1000-8000-00805f9b34fb').then((response) => {
                  /*
                    https://polidea.github.io/react-native-ble-plx/#service
                    this method is suppose to show the characteristcs of a given device 
                    bleManager.characteristicsForDevice()
                    It will return an array of characteristcs that we can use later as:
                    bleManager.writeCharacteristicWithResponseForDevice()
                    writeWithResponse(valueBase64: Base64, transactionId: TransactionId?): Promise<Characteristic>
                  */
                  console.log(response)
                  response.writeWithResponse('MSwyLDMsNCw1XG4=').then((writed) => {
                    console.log(writed)
                  })
                })
              })
              // Do work on device with services and characteristics
            })
            .catch((error) => {
                console.log('ups an eerror')
                console.log(error)
            })
            // Stop scanning as it's not necessary if you are scanning for one device.
            this.manager.stopDeviceScan()

            // Proceed with connection.
        }
    })
}


  render() {
    const { info } = this.state
    return <Container>
      <MainHeader title='Mi PA3D' toggleMenu={this.props.navigation.openDrawer} />
      <Content contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
        <Image source={require('../assets/zoom-icon.png')} style={{ width: 200, height: 200 }}/>
        <View style={styles.searchContainer}>
          <Button style={styles.button} onPress={this.handlePress}>
            <Text style={styles.searchLabel}>{info}</Text>
            <Icon type="FontAwesome" name='bluetooth-b' />
          </Button>
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
  button: {
    backgroundColor: '#317579',
    padding: 10,
    width: 230,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
  },
  searchLabel: {
    color: '#fff',
    fontSize: 30,
    paddingLeft: 10,
  },
  footer: {
    backgroundColor: '#fff',
  }
})

export default HomeScreen