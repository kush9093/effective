import { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from './component/header';
import { v4 } from "uuid";

// 리듀서 정의는 매개변수 2개짜리로 ..
function todoReducer(state, action) {
  console.log("state = ", state)
  // console.log("action = ", action)
  console.log(action)
  switch (action.type) {
    case "init":
      return JSON.parse(action.raw)
    case "add":
      if(action.content!==""){
      const one = { id: v4(), content: action.content, done: false };
      return [...state, one]
    } else {
      return [...state]
    }
    case "delete":
      const filterd = state.filter((one) => { return one.id !== action.target.id });
      return filterd
    case "update":
    return state.map((one)=>{
      if(one.id === action.target){
        one.done = action.flag
      }
      return one
    })
  }
}


function App() {

  const [count, setCount] = useState(0)
  const [todos, todosDispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    console.log("todos =>", todos)

    todosDispatch({type:"init",raw:localStorage.getItem("todos")??"[]"})

  }, [])

  useEffect(() => {
    setCount(todos.filter((elm)=>{return elm.done === false}).length)
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  const addTodo = (content) => {
    todosDispatch({type:"add",content:content});
  }

  const deleteTodo = useCallback((id) => {
    todosDispatch({type:"delete",target:id})
  })

  const updateTodo = useCallback((id,done) =>{
    todosDispatch({type:"update",target:id,flag:done})
  })

 

 
  return (
    <div className="App">
      <Header num={count} />
      <Body todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      <Footer addTodo={addTodo} />
    </div>
  );
}

export default App;
