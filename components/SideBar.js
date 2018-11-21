import React from 'react'
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { StyleSheet, ScrollView, Text } from 'react-native'
import { Button, Icon, View } from 'native-base'

const SideBar = (props) => (
  <ScrollView style={styles.container}>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#317579',
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, 0.4)',
    paddingTop: 20,
    paddingBottom: 20,
  },
  titleButton: {
    color: '#fff',
    fontSize: 30,
  },
  titleLabel: {
    color: '#fff',
    fontSize: 25,
  }
});

export default SideBar