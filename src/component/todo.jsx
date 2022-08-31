import {memo} from "react";



const Todo = memo(
function({data,deleteTodo,updateTodo}) {
    return ( <div>
        <label>
        <input type="checkbox" defaultChecked={data.done} onClick={(evt)=>{updateTodo(data.id,evt.target.checked)}} />
        <span>{data.content}</span>
        <input type="button" value="X" onClick={(()=>{deleteTodo(data)})} />
        </label>
    </div> );
}
)
export default Todo;