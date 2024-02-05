import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './screens/onboard/Screen1';
import Screen2 from './screens/onboard/Screen2';
import Screen3 from './screens/onboard/Screen3';
import Home from './screens/Home';

export default function App() {
  return (
    <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
