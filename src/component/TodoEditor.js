import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = () => {
    let [text, setText] = useState();

     
    return (
        <div className="TodoEditor">
            <h4>할 일 작성하기</h4>
            <div className="editor-wrap">
                <input value={text} placeholder="할 일을 입력해주세요"/>
                <button>확인</button>
            </div>
            
        </div>
    );
};

export default TodoEditor;