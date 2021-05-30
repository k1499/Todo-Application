import './App.css';


function TodoComponent({todoList , deleteTodo}){
  
function filterTodo(event){
    event.preventDefault();
    let newArrayState = todoList.filter(todo => todo !== event.target.innerText);
    console.log(newArrayState);
    deleteTodo(newArrayState);
 }
    
 return(
          <div>
            {todoList.map((todo , index)=>{
                                            return(  
                                            <>
                                            <div key = {index} className = "text" onClick = {filterTodo}>{todo}</div>
                                            </>                      
                                            );
                                          } 
                         )
            }
          </div>
         );
}
export default TodoComponent;