import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';

const LoginPage = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>WELCOM</Text>
        </View>
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
        fontSize:100
    }
})

export default LoginPage;
