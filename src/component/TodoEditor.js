import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
    let [text, setText] = useState("");
    let inputRef = useRef();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = () => {
        if ( !text ) {
            inputRef.current.focus();
            return;
        }
        onCreate(text);
        setText("");
    } 

    return (
        <div className="TodoEditor">
            <h4>할 일 작성하기</h4>
            <div className="editor-wrap">
                <input value={text} ref={inputRef} onChange={onChange} placeholder="할 일을 입력해주세요"/>
                <button onClick={onSubmit}>확인</button>
            </div>
            
        </div>
    );
};

export default TodoEditor;