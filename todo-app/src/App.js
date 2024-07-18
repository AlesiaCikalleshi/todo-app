import AddToDo from "./components/AddToDo";
import { useReducer } from "react";
import ToDoList from "./components/ToDoList";

let id = 4;
const initialData = [
  {
    id: 1,
    text: "delectus aut autem",
    completed: false,
    visible: false,
  },
  {
    id: 2,
    text: "quis ut nam facilis et officia qui",
    completed: false,
    visible: false,
  },
  {
    id: 3,
    text: "fugiat veniam minus",
    completed: true,
    visible: false,
  },
];

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...tasks,
        {
          id: id++,
          text: action.text,
          completed: false,
          visible: false,
        },
      ];
    case "MARK_TODO":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "SAVE_TODO":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    case "UPDATE_TODO":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return { ...t, visible: !t.visible };
        } else {
          return t;
        }
      });
    case "DELETE_TODO":
      return tasks.filter((task) => task.id !== action.taskId);
    case "DELETE_ALL":
      return [];

    default:
      return tasks;
  }
}

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialData);
  return (
    <>
      <h1>TODO APP</h1>
      <AddToDo dispatch={dispatch} />
      <ToDoList tasks={tasks} dispatch={dispatch} />
    </>
  );
}
