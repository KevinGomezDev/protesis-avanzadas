import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native'
import { Container, Content, H1, H3 } from 'native-base'

import MainHeader from '../components/MainHeader'

class AboutScreen extends Component {
  constructor (props){
    super(props)
  }

  render() {
    return <Container>
      <MainHeader title='Acerca de' toggleMenu={this.props.navigation.openDrawer} />
      <ImageBackground source={require('../assets/about-background.png')} style={{width: '100%', height: '100%'}}>
        <Content contentContainerStyle={styles.content}>
          <H1 style={styles.title}>Prótesis Avanzadas App</H1>
          <H3 style={styles.version}>Versión 0.0.1</H3>
          <Image source={require('../assets/isotipo.png')} style={styles.image} />
          <TouchableOpacity onPress={() => Linking.openURL('https://www.protesisavanzadas.co')}>
          <Text style={{color: 'black', fontSize: 25}}>
            www.protesisavanzadas.co
          </Text>
          </TouchableOpacity>
          <Text style={styles.copyright}>Todos los derechos reservados</Text>
          <Text style={styles.licence}>LICENCIA</Text>
        </Content>
      </ImageBackground>
    </Container>
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
  },
  version: {
    color: '#fff',
  },
  copyright: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
  },
  licence: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#030e40',
  }
})

export default AboutScreen