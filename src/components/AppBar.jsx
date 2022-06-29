import react from "react";
import { View, StyleSheet} from 'react-native'
import StylesText from "./StylesText";
import Constants from 'expo-constants'
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    }
})

const AppBar = ()=> {
    return (
        <View style={styles.container}>
            <StylesText color='primary' fontWeight='bold'>
                Repos
            </StylesText>
        </View>
    )
}

export default AppBar;