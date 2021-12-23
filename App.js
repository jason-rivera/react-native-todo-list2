import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';



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

  return (
    
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoItem item={item} pressHandler={pressHandler} />
          )}
        />
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
