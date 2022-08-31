
import Todo from "./todo";

function Body({ todos,deleteTodo,updateTodo }) {

    return (<>
        <div style={{height:"50vh"}}>
        {todos && todos.map(one=> <Todo data={one} key={one.id} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)}
        </div>
        <hr />
    </>);
}

export default Body;