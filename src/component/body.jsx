
import React from "react";
import Todo from "./todo";


export const DateContext = React.createContext()



function Body({ todos}) {

    const date = new Date().toISOString().slice(0, 10);



    return (<>
        <DateContext.Provider value={date}>
            <div style={{ height: "50vh" }}>
                {todos && todos.map(one =>
                    <Todo data={one} key={one.id}/>)}
            </div>
        </DateContext.Provider>
        <hr />
    </>);
}



export default Body;