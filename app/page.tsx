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
function deletehandler(){

}
}


  function handleDelete(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1>My Todo List</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
      }
