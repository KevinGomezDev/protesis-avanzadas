import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
class MainHeader extends Component {
  render() {
    return <Header style={styles.container}>
    <Left>
      <Button transparent>
        <Icon name='arrow-back' />
      </Button> 
    </Left>
      <Body>
        <Title>Funciones</Title>
      </Body>
    <Right>
      <Button transparent onPress={this.props.toggleMenu}>
        <Icon name='menu' />
      </Button>
    </Right>
  </Header>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#058b8c"
  },
});

export default MainHeader
