import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const LoginPage = (props) => {
    return (
        <WebView source={{ uri: 'https://volvere.in/vibe/' }} />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 100
    }
})

export default LoginPage;
