import React from 'react'
import {  Text, TouchableOpacity} from 'react-native'

export default function MyButton({text,color,pressHandler}) {
    return (
        <TouchableOpacity 
            onPress={pressHandler}
            style={{
            backgroundColor:color,
            flex:1,
            borderBottomWidth:2,borderBottomColor:'white',
            borderLeftWidth:2,borderLeftColor:'white',
            borderRightWidth:2,borderRightColor:'white',
            justifyContent: 'center',alignItems: 'center',
            borderRadius:23,
            margin:5
        }}>
            <Text style={{
                fontSize:30,color:'#DEDEDB',fontWeight:'bold'
            }}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}
