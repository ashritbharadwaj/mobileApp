import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './app/home.js';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Login, Signup, Welcome} from "./app/index.js";
import Try from './app/try.js';
import { LinearGradient } from 'expo-linear-gradient';


// export default function App() {
//   return (
//       <View style={styles.container}>
//         {/* <Text>Open up App.js to start working on your app!</Text>
//         <Text>Hello</Text>
//         <Text>namaskara</Text> */}
//         <Home/>
//         {/* <Try/> */}
//         <StatusBar style="auto" />
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     // flexDirection: 'row-reverse',
//     flex: 1,
//     backgroundColor: 'white',
//     // color:'white',
//     // alignItems: 'center',
//     // borderWidth:2,
//     // borderColor:'red'
//     // justifyContent: 'center',
//   },
// });


const Stack = createNativeStackNavigator()
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Signup'
      >
        <Stack.Screen
          name='Welcome'
          component={Welcome}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Signup'
          component={Signup}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}