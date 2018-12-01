import React, { Component } from 'react'
import { Image, Text, StyleSheet } from 'react-native'
import { Container, View, Icon, Content, Button, Footer } from 'native-base'

import MainHeader from '../components/MainHeader'

class HomeScreen extends Component {
  constructor (props){
    super(props)
    this.state = {
      info: 'Buscar'
    }
  }

  componentDidMount () {
    console.log(this.props.screenProps)
    this.props.screenProps.manager.onStateChange((status) => {
      console.log(status)
    })
  }

  handlePress = () => {
    this.setState({ info: 'Buscando...' }, this.props.screenProps.setBluetoohValue('Perrito'))
    setTimeout(() => {
      this.setState({ info: 'Conectado'})
    }, 5000)
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