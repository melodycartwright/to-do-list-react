import {useState} from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
  };
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

  return (
    <div className='App'>
<h1>Todo List</h1>
<TodoForm addTodo={addTodo} />
<div className="todo-list">

{todos.map((todo, index) => ( 

<Todo
key={index}
index={index}
todo={todo}
completeTodo={completeTodo}
removeTodo={removeTodo} 
/>
))}
</div>
</div>
 );
}

export default App;
