import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const TodoList = ({todo, onRemove}) => {
    return(
        <TouchableOpacity activeOpacity={0.4}
        onLongPress={() => onRemove(todo.id)}>
            <View style={styles.list}>
                <Text style={styles.title}>{todo.title}</Text>
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
    title: {

    }
})