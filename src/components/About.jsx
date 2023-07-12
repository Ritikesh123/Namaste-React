import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component{

constructor(props){
    super(props);
    // console.log("Parent Constructor");
}

    componentDidMount(){
        // console.log("Parent will be mounted");
    }
    render(){
    // console.log("Parent render");

        return (
            <div>
                <h1>About</h1>
                <h2>This is namaste react web series</h2>
    
               
            <UserClass name={"Ritikesh Raj"} Location={"Anisabad Patna"} email={" ritikesh.raj04@gmail.com"}/>
            {/* <UserClass name={"Elon Musk"} Location={"US Texas"} email={" elon_mask@hotmail.com"}/> */}

            </div>
        )
    }
}



export default About;