// import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';
// import { View, Button } from 'react-native';

// export default function AnimatedStyleUpdateExample() {
//   const randomWidth = useSharedValue(10);
//   const config = { duration: 500, easing: Easing.bezier(0.5, 0.01, 0, 1) };

//   const style = useAnimatedStyle(() => {
//     return {
//       width: withTiming(randomWidth.value, config),
//     };
//   });

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Animated.View style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]} />
//       <Button title="toggle" onPress={() => { randomWidth.value = Math.random() * 350; }} />
//     </View>
//   );
// }



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import Animated, { Easing } from 'react-native-reanimated';

// const { Value, set, cond, eq, spring } = Animated;

// const TextBox = props => {
//   const [clickedName, setClickedName] = useState('');

//   // Create an animated value for the top property
//   const animatedTop = new Value(0);

//   const handleTextClick = () => {
//     setClickedName(props.name);
//     // Animate the top property
//     spring(animatedTop, {
//       toValue: clickedName === props.name ? 0 : 1,
//       damping: 10,
//       stiffness: 100,
//       easing: Easing.inOut(Easing.ease),
//     }).start();
//   };

//   return (
//     <View style={{ marginVertical: '1%' }}>
//       <LinearGradient
//         colors={['#061161', '#780206']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         style={styles.linearGradient}
//       >
//         <View style={styles.textbox}>
//           {/* <Text>Hello {props.name}</Text> */}
//         </View>
//       </LinearGradient>
//       <Animated.View
//         style={[
//           styles.nameContainer,
//           {
//             top: cond(eq(animatedTop, 1), '0%', '35%'),
//           },
//         ]}
//       >
//         <TouchableOpacity onPress={handleTextClick}>
//           <Text style={styles.nameText}>{props.name}</Text>
//         </TouchableOpacity>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   linearGradient: {
//     // Your gradient styles
//   },
//   textbox: {
//     // Your textbox styles
//   },
//   nameContainer: {
//     marginLeft: '7%',
//     position: 'absolute',
//   },
//   nameText: {
//     color: 'grey',
//     fontSize: 15,
//     fontStyle: 'italic',
//   },
// });

// export default TextBox;



// import React, { useState } from 'react';
// import { View, TextInput, Button } from 'react-native';

// const MyInputComponent = () => {
//   const [inputText, setInputText] = useState('');

//   const handleInputChange = (text) => {
//     setInputText(text);
//   };

//   const handleInputSubmit = () => {
//     // Handle the submitted input (e.g., send it to an API, update state, etc.)
//     console.log('Submitted input:', inputText);
//   };

//   return (
//     <View style={{marginTop:'40%'}}>
//       <TextInput style={{borderWidth:1}}
//         placeholder="Enter something..."
//         onChangeText={handleInputChange}
//         value={inputText}
//       />
//       <Button title="Submit" onPress={handleInputSubmit} />
//     </View>
//   );
// };

// export default MyInputComponent;



import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

const MyScreen = () => {
  return (
    <KeyboardAvoidingView style={[{borderWidth:10,borderColor:"red"},styles.container]} behavior="position">
      {/* Other components */}
      <View style={[{marginTop:"100%"},styles.centeredContainer]}>
        <TextInput placeholder="Enter something..." style={styles.input} />
      </View>
      {/* Other components */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Other styles for your screen
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
});

export default MyScreen;

