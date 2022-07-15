import React from 'react';
import { BsFillPencilFill,BsFillTrashFill,BsFillBagCheckFill } from "react-icons/bs";

const TodosList = ({todos, setTodos , setEditTodo }) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id){
                    return {...item, completed: !item.completed};
                }
                return item;
            })
        );
    };
    const handleEdit = ({ id }) => {
        const findTodo=todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    
  return (
      <div>
{todos.map((todo) => (
     <li className='list-item' key={todo.id}>
         <input
          type="text" 
          value={todo.title} 
          className={'list ${todo.completed ? "complete" : ""}'}
         onChange={(event) => event.preventDefault()}
         />
         <div>
             <button 
             className="button-complete task-button"
             onClick={() => handleComplete(todo)}
             >
                 <BsFillBagCheckFill/>
             </button>
             <button className="button-edit task-button bg-area" onClick={() => handleEdit(todo)} style={{width:"50px",height:"50px"}}  >
                <BsFillPencilFill style={{color:"wheat"}}/>
             {/* <i className="bi bi-pencil" style={{width:"10px",height:"0px"}}></i> */}
             </button>
             <button className="button-delete task-button bg-area" onClick={() => handleDelete(todo)}>
                 <BsFillTrashFill style={{color:"wheat"}}/>
             </button>
         </div>
         </li>
 ))}
 </div>
);
  };

export default TodosList;
