import './App.css';
import AddToDo from './AddToDo';
import { useReducer } from "react";
import ToDoList from './ToDoList';


function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...tasks,
        {
          id: id++,
          text: action.text,
          completed: false,
        }
      ];
    case 'UPDATE_TODO':
      return [
        ...tasks,
        {

        }
      ];
    case 'DELETE_TODO':

      return tasks.filter(task => task.id !== action.taskId)

        default:
      return tasks;

  }

}

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialData);
  return (
    <>
      <h1>
        TODO APP
      </h1>
      <AddToDo dispatch={dispatch} />
      <ToDoList tasks={tasks} dispatch={dispatch}/>
    </>
  );
}

export default App;


let id = 4;
const initialData = [
  {
    "id": 1,
    "text": "delectus aut autem",
    "completed": false
  },
  {
    "id": 2,
    "text": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "id": 3,
    "text": "fugiat veniam minus",
    "completed": true
  }
]
