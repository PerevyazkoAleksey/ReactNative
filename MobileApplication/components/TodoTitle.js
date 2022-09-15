import React, { useState } from "react";
import {View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const TodoTitle = ({onSubmit})=> {

    const [text, setText] = useState('')

    const pressHandler = () => {
        if(text.trim()){
            onSubmit(text)
            setText('')
        }else {
            Alert.alert('TextInput empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText={setText}
            value={text} 
            placeholder='Введите задачу'/>

            <Button title="Добавить" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width:'60%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#3949ab',
        padding: '5%',
    }
})