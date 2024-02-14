import { useState } from "react"

const User = ()=>{
    const [count] = useState(0)
    const [count1] = useState(1)
    return(
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h1>Count : {count1}</h1>
            <h1>Nisham fn Component</h1>
            <h2>Kannur fn Component</h2>           
        </div>
    )
}

export default User