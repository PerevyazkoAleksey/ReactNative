import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const TodoList = ({todo, onRemove, onUpdate}) => {
    return(
        <TouchableOpacity activeOpacity={0.4}
        onLongPress={() => onRemove(todo.id)}
        onPress={()=> onUpdate(todo.id)}>
            <View style={todo.complited ? styles.complite : styles.list}>
                <Text style={todo.complited ? styles.title : styles.text}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
    },
    complite: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    }
})