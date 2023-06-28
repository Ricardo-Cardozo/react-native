import React from 'react';
import {Home} from './src/pages/Home';
import {TaskProvider} from './src/context/TasksContext';

function App(): JSX.Element {
  return (
    <TaskProvider>
      <Home />
    </TaskProvider>
  );
}
export default App;
