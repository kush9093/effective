import { useRef } from "react";
import { useState } from "react";

function Footer({addTodo}) {

    const [todo,setTodo] = useState("");
    const inputref = useRef()
    return ( <div>
        <input type="text" ref={inputref} onChange={(evt)=>{setTodo(evt.target.value)}} />
        <button onClick={()=>{addTodo(todo);inputref.current.value="";setTodo("")}}>추가</button>
    </div> );
}

export default Footer;