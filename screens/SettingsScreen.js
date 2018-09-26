import React, { Component } from 'react'

import { Text, StyleSheet, View } from 'react-native'

import { Button, Container, Content, Header, Icon, Left } from 'native-base'

class SettingsScreen extends Component {
  constructor (props){
    super(props)
  }

  render() {
    return <Container>
      <Content>
        <Text>Settings Screen</Text>
      </Content>
    </Container>
  }
}

export default SettingsScreen