import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from "expo-constants"

export default function Screen() {
    return (
        <SafeAreaView style={styles.screen} >
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    },
})