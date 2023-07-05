import React from "react";

class UserClass extends React.Component{


    constructor (props){
    super(props)
    // console.log(props)

    this.state={
        userInfo:{
            name:"Ritikesh",
            location:"Default",
            
        }
       
      };
      console.log(this.props.name+ " Child Constructor")

    };
    
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Ritikesh123");
        const json= await data.json();

        this.setState({
            userInfo:json,
        });

        console.log(json);
        console.log(this.props.name+ " Child will be mounted")
    }

    componentDidUpdate(){
        console.log("component Did Update");
    };

    componentWillUnmount(){
        console.log("component Will Unmount");
    };

    render(){
    
        const{name, location, bio, avatar_url} = this.state.userInfo;
      

        console.log(this.props.name+ " Child render")


        return(
            <div className="user-card">
                <img src = {avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>{bio}</h4>
    
    
            </div>
        );
    };
};

export default UserClass;