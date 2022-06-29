import React from "react";
import { FlatList, Text } from "react-native";
import RepoItem from "./RepoItem";
import repos from '../data/repos.json'


export default function RepoList() {
    return (
        <FlatList 
            data={repos}
            renderItem={({item: repo}) => (
                <RepoItem {...repo}/>
            )}
        >  
        </FlatList>
    )
}