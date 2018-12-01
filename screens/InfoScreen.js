import React, { Component } from 'react'
import { Text } from 'react-native'
import { Container, Content } from 'native-base'

import MainHeader from '../components/MainHeader'

class InfoScreen extends Component {
  constructor (props){
    super(props)
  }

  render() {
    return <Container>
      <MainHeader title='Información Prótesis' toggleMenu={this.props.navigation.openDrawer} />
      <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 28, color: '#317579' }}>
          Esperalo muy pronto...
        </Text>
      </Content>
    </Container>
  }
}

export default InfoScreen