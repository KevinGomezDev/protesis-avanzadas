import React, { Component } from 'react'

import { Text, StyleSheet, View, Image } from 'react-native'

import { Button, Container, Content, Header, Icon, Left } from 'native-base'

import MainHeader from '../components/MainHeader';

class AboutScreen extends Component {
  constructor (props){
    super(props)
  }

  static navigationOptions = {
    drawerLabel: 'Acerca de',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/sidebar-about.png')}
        style={[{height: 50, width: 50}]}
      />
    ),
  };

  render() {
    return <Container>
      <MainHeader title='Acerca de' toggleMenu={this.props.navigation.openDrawer} />
      <Content>
        <Text>Settings Screen</Text>
      </Content>
    </Container>
  }
}

export default AboutScreen