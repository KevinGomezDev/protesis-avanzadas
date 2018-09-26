import React, { Component } from 'react'

import { Image, Text, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';


import { Button, Container, Content, Header, Icon, Left } from 'native-base'
import MainHeader from '../components/MainHeader';

class HomeScreen extends Component {
  constructor (props){
    super(props)
  }

  render() {
    return <Container>
      <MainHeader toggleMenu={this.props.navigation.openDrawer} />
      <Grid>
        <Row>
          <Col>
            <Image style={{width: 200, height: 200}} source={require('../assets/hand.png')} />
            <Text style={styles.label}>Función 1</Text>
          </Col>
          <Col>
            <Image style={{width: 200, height: 200}} source={require('../assets/hand.png')} />
            <Text style={styles.label}>Función 2</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image style={{width: 200, height: 200}} source={require('../assets/hand.png')} />
            <Text style={styles.label}>Función 3</Text>
          </Col>
          <Col>
            <Image style={{width: 200, height: 200}} source={require('../assets/hand.png')} />
            <Text style={styles.label}>Función 4</Text>
          </Col>
        </Row>
      </Grid>
    </Container>
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default HomeScreen