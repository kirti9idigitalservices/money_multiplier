import { View,StyleSheet,Text,Button, Image, TextInput, TouchableOpacity } from "react-native";
import React from 'react';

export default function Mediator({navigation}){
    return(
        <View>
             <Button
                        title="Go to SignIn"
                        onPress={() => navigation.navigate('Signin')}
                   /> 
                    <Button
                        title="Go to LogIn"
                        onPress={() => navigation.navigate('Login')}
                   /> 
        </View>
    )
}