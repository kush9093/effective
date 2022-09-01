import { useContext } from "react";
import { memo } from "react";
import { Store } from "../App"
import { DateContext } from "./body";
import Label from "./Label";

const Todo = memo(
    function ({ data }) {
        
        // const actions = useContext(Store)
        // console.log(actions);
        const { updateTodo, deleteTodo } = useContext(Store);
        
        const ctx = useContext(DateContext)


        return (<div>
            <label>
                <input type="checkbox" defaultChecked={data.done} onClick={(evt) => { updateTodo(data.id, evt.target.checked) }} />
                <span>{data.content}</span>
            </label>
            <small>{ctx}</small>
            <input type="button" value="X" onClick={(() => { deleteTodo(data) })} />
            <Label />

        </div>);
    }
)
export default Todo;