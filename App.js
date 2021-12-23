import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddTodo from './components/AddTodo';



const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: 1 },
    { text: 'make an app', key: 2 },
    { text: 'play on the switch', key: 3 },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos //spreads previous todos into new array
      ]
    })
  }

  return (
    
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 40
  }
});

export default App;
