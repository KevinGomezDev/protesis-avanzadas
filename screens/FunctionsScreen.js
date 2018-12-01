import React, { Component } from 'react'

import handActions from '../constants/handActions'
import MainHeader from '../components/MainHeader'

import { Container, View, H2, Footer, Button } from 'native-base'
import { 
  ActivityIndicator,
  Modal,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  ToastAndroid,
  Alert, 
} from 'react-native'

class FunctionsScreen extends Component {
  constructor (props){
    super(props)
    this.state = {
      actionIds: [],
      modalVisible: false,
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
    /*Remember to clean up this timeout :D!*/
    setTimeout(() => {
      this.setState({ modalVisible: !visible }, 
        ToastAndroid.showWithGravity(
          'Funciones cargadas con éxito',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
      )
    }, 3500)
  }

  selectAction = (id) => {
    const actionIds = this.state.actionIds
    if(actionIds.includes(id)) {
      const actionIdx = actionIds.indexOf(id)
      if(actionIdx > -1) { 
        actionIds.splice(actionIdx, 1)
      }
    } else {
      actionIds.push(id)
    }
    this.setState({ actionIds })
  }

  render() {
    const { actionIds } = this.state
    return <Container>
      <MainHeader title='Funciones' toggleMenu={this.props.navigation.openDrawer} />
      <View><H2 style={styles.title}>Básicas</H2></View>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        {handActions.map((handAction) => <TouchableHighlight
            underlayColor='white'
            key={handAction.id} 
            style={[styles.item, actionIds.includes(handAction.id) ? styles.itemSelected : {}]} 
            onPress={() => this.selectAction(handAction.id)}>
            <View style={styles.innerContainer}>
              <Image style={styles.image} source={handAction.image} />
              <Text style={styles.label}>{handAction.title}</Text>
            </View>
          </TouchableHighlight>
        )}
      </ScrollView>
      <Footer style={styles.footer}>
        <Button style={styles.footerButton} onPress={() => { this.setModalVisible(true) }}>
          <Text style={styles.footerText}>OK</Text>
        </Button>
      </Footer>
      <Modal
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          Alert.alert('Se ha detenido la carga de funciones')
        }}
        visible={this.state.modalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Las funciones están siendo cargadas al brazo espere un momento por favor...
          </Text>
          <ActivityIndicator size="large" color="#317579" />
        </View>
      </Modal>
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
  modalContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    width: '100%',
  },
  modalText: {
    color: '#317579',
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
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
})

export default FunctionsScreen