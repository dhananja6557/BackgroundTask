import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MyServices = () => {
    return (
        <View>
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 50,
                    marginTop: 20,
                    borderRadius: 20,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                }}
                onPress={() => {}}
            >
                <Text>Start Background Task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MyServices; 