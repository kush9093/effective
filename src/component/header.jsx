import { useMemo } from "react";

function dayDisplay() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth()+1
    const day = today.getDate();
    const dd = today.getDay();
    const weeks = ["일","월","화","수","목","금","토"]

    return {date:year+"년 "+month+"월 "+day+"일 ",day:weeks[dd]+"요일"}
}


function Header({num}) {

    const txt = useMemo(()=>{
        return dayDisplay()
    },[])

    return ( <>   
     <div>
    <h1>{txt.date}</h1> 
    <h3 style={{color:"gray"}}>{txt.day}</h3> 
    </div>
    <div>
        남은 목표 : {num}
    </div>
    <hr />
    </>

    );
}

export default Header;