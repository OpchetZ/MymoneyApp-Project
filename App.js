import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Book from './screens/Book';
import { NavigationContainer } from '@react-navigation/native';
import Info from './screens/Info';

export default function App() {
  return (
    <NavigationContainer>
    {/* <Book/> */}
    <Info/>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
