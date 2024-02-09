import { Button, Text } from '@rneui/base'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Contact number here</Text>
      <Text style={styles.subtitle}>Enter your phone number for the verification
        proccess, we will send 4 digits code to your number.</Text>

      <TextInput
        style={styles.input}
      />

      <Button buttonStyle={styles.next} containerStyle={styles.buttonContainer}>Continue</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "red"
  },
  title: {
    fontWeight: "700",
    fontSize: 24,
    color: "black",
    marginBottom: 10

  },
  subtitle: {
    fontSize: 15,
    color: "grey",
    marginBottom: 30
  },
  input: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#677294",
    marginBottom: 40,
    color: "black"
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  next: {
    backgroundColor: "#2CA464",
    padding: 16,
    color: "#FFFFF",
    width: "50%"
  },
})

export default Login