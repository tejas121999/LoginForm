import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import LoginPage from './src/LoginPage'

const loginImg = require('./assets/S2.png')

export default function App() {
  const [login, setLogin] = useState(false)
  const [username, onUsername] = useState()
  const [password, onPassword] = useState()

  
  return (
    login ? (
      <LoginPage />
    )
      : (
        <View style={styles.container}>
          <Image style={styles.sign} source={loginImg} />
          <TextInput
            style={styles.input}
            placeholder="username"
            onUsername={onUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            onPassword={onPassword}
            value={password}
          />
          <View style={styles.button}>
            <Button
              title='Login'
              type='submit'
              onPress={() => setLogin(true)}
            />
          </View>
          <Text style={{ marginLeft: 130 }} >forgot password ?</Text>
        </View>
      )
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    marginBottom: 40,
  },
  button: {
    marginTop: 30,
    width: 250
  },
  input: {
    padding: 10,
    width: 250,
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  sign: {
    width: 300,
    height: 300
  }
});
