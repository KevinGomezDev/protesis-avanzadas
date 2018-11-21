import React, { Component } from 'react'

import { Image, Text, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Container, View, H2, Footer, Button } from 'native-base'
import MainHeader from '../components/MainHeader';

const actions = {
  actionOne: {
    id: 1,
    title: 'Agarre lateral dedo pulgar',
    image: require('../assets/lateral-dedo-pulgar-abierto.png'),
  },
  actionTwo: {
    id: 2,
    title: 'Agarre mano completa',
    image: require('../assets/mano-completa-abierta.png'),
  },
  actionThree: {
    id: 3,
    title: 'Agarre mano completa pulgar opuesto abierto',
    image: require('../assets/pulgar-opuesto-abierto.png'),
  },
  actionFour: {
    id: 4,
    title: 'Pinza dos dedos',
    image: require('../assets/pinza-dos-dedos-abierto.png'),
  },
  actionFive: {
    id: 5,
    title: 'Doble',
    image: require('../assets/mano-completa-abierta.png'),
  },
  actionSix: {
    id: 6,
    title: 'Opuesto',
    image: require('../assets/mano-completa-abierta.png'),
  },
  actionSeven: {
    id: 7,
    title: 'Inusual',
    image: require('../assets/mano-completa-abierta.png'),
  },
  actionEight: {
    id: 8,
    title: 'Transversal',
    image: require('../assets/mano-completa-abierta.png'),
  },
}
class FunctionsScreen extends Component {
  constructor (props){
    super(props)
    this.state = {
      actionIds: [],
    }
  }

  static navigationOptions = {
    drawerLabel: 'Funciones',
    drawerIcon: () => (
      <Image
        source={require('../assets/sidebar-functions.png')}
        style={[{height: 50, width: 50}]}
      />
    ),
  };

  selectAction = (id) => {
    const actions = this.state.actionIds
    if(actions.includes(id)) {
      const actionIdx = actions.indexOf(id);
      (actionIdx > -1) && actions.splice(actionIdx, 1);
    } else {
      actions.push(id)
    }
    this.setState({ actionIds: actions })
  }

  render() {
    const { actionIds } = this.state
    return <Container>
      <MainHeader title='Funciones' toggleMenu={this.props.navigation.openDrawer} />
      <View><H2 style={styles.title}>Básicas</H2></View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      {Object.keys(actions).map((action, index) => {
        return <TouchableHighlight
          underlayColor='white'
          key={actions[action].id} 
          style={[styles.item, actionIds.includes(actions[action].id) ? styles.itemSelected : {}]} 
          onPress={() => this.selectAction(actions[action].id)}>
          <View style={styles.innerContainer}>
            <Image style={styles.image} source={actions[action].image} />
            <Text style={styles.label}>{actions[action].title}</Text>
          </View>
        </TouchableHighlight>
      })}
      </ScrollView>
      <Footer style={styles.footer}>
        <Button style={styles.footerButton}>
          <Text style={styles.footerText}>OK</Text>
        </Button>
      </Footer>
    </Container>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  title: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 0.5,
    borderColor: '#34495e',
  },
  label: {
    fontSize: 16,
    textAlign: 'center',
  },
  item: {
    borderWidth: 0.5,
    borderColor: '#34495e',
    width: Dimensions.get('window').width / 2, //Device width divided in almost a half
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSelected: {
    backgroundColor: '#c8c9c9',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  footer: {
    backgroundColor: '#fff',
    borderWidth: 0.5,
  },
  footerButton: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#34495e',
    marginTop: 7,
    width: 100,
    height: 40,
  },
  footerText: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    width: 95,
    textAlign: 'center',
  }
});

export default FunctionsScreen