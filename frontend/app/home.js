import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Button, Pressable } from 'react-native';
import { LinearGradient }  from 'expo-linear-gradient';
import Animated, { Easing } from 'react-native-reanimated';

const { Value, set, cond, eq, spring } = Animated;

const TextBox = props => {
    const [clickedName,setClickedName] = useState('');

    // const animation = new Value(0);

    const handleTextBoxClick = () => {
        setClickedName(props.name);
        spring(animation, {
            toValue: clickedName === props.name ? 0 : 1,
            damping: 10,
            stiffness: 100,
            easing: Easing.inOut(Easing.ease),
        }).start();
    }

    return (
        <View style={{marginVertical:"1%"}}>
            <LinearGradient
                colors={['#061161','#780206']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.linearGradient}
            >
                    {/* <Text>Hello {props.name}</Text> */}
                <TextInput style={[styles.textbox]}
                    // placeholder="Enter something..."
                ></TextInput>
                <View style={{marginLeft:"8%", position:'absolute', top: "30%"}}>
                    <View style={{backgroundColor:"yellow",marginRight:"auto"}}>
                        <Text style={{color:"grey", fontSize:15, fontStyle:"italic"}}>{props.name}</Text>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
}

export default function Home({navigation}) {
    return (
        <LinearGradient
        colors={['#061161','#780206']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{height:'100%', justifyContent:'center'}}
        >
            <Pressable style={{
                alignItems:"center"
            }}
                onPress={()=>{navigation.navigate("Welcome")}}
            >
                <Text style={{color:"white",fontWeight:"bold",fontSize:16}}>Welcome page</Text>
            </Pressable>
            {/* <KeyboardAvoidingView style={styles.container}> */}
                {/* <View style={styles.signheader}>
                    <Text style={{fontSize: 25, borderBottomWidth:2, paddingHorizontal:'5%'}}>SignUp</Text>
                    <Text style={{fontSize: 25, color:"grey"}}>SignIn</Text>
                </View> */}
                {/* <View style={styles.description}> */}
                    {/* <View style={styles.details}>
                        <TextBox name = "Userame"/>
                        <TextBox name = "Name"/>
                        <TextBox name = "Email" />
                        <TextBox name = "New Password"/>
                        <TextBox name = "Confirm Password"/>
                    </View>
                    <View style={{alignItems:"center"}}><Text>Or login with</Text></View>
                    <View style={styles.alsologinwith}>
                        <View style={styles.loginwith}>
                            <Image source={require('../icons/google.png')} style={{width:25,height:25}}/>
                        </View>
                        <View style={styles.loginwith}>
                            <Image source={require('../icons/instagram.png')} style={{width:30,height:30}}/>
                        </View>
                        <View style={styles.loginwith}>
                            <Image source={require('../icons/apple.png')} style={{width:30,height:30}}/>
                        </View>
                    </View> */}
                    {/* <View style={{alignItems:"center"}}><Text style={{color:"blue"}}>Create account</Text></View> */}
                    
                {/* </View>  */}
                {/* <Text>hai</Text> */}
                {/* <Text>Hello, I am...</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: "10%"
                    }}
                    placeholder='name me'
                /> */}
           {/* </KeyboardAvoidingView> */}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    loginwith: {
        flex:1,
        //borderWidth:1,
        marginVertical:"5%",
        padding:"auto",
        alignItems:"center",
        justifyContent:"center",
        //marginHorizontal:"15%"
    },

    alsologinwith: {
        //borderWidth: 1,
        borderColor:"red",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "5%",
        marginBottom: "3%"
    },

    linearGradient:{
        borderRadius: 20,
        marginVertical: '2%',
        //paddingHorizontal: "6%",
        //paddingVertical: "8%",
    },

    textbox: {
        backgroundColor: "white",
        borderBottomWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        //borderWidth : 1,
        borderColor:"grey",
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
        //marginVertical: '1%',
        marginBottom: '0.5%',
        marginHorizontal: '0.3%',
        paddingHorizontal: "6%",
        paddingVertical: "2%",

    },

    container: {
      flex: 1,
      backgroundColor: 'white',
      color:'white',
      //alignItems: 'center',
      //justifyContent: 'center',
      borderWidth:1,
      marginVertical: "45%",
      marginHorizontal: '10%',
      borderColor:'black',
      borderRadius: 20,
      shadowColor: "yellow",
      elevation:5,
      paddingBottom:'5%'
    },

    signheader: {
        flex:1,
        //borderWidth:1,
        margin:'5%',
        paddingHorizontal:'10%',
        paddingVertical: '3%',
        flexDirection:'row',
        justifyContent: 'space-between',
        
    },

    description: {
        flex:10,
        //borderWidth:1,
        marginHorizontal: '5%',
        paddingHorizontal: '5%',
        //paddingVertical: '5%'
    },

    details: {
        //borderWidth:1,
        borderColor:"red",
        marginTop:"3%"
    }
  });