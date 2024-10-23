import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState(""); 

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const todoListGetResult = () => {
        return search === "" 
            ? todo 
            : todo.filter(e => e.content.toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <div className="TodoList">
            <h4>할 일</h4>
            <div className="search-wrap">
                <input value={search} onChange={onChangeSearch} placeholder="할 일 검색" />
            </div>
            
            <div className="todoItem-wrap">
                {todoListGetResult().map(e => (
                    <TodoItem key={e.id} {...e} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>

        </div>
    );
};

export default TodoList;