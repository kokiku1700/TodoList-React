import "./TodoItem.css";

const TodoItem = () => {
    return (
        <div className="TodoItem">
            <div className="todoItem-checkBox"><input type="checkbox" /></div>
            <div className="todoItem-title">할 일</div>
            <div className="todoItem-date">{new Date().toLocaleDateString()}</div>
            <div className="todoItem-cancel"><button>삭제</button></div>
        </div>
    )
};

export default TodoItem;