import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {TaskList} from '../../components/TaskList';
import {useTaskList} from '../../context/TasksContext';

export const Home = () => {
  const [newTask, setNewTask] = useState('');
  const {addTask} = useTaskList();

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task empty',
    };

    addTask(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Dev!</Text>
      <TextInput
        placeholderTextColor={'#838689'}
        placeholder="Nova terefa..."
        style={styles.input}
        onChangeText={setNewTask}
      />
      <TouchableOpacity onPress={handleAddNewTask} style={styles.button}>
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
      <Text style={styles.h1}>Minhas Tarefas</Text>
      <TaskList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },

  input: {
    backgroundColor: '#2d2d2d',
    color: '#d3d3d3',
    width: '100%',
    borderRadius: 7,
    padding: 10,
    marginBottom: 15,
  },

  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },

  h1: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 10,
    marginTop: 20,
  },

  button: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#e89d10',
    borderRadius: 7,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    color: '#fff',
    fontSize: 20,
  },
});
