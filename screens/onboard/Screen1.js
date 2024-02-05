import { Button } from '@rneui/base';
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Screen1 = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/onboarding-screen-1.png')} // Replace with your local image path
                style={styles.backgroundImage}
            >
                <Text style={styles.title}>Find Trusted Doctors</Text>
                <Text style={styles.description}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of it over 2000 years old.</Text>
                
                <Button buttonStyle={styles.next} containerStyle={styles.buttonContainer}>Next</Button>
                <Button buttonStyle={styles.skip} containerStyle={styles.buttonContainer} type="clear" titleStyle={{ color: "#2CA464" }}>Skip</Button>
                
                <View style={styles.indicator}>

                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // Adjust the image size mode as needed
        width: "100%",
        justifyContent: 'flex-end', // Center content vertically
    },
    title: {
        fontSize: 28,
        color: "#333333",
        textAlign: 'center',
        padding: 16,
        fontWeight: "500"
    },
    description: {
        fontSize: 18,
        color: "#484F64",
        textAlign: "center",
        fontWeight: "400",
        padding: 16
    },
    buttonContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    next: {
        backgroundColor: "#2CA464",
        padding: 16,
        color: "#FFFFF",
        width: "40%"
    },
    skip: {
        padding: 16,
        width: "40%"
    },
    indicator: {
        padding: 20
    }
});

export default Screen1;
