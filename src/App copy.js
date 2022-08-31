import { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';
import Body from './component/body';
import Footer from './component/footer';
import Header from './component/header';
import {v4} from "uuid";

// 리듀서 정의는 매개변수 2개짜리로 ..
function todoReducer(state,action){
  console.log("state = ",state)
  console.log("action = ",action)
}


function App() {
  const [first,setFirst] = useState(true);
  const [todos,setTodos] = useState([])
  const [num,setNum] = useState([])
  const [] = useReducer(todoReducer,[]);

  useEffect(()=>{
    const todos = localStorage.getItem("todos");
    if(todos){
      setTodos(JSON.parse(todos));
    }
  },[])

    useEffect(()=>{
      if(first){
        setFirst(false);
        return
      }
      localStorage.setItem("todos",JSON.stringify(todos));
      numchd()
    },[todos])


  const chdTodo = useCallback((chdid,evt)=>{

    todos.forEach((elm)=>{
      if(chdid.id === elm.id){
        elm.done = evt
      }
    })
    numchd()
    localStorage.setItem("todos",JSON.stringify(todos));
  })
  const numchd = useCallback(() =>{
    setNum(todos.filter((elm)=>{return elm.done === false}).length)
  })

  const addTodo = useCallback((content) => {
    const newTodo = {id:v4(),content,done: false}
    setTodos([...todos,newTodo])
    numchd()
  })

  const delTodo = (elm)=>{
    const a = todos.findIndex((one)=> one.id === elm.id)
    todos.splice(a,1)
    setTodos([...todos])
  }

  return (
    <div className="App">
      <Header num={num}/>
      <Body todos={todos} chdTodo={chdTodo} delTodo={delTodo}/>
      <Footer addTodo={addTodo} />
    </div>
  );
}

export default App;
