import React, { Component } from 'react'

import { Image, Text, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Container, View, H2 } from 'native-base'
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
      <MainHeader toggleMenu={this.props.navigation.openDrawer} />
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
});

export default FunctionsScreen