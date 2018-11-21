import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base'
class MainHeader extends Component {
  render() {
    return <Header style={styles.container}>
      <Left>
        <Button transparent onPress={(this.props.toggleMenu)}>
          <Icon name='menu' style={{ fontSize: 40 }} />
        </Button>
      </Left>
      <Body>
        <Title style={styles.title}>{this.props.title}</Title>
      </Body>
      <Right />
  </Header>
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#317579"
  },
  title: {
    fontSize: 25,
    fontWeight: 'normal',
  }
});

export default MainHeader
