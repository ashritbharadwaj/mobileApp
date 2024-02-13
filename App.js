import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/home.js';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Hello</Text>
        <Text>namaskara</Text> */}
        <Home/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row-reverse',
    flex: 1,
    backgroundColor: 'white',
    // color:'white',
    // alignItems: 'center',
    // borderWidth:2,
    // borderColor:'red'
    // justifyContent: 'center',
  },
});
