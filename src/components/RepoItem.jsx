import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import StylesText from "./StylesText.jsx";

export default function RepoItem(props) {
    return (
        <View key={props.id}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
            <View>
                <StylesText>{props.fullName}</StylesText>
                <StylesText>{props.description}</StylesText>
                <StylesText>{props.language}</StylesText>
            </View>
            <View>
                <StylesText>{props.forksCount}</StylesText>
                <Text>Forks</Text>
            </View>
            <View>
                <StylesText>{props.stargazerCount}</StylesText>
                <Text>Stars</Text>
            </View>
            <View>
                <StylesText>{props.ratingAverage}</StylesText>
                <Text>Rate</Text>
            </View>
            <View>
                <StylesText>{props.reviewCount}</StylesText>
                <Text>Reviews</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        image: {
            height: 48,
            width: 48
        }
    }
    )