import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={{uri: "https://i.imgur.com/TkIrScD.png"}} style={styles.logo}/>
      <Text style={styles.instructions}>
      To Share a photo from your phone with a friend, just press the button below!
      </Text>
    <TouchableOpacity
    onPress={() => alert('Hello, world!')} style = {styles.button}>
    <Text style={styles.buttonText}>Pick a photo</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions:{
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText:{
    fontSize: 20,
    color: '#fff',
  },
  
});
