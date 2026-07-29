'use client';

import { useState } from 'react';
type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export default function home(){
const [todos, setTodos] = useState<Todo[]>([]); 
const [input, setInput] = useState('');           


}

