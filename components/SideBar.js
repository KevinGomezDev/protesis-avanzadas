import React from 'react'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { StyleSheet, ScrollView, Text } from 'react-native'

const SideBar = (props) => (
  <ScrollView style={styles.container}>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <Text style={styles.title}>Prótesis Avanzadas</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007071',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    padding: 20,
    textAlign: 'center',
  }
});

export default SideBar