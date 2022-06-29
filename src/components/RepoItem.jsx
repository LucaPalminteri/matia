import React from "react";
import { Text, View, StyleSheet } from "react-native";
import StylesText from "./StylesText.jsx";

export default function RepoItem(props) {
    return (
        <View key={props.id} style={{padding:20}}>
            <StylesText >{props.id}</StylesText>
            <StylesText fontSize='subheading' fontWeight='bold'>{props.title}</StylesText>
            <View style={{backgroundColor: 'red',}}>
                <StylesText  >{props.body}</StylesText>
            </View>
            <StylesText>Languege: {props.lang}</StylesText>
        </View>
    )
}

const styles = StyleSheet.create(
    
    )