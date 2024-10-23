import { useRef, useState } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';

function App() {
  let [todo, setTodo] = useState([]);
  let idRef = useRef(0);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      content: content,
      isDone: false,
      date: new Date().getTime(),
    };
    setTodo([...todo, newItem]);
    idRef.current += 1;
  };

  const onUpdate = ( targetId ) => {
    setTodo(
      todo.map(e => {
        if ( e.id === targetId ) {
          return {
            ...e,
            isDone: !e.isDone,
          }
        } else {
          return e;
        }
      })
    )
  };

  const onDelete = (targetId) => {
    setTodo(
      todo.filter(e => e.id !== targetId)
    )
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
