
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Navigation from './Components/Navigation';
export default function App() {
  return (
    <View style = {styles.container} >
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132235',
  },
});
