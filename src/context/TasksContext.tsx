import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  FunctionComponent,
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface ITaskContext {
  tasks: ITask[];
  addTask(task: ITask): void;
  removeTask(id: string): void;
}

export interface IProps {
  children: ReactElement;
}

export interface ITask {
  id: string;
  title: string;
}

const tasksData = '@MyTasks:Tasks';

export const TasksContext = createContext<ITaskContext>({} as ITaskContext);

export const TaskProvider: FunctionComponent<IProps> = ({children}) => {
  const [data, setData] = useState<ITask[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const taskList = await AsyncStorage.getItem(tasksData);

      if (taskList) {
        setData(JSON.parse(taskList));
      }
    };

    loadTasks();
  });

  const addTask = async (task: ITask) => {
    try {
      const newTaskList = [...data, task];
      setData(newTaskList);
      await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
    } catch (error) {
      throw new Error(error as string);
    }
  };

  const removeTask = async (id: string) => {
    const newTaskList = data.filter(task => task.id !== id);
    setData(newTaskList);
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList));
  };

  return (
    <TasksContext.Provider value={{tasks: data, addTask, removeTask}}>
      {children}
    </TasksContext.Provider>
  );
};

export function useTaskList(): ITaskContext {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTaskList deve ser usado em TasksProvider');
  }

  return context;
}
