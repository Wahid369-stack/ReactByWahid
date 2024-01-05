// import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent consyructor")

    }
    componentDidMount(){
        // console.log("parent did mount")
    }
    render(){
        //  console.log("parent render")
        return (
            <div>
                <h1>About us</h1>
                <div>
                    loggedIn User
            <UserContext.Consumer>
                {
                ({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>
                }
            </UserContext.Consumer>
                </div>
                <h2>This Wahid pains to learn react to earn paesa and generate interest on tech stack</h2>
                {/* <User name={"Wahid"} email={"wahidurrahman998@gmail.com"} location={"Delhi"}/> */}
                <UserClass name={"Wahid(from class)"} email={"wahidurrahman998@gmail.com (from class)"} location={"Delhi (from class)"}/>
            </div>
        )

    }


}


export default About;