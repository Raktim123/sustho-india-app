import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from '../screens/Chat';
const Stack = createNativeStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  )
}

export default ChatStack