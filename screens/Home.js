import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerBackgroundColor}>
                <Text>JKdbqs</Text>
            </View>

            <View style={styles.banner}>
                <Image source={require('../assets/doctor.png')} style={{ width: "100%", resizeMode: "contain"}} />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    headerBackgroundColor: {
        flex: 0.3,
        backgroundColor: "#2CA464",
        borderBottomRightRadius: 20,  
        borderBottomLeftRadius: 20,  
    },
    banner: {
        padding: 10
    }
});

export default Home