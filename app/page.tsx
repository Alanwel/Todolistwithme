'use client';

import { useState } from 'react';
type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export default function Home(){
const [todos, setTodos] = useState<Todo[]>([]); 
const [input, setInput] = useState('');           
function addhandler(){
if(input.trim()==='')return;
  setTodos([...todos,id:Date.now(),text:input,done: false]);
  setInput('');
}
function deletehandler(id:number){
setTodos(todo.filter(todo=>todo.id!==id));
}
  return(
    <div ClassName = "min-h-screen bg-gray-100 p-8"> 
    <h1> My TodoList app</h1>
      <p>developed by allan day coding</p>
      <input value ={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={addhandler}>add me </button>
      {todos.map(todo =>(
      <div key ={todo.id }>
        {todo.text}
        <button onClick={()=>deletehandler(todo.id)}>Delete</button>
      </div>
      ))}
    </div>
  );
}

  
