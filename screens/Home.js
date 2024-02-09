import { Button } from '@rneui/base';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.headerBackgroundColor}>
                    <Text>JKdbqs</Text>
                </View>

                <View style={styles.sectionContainer}>
                    <View style={styles.section}>
                        <Text style={styles.title}>Hospitals</Text>
                        <Image source={require('../assets/doctor.png')} style={{ width: "100%", resizeMode: "contain"}} />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Medical Tour</Text>
                        <Image source={require('../assets/Group 11012.png')} style={{ width: "100%", resizeMode: "contain" }} />
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Medical Tour</Text>
                        
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flexDirection: 'column', alignItems: 'center', width: "50%"}}>
                                <Image source={require('../assets/online-doctor 1.png')} style={{ width: "100%", resizeMode: "contain" }} />
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: "space-between", width: "50%" }}>
                                <View>
                                    <Text style={styles.title}>Connect us for free Consultation.</Text>
                                    <Text>Specialist Cardiologist </Text>
                                </View>
                                <Button buttonStyle={{backgroundColor: "#0EBE7F", padding: 15, borderRadius: 4}} containerStyle={{marginTop: 15}}>Click Here</Button>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerBackgroundColor: {
        flex: 0.2,
        backgroundColor: "#2CA464",
        borderBottomRightRadius: 20,  
        borderBottomLeftRadius: 20,  
    },
    sectionContainer: {
        flex: 0.8
    },
    title: {
        color: "#333333",
        fontSize: 22,
        fontWeight: "500",
        marginBottom: 10
    },  
    section: {
        paddingHorizontal: 10,
        paddingVertical: 10
    }
});

export default Home