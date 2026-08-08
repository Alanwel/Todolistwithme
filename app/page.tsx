'use client';

import { useState,useEffect} from 'react';

// Define the Todo type OUTSIDE the component
type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function Home() {
  // useState INSIDE the component
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  //am creating my first useaeffect
 useEffect(()=>{
   const saved = localStorage.getItem('todos');
   if(saved){
     setTodos(JSON.parse(saved));
   }
 },[])
  //my next useEffect 
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);
  // Handler to add a new todo
  function handleAdd() {
    if (input.trim() === '') return;  // don't add empty
    setTodos([
      ...todos,
      { id: Date.now(), text: input, done: false }
    ]);
    setInput('');  // 
  }

  // Handler to delete a todo
  function handleDelete(id: number) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Handler to toggle done
  function handleToggle(id: number) {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  }

  // The UI (JSX)
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">My Todo List</h1>
      
      {/* Input + Add button */}
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What do you need to do?"
          className="flex-1 px-4 py-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* The list of todos */}
      <div>
        {todos.map(todo => (
          <div key={todo.id} className="flex items-center gap-2 mb-2 bg-white p-3 rounded">
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggle(todo.id)}
            />
            <span className={todo.done ? 'line-through text-gray-400' : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="ml-auto bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
