import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Post from './components/Post';

const App: ()  => React$Node = () => {
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>You have gained 250,900 followers on TikTok! Congratulations, Khaled, on becoming a TikTok Star!</Text>
      <Post />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight: 'bold',
    color: '#fff',
  }
});

export default App;
