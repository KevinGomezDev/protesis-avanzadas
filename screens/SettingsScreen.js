import React, { Component } from 'react'

import { Alert, Text, StyleSheet, View, Image } from 'react-native'

import { Form, Input, Label, Item, Container, Content, Button, Icon, Left } from 'native-base'

import MainHeader from '../components/MainHeader';

class SettingsScreen extends Component {
  constructor (props){
    super(props)
    this.handleSerialChange = this.handleSerialChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  state = {
    password: 'password123',
    serial: 'MiPA3D00089',
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

  handleSerialChange(text) {
    this.setState({ serial: text })
  }

  handlePasswordChange(text) {
    this.setState({ password: text })
  }

  handleSave() {
    Alert.alert(
      'Confirmación',
      '¿Desea modificar estos datos permanentemente?',
      [
        {text: 'No', onPress: () => console.log('Cancel Pressed')},
        {text: 'Si', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render() {
    return <Container>
      <MainHeader title='Ajustes' toggleMenu={this.props.navigation.openDrawer} />
      <Content contentContainerStyle={styles.content}>
        <View style={styles.passwordHeader}>
          <Icon style={styles.passwordHeaderIcon} type='MaterialCommunityIcons' name='account-box' />
          <Text style={styles.passwordHeaderLabel}>Datos de usuario</Text>
        </View>
        <Form>
        <Item floatingLabel>
          <Label>Serial del brazo</Label>
          <Input onChangeText={this.handleSerialChange} value={this.state.serial} />
        </Item>
        <Item floatingLabel>
          <Label>Nueva Contraseña</Label>
          <Input onChangeText={this.handlePasswordChange} value={this.state.password} />
        </Item>
        <Button block style={styles.confirmButton} onPress={this.handleSave}>
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
    paddingRight: 5,
    paddingBottom: 5,
  }
});

export default SettingsScreen