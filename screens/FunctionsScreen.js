import React, { Component } from 'react'

import { Image, Text, StyleSheet, TouchableHighlight, Dimensions, ScrollView } from 'react-native';
import { Container, View } from 'native-base'
import MainHeader from '../components/MainHeader';

const actions = {
  actionOne: {
    id: 1,
    title: 'Gancho',
  },
  actionTwo: {
    id: 2,
    title: 'Teclado',
  },
  actionThree: {
    id: 3,
    title: 'Agarre',
  },
  actionFour: {
    id: 4,
    title: 'Pulgar',
  },
  actionFive: {
    id: 5,
    title: 'Doble',
  },
  actionSix: {
    id: 6,
    title: 'Opuesto',
  },
  actionSeven: {
    id: 7,
    title: 'Inusual',
  },
  actionEight: {
    id: 8,
    title: 'Transversal',
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
    console.log(actionIds)
    return <Container>
      <MainHeader toggleMenu={this.props.navigation.openDrawer} />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
      {Object.keys(actions).map((action, index) =>
        <TouchableHighlight
          underlayColor='white'
          key={actions[action].id} 
          style={[styles.item, actionIds.includes(actions[action].id) ? styles.itemSelected : {}]} 
          onPress={() => this.selectAction(actions[action].id)}>
          <View>
            <Image style={styles.image} source={require('../assets/hand.png')} />
            <Text style={styles.label}>{actions[action].title}</Text>
          </View>
        </TouchableHighlight>
      )}
      </ScrollView>
    </Container>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
  },
  item: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    margin: 5,
    width: Dimensions.get('window').width / 2.2, //Device width divided in almost a half
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemSelected: {
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    borderColor: 'black',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default FunctionsScreen