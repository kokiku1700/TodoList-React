import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div className="TodoList">
            <h4>할 일</h4>
            <div className="search-wrap">
                <input />
                <button>검색</button>
            </div>
            
            <div className="todoItem-wrap">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>

        </div>
    );
};

export default TodoList;