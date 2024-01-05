import React from "react";
// import { json } from "react-router-dom";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
          userInfo:{
                name:"dummy",
                location:"Delhi"
          }
        }
        
    }
    async componentDidMount(){
        
        const data=await fetch("https://api.github.com/users/Wahid369-stack");
        const json=await data.json();
        // console.log(json)
        this.setState({
            userInfo:json
        })
    }
    componentDidUpdate(){
        // console.log("componentDidUpdate")
    }
    componentWillUnmount(){
        // console.log("componentWillUnmount")
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card"> 
            <img src={avatar_url}></img>    
            <h2>Name: {name}</h2>
            <h4> Location:{location}</h4>
            </div>
            
        )
    }
}
export default UserClass;