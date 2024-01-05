import { useState } from "react"

const User=(props)=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return (
        <div className="user-card">
        <h2>count:{count}</h2>
        <h2>count2:{count2}</h2>
        <h2>{props.name}</h2>
        <h3> {props.email}</h3>
        <h4> Location:Delhi</h4>
        </div>
        
    )
}
export default User