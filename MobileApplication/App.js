import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Alert } from 'react-native';
import {Navbar} from './components/Navbar';
import { TodoTitle } from './components/TodoTitle';
import { TodoList } from './components/TodoList'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      complited: false,
      title
    }])
  }

  const deleteTodo = (id) => {
    setTodos(prev=>prev.filter(todo => todo.id !==id))
  }

  const compliteTodo = id => {
    let mapped = todos.map(todo=> {
      return todo.id == id ? {...todo, complited: !todo.complited} : {...todo}
    })
    setTodos(mapped)
  }

  return (
    <View>
      <Navbar title="TodoApp"/>
      <View style={styles.container}>
        <TodoTitle onSubmit={addTodo}/>
        <ScrollView>
          { todos.reverse().map((todo) => {
            return todo.complited ? '' : <TodoList key={todo.id} todo={todo} style={styles.list} onRemove={deleteTodo} onUpdate={compliteTodo}/>
          }) }
          { todos. reverse().map((todo) => {
            return todo.complited ? 
              <TodoList key={todo.id} todo={todo} style={styles.list} onRemove={deleteTodo} onUpdate={compliteTodo}/> :''
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
