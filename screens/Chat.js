import { Button } from '@rneui/base';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chat = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Chat