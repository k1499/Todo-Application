import {useState} from "react";
import Form from './Form.js';
import TodoComponent from './todoContainer.js'
import {styleDiv} from './CSS-Styles.js'
import './App.css';


function App() {
  //State that keeps  track of the Todo list 
  const [todo , updateTodoList] = useState([]);
  return (
    <div className = "styleDiv">
       <Form Todo = {todo}
             updateState = {updateTodoList}
       />
       <TodoComponent todoList = {todo}
                      deleteTodo = {updateTodoList}/>
    </div>
  );
}

export default App;
