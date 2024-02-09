import React, { useState } from 'react'
import { Button, Text } from '@rneui/base'
import { StyleSheet, TextInput, View } from 'react-native'

const Verification = () => {
    const [otpFields, setOtpFields] = useState(['', '', '', '']);

    const handleOtpChange = (value, index) => {
        const newOtpFields = [...otpFields];
        newOtpFields[index] = value;
        setOtpFields(newOtpFields);
    };

    const handleVerifyOtp = () => {
        const otp = otpFields.join('');
        // You can now verify the OTP with your backend server or perform any other action.
        console.log('Entered OTP:', otp);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter 4 Digits Code</Text>
            <Text style={styles.subtitle}>Enter the 4 digits code that you received on phone.</Text>

            <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 15}}>
                {otpFields.map((field, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        value={field}
                        onChangeText={(value) => handleOtpChange(value, index)}
                        keyboardType="numeric"
                        maxLength={1}
                    />
                ))}
            </View>

            <Button buttonStyle={styles.next} containerStyle={styles.buttonContainer}>Verify OTP</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontWeight: "700",
        fontSize: 24,
        color: "black",
        marginBottom: 10

    },
    subtitle: {
        fontSize: 15,
        color: "grey",
        marginBottom: 30
    },
    input: {
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#677294",
        marginBottom: 40,
        color: "black"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    next: {
        backgroundColor: "#2CA464",
        padding: 16,
        color: "#FFFFF",
        width: "50%"
    },
})

export default Verification