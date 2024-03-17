import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import COLORS from "../constants/colors";

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.yt;
    const bgColor = props.filled ? filledBgColor:outlinedColor
    const textColor = props.filled ? COLORS.yt:COLORS.primary;

    return (
        <TouchableOpacity
            style={[styles.button,{...{backgroundColor:bgColor},...props.style}]}
            onPress={props.onPress}
        >
            <Text style={{fontSize:18, ...{color:textColor}}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: 16,
        paddingVertical:15,
        borderWidth:2,
        borderColor: COLORS.primary,
        borderRadius: 12,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default Button;