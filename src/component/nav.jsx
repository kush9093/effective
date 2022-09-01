import { useContext } from "react";
import { DateContext } from "./body";

function Nav({count}) {
    const value = useContext(DateContext)
    console.log("Nav ",value)
    return ( <>
    <div style={{textAlign:"center"}}>
        남은 목표: {count}
        </div>
        <hr /></> );
}

export default Nav;