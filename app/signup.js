import { View, Text, TextInput, TouchableOpacity, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";
import Button from "../components/button";

const Signup = ({navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const [showfeatureyettocome,setshowfeatureyettocome] = useState(false);
    const imageClicked = () => {setshowfeatureyettocome(true);};

    const [user, setUser] = useState({
        email : "",
        phone : "",
        password : ""
    })

    handleUserChange = (key,value) => {
        setUser(prevState => ({
            ...prevState,
            [key]:value
        }));
    };

    handleSubmit = () => {
        console.log(user.email);
        console.log(user.phone);
        console.log(user.password);
    };

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.yt
        }}>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                marginHorizontal: "5%",
                // borderWidth:2
                // paddingTop:"95%"
            }}>
                <View style={{ marginVertical: "3%" }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: "bold",
                        marginVertical: "5%",
                        // color:COLORS.primary
                    }}>Create Account</Text>
                </View>

                <View style={{
                    marginVertical: "5%",
                    width: "100%",
                    // height:"6%",
                    height: 48,
                    borderWidth: 1,
                    borderColor: COLORS.gre,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "5%"
                }}>
                    <TextInput
                        placeholder="Enter your email address"
                        placeholderTextColor={COLORS.gre}
                        keyboardType="email-address"
                        style={{ width: "100%" }}
                        onChangeText={(text)=>handleUserChange('email',text)}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        backgroundColor: COLORS.yt,
                        position: "absolute",
                        top: "-20%",
                        left: "3%"
                    }}>Email Address</Text>
                </View>

                <View style={{
                    marginVertical: "5%",
                    width: "100%",
                    // height:"6%",
                    height: 48,
                    borderWidth: 1,
                    borderColor: COLORS.gre,
                    borderRadius: 8,
                    alignItems: "center",
                    flexDirection:"row",
                    justifyContent: "space-between",
                    paddingLeft: "5%"
                }}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"center",
                        alignItems:"center",
                        width: "10%",
                        borderRightWidth:1,
                        borderRightColor:COLORS.gre,
                        height:"80%"
                    }}>
                        <Text>+</Text>
                        <TextInput
                            placeholder="91"
                            placeholderTextColor={COLORS.blak}
                            keyboardType="numeric"
                        />
                    </View>
                    <TextInput
                        placeholder="Enter your mobile number"
                        placeholderTextColor={COLORS.gre}
                        keyboardType="numeric"
                        style={{width: "85%"}}
                        onChangeText={(text)=>handleUserChange('phone',text)}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        backgroundColor: COLORS.yt,
                        position: "absolute",
                        top: "-20%",
                        left: "3%"
                    }}>Mobile Number</Text>
                </View>

                <View style={{
                    marginVertical: "5%",
                    width: "100%",
                    // height:"6%",
                    height: 48,
                    borderWidth: 1,
                    borderColor: COLORS.gre,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "5%"
                }}>
                    <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor={COLORS.gre}
                        secureTextEntry={!isPasswordShown}
                        style={{ width: "100%" }}
                        onChangeText={(text)=>handleUserChange('password',text)}
                    />
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        backgroundColor: COLORS.yt,
                        position: "absolute",
                        top: "-20%",
                        left: "3%"
                    }}>Password</Text>

                    <TouchableOpacity style={{
                        position: "absolute",
                        right: "5%",
                        // borderWidth:1,
                        height:"75%",
                        width:30,
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                        onPress={() => setIsPasswordShown(!isPasswordShown)}
                    >
                        {
                            isPasswordShown == false ? (
                                <Ionicons name="eye-off" size={20} color={COLORS.blak} />
                            ) : (
                                <Ionicons name="eye" size={20} color={COLORS.blak} />
                            )
                        }

                    </TouchableOpacity>
                </View>
                
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: "5%"
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? "#222222" : undefined}
                    />
                    <TouchableOpacity onPress={()=>{setIsChecked(!isChecked)}}>
                    <Text>I agree to the terms and conditions</Text>
                    </TouchableOpacity>
                    {/* </Checkbox> */}
                </View>

                <Button
                    title= "Signup"
                    filled
                    style={{
                        marginTop: 18,
                        width:"100%"
                    }}
                    // onPress = {handleSubmit}
                    onPress={()=>navigation.navigate("Home")}
                />

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginVertical:"10%"
                }}>
                    <View style={{
                        flex:1,
                        height:1,
                        backgroundColor:COLORS.gre,
                        marginHorizontal: "3%"
                    }}/>
                    <Text style={{fontSize:14}}>or signup with</Text>
                    <View style={{
                        flex:1,
                        height:1,
                        backgroundColor:COLORS.gre,
                        marginHorizontal: "3%"
                    }}/>
                </View>

                <View style={{
                    flexDirection:"row",
                    justifyContent:"center"
                }}>
                    <TouchableOpacity
                        // onPress={()=>console.log("Pressed")}
                        onPress={imageClicked}
                        style={{
                            flex:1,
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            height:52,
                            // borderWidth:1,
                            borderColor:COLORS.gre,
                            borderRadius:10
                            // marginRight:4
                    }}>
                        <Image
                            source={require("../icons/apple.png")}
                            style={{
                                height:40,
                                width:40,
                                marginRight:8,
                                position:"absolute",
                                top:2
                            }}
                            resizeMode="contain"
                        />
                        {/* <Text>Apple</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={()=>console.log("Pressed")}
                        onPress={imageClicked}
                        style={{
                            flex:1,
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            height:52,
                            // borderWidth:1,
                            borderColor:COLORS.gre,
                            borderRadius:10
                            // marginRight:4
                    }}>
                        <Image
                            source={require("../icons/google.png")}
                            style={{
                                height:36,
                                width:36,
                                marginRight:8
                            }}
                            resizeMode="contain"
                        />
                        {/* <Text>Google</Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                        // onPress={()=>console.log("Pressed")}
                        onPress={imageClicked}
                        style={{
                            flex:1,
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            height:52,
                            // borderWidth:1,
                            borderColor:COLORS.gre,
                            borderRadius:10
                            // marginRight:4
                    }}>
                        <Image
                            source={require("../icons/instagram.png")}
                            style={{
                                height:36,
                                width:36,
                                marginRight:8
                            }}
                            resizeMode="contain"
                        />
                        {/* <Text>Instagram</Text> */}
                    </TouchableOpacity>
                </View>

                <View style={{alignItems:"center"}}>
                    {showfeatureyettocome && (
                    <Text style={{color:"red"}}>Feature yet to come</Text>
                    )}
                </View>

                <View style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    marginTop:"8%"
                }}>
                    <Text style={{fontSize:16, color:COLORS.blak}}>Already have an account?</Text>
                    <Pressable
                        onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize:16,
                            color:COLORS.primary,
                            fontWeight:"bold",
                            marginLeft:6
                        }}>Login</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Signup