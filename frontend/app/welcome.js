import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/button";

const Welcome = ({navigation}) => {
    return (
        <LinearGradient
            style={{flex:1}}
            colors={[COLORS.secondary,COLORS.primary]}
        >
            <View style={[styles.square,{
                top:30,
                transform: [
                {translateX : 20},
                { translateY : 50},
                {rotate: "-15deg"}
                ]}
            ]}>
            </View>

            <View style={[styles.square,{
                top:-10,
                left: 100,
                transform: [
                {translateX : 50},
                { translateY : 50},
                {rotate: "-5deg"}
                ]}
            ]}>
            </View>

            <View style={[styles.square,{
                top:150,
                left:-50,
                transform: [
                {translateX : 50},
                { translateY : 50},
                {rotate: "15deg"}
                ]}
            ]}>
            </View>

            <View style={[styles.square,{
                width:200,
                height:200,
                top:130,
                left:100,
                transform: [
                {translateX : 50},
                { translateY : 50},
                {rotate: "15deg"}
                ]}
            ]}>
            </View>

            {/* content */}
            <View style={{
                position: "absolute",
                paddingHorizontal:"5%",
                top:"55%",
                width:"100%"
            }}>
                <Text style={{
                    fontSize: 50,
                    fontWeight: 800,
                    color: COLORS.yt
                }}>Let's Get</Text>
                <Text style={{
                    fontSize: 45,
                    fontWeight: 800,
                    color: COLORS.yt
                }}>Started</Text>

                <View style={{marginVertical:"10%"}}>
                    <Text style={{
                        fontSize:16,
                        color: COLORS.yt
                    }}>Track, Plan, Conquer!</Text>
                </View>

                <Button
                    title= "Join Now"
                    style={{
                        marginTop: 15,
                        width:"100%"
                    }}
                    onPress={()=>navigation.navigate("Signup")}
                ></Button>

                <View style={{
                    flexDirection: "row",
                    marginTop: "5%",
                    justifyContent:"center"
                }}>
                    <Text style={{
                        fontSize:16,
                        color:COLORS.yt
                    }}>Already Have an Account?</Text>
                    <Pressable
                    onPress={()=>navigation.navigate("Login")}
                    >
                       <Text style={{
                        fontSize:16,
                        fontWeight:"bold",
                        color:COLORS.yt,
                        marginLeft:"10%"
                       }}>Login</Text> 
                    </Pressable>
                </View>
            </View>
        </LinearGradient>
        // <View>
        //     <Text>Welcome</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    square : {
        // height: 100,
        height:"12%",
        width:"27%",
        backgroundColor:'#00ffff',
        borderRadius:20,
        position: "absolute"
    }
})

export default Welcome