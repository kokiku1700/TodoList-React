import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, date, onUpdate, onDelete }) => {
    const onChangeChecked = () => {
        onUpdate(id);
    }
    
    const onClickDelete = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <div className="todoItem-checkBox"><input type="checkbox" checked={isDone} onChange={onChangeChecked} /></div>
            <div className="todoItem-title">{content}</div>
            <div className="todoItem-date">{new Date(date).toLocaleDateString()}</div>
            <div className="todoItem-cancel"><button onClick={onClickDelete}>삭제</button></div>
        </div>
    )
};

export default TodoItem;