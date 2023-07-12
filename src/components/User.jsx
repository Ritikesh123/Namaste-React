import { useEffect, useState } from "react";

const User=({name})=>{
    const [count] = useState(0);
    const [count2]=useState(1);

    useEffect(()=>{
        // API Calls
        }, []);
    return(
        <div className="user-card">
            <h2>Count = {count}</h2>
            <h3>Location : Patna</h3>
            <h4>email : ritikesh.raj04@gmail.com</h4>


        </div>
    )
}

export default User;