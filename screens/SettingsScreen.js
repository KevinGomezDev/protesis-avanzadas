import React, { Component } from 'react'

import { Text, StyleSheet, View, Image } from 'react-native'

import { Form, Input, Label, Item, Container, Content, Button, Icon, Left } from 'native-base'

import MainHeader from '../components/MainHeader';

class SettingsScreen extends Component {
  constructor (props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    password: 'password123',
  }

  static navigationOptions = {
    drawerLabel: 'Ajustes',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/sidebar-settings.png')}
        style={[{height: 50, width: 50}]}
      />
    ),
  };

  handleChange(text) {
    this.setState({ password: text })
  }

  render() {
    console.log(this.state)
    return <Container>
      <MainHeader title='Ajustes' toggleMenu={this.props.navigation.openDrawer} />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.passwordHeader}>
          <Icon style={styles.passwordHeaderIcon} type='MaterialCommunityIcons' name='key' />
          <Text style={styles.passwordHeaderLabel}>Cambiar Contraseña</Text>
        </View>
        <Form>
        <Item floatingLabel>
          <Label>Nueva Contraseña</Label>
          <Input onChangeText={this.handleChange} value={this.state.password} />
        </Item>
        <Button block style={styles.confirmButton}>
          <Text style={styles.confirmLabeL}>Confirmar</Text>
        </Button>
      </Form>
      </Content>
    </Container>
  }
}

const styles = StyleSheet.create({
  content: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  confirmButton: {
    marginTop: 50,
    backgroundColor: '#317579',
  },
  confirmLabeL: {
    color: '#fff',
    fontSize: 20,
  },
  passwordHeader: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginTop: 20,
  },
  passwordHeaderLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    borderLeftWidth: 1,
    paddingLeft: 10,
  },
  passwordHeaderIcon: {
    fontSize: 30,
    paddingRight: 10,
  }
});

export default SettingsScreen