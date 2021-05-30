import {useState} from "react";
import './App.css';
export default function Form({Todo , updateState}){
    //This State updated  on every 'onChange' event
    const [trackingTodo , changeTodo] = useState('');
    return(
          <form
             onSubmit = {(event)=>{
                               event.preventDefault();
                               if(trackingTodo !== '' && Todo.length < 5){
                                  updateState([...Todo,trackingTodo]);
                               }
                               changeTodo('');      
                             }
                        }
           >
             <input
               className = "formStyle"
               type = "text"
               value = {trackingTodo}
               placeholder = "Enter here"
               onChange = {(event)=>{
                                 event.preventDefault();
                                 changeTodo(event.target.value);
                                }
                          }
             />
             <button type = "submit" className = "buttonStyle">
               Submit
             </button>
           </form>
           );
  }