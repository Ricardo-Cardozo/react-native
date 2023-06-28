import React, {useContext} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ITask, TasksContext} from '../../context/TasksContext';

export const TaskList = () => {
  const {tasks, removeTask} = useContext(TasksContext);

  const handleRemoveTask = (id: string) => {
    Alert.alert('tem certeza?', 'Deseja excluir a tarefa?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => {
          removeTask(id);
        },
      },
    ]);
  };
  return (
    <FlatList
      data={tasks as unknown as ITask[]}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => handleRemoveTask(item.id)}
          style={styles.buttonTasks}>
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  buttonTasks: {
    width: '100%',
    marginTop: 15,
    backgroundColor: '#2d2d2d',
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleTask: {
    color: '#d3d3d3',
    fontSize: 20,
  },
});
