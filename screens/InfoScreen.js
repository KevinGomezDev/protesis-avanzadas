import React, { Component } from 'react'

import { Text, StyleSheet, View, Image } from 'react-native'

import { Button, Container, Content, Header, Icon, Left } from 'native-base'

import MainHeader from '../components/MainHeader';

class InfoScreen extends Component {
  constructor (props){
    super(props)
  }

  static navigationOptions = {
    drawerLabel: 'Información Prót.',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/sidebar-info.png')}
        style={[{height: 50, width: 50}]}
      />
    ),
  };

  render() {
    return <Container>
      <MainHeader title='Información Prótesis' toggleMenu={this.props.navigation.openDrawer} />
      <Content>
        <Text>Informaciçon</Text>
      </Content>
    </Container>
  }
}

export default InfoScreen