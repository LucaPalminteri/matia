import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from "react-native";
import Constants from 'expo-constants';
import RepoList from "./RepoList";
import AppBar from './AppBar.jsx'

export default function Main() {
    return (
        <View>  
            <StatusBar style="auto" />
            <AppBar />
            <Text>
                <RepoList/>
            </Text>
        </View>
    )
}