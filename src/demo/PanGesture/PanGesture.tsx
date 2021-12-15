import React from 'react'
import { View, StyleSheet } from 'react-native'
import {}from 'react-native-gesture-handler';
import Card,{ Cards } from '../../components/Card';

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})

interface GestureProps{
    width: number;
    height:number;
}

export const PanGesture = ({width, height}: GestureProps)=>{
    console.log("width:", width, ', height:',height)
    return (
        <View style={styles.container}>
            <Card card={Cards.Card1}></Card>
        </View>
    )
}

