import logo from './logo.svg';
import './App.css';
import Taskcard from './components/Taskcard';
import TasksSlice from './components/TasksSlice';
import Add from './components/Add';
import TaskList from './components/TaskList';
import TaskCard from './components/Taskcard';

function App() {
  return (
    <div className="App">
   <Add/>
  <TaskList/>
    </div>
  );
}

export default App;
