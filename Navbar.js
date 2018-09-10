import React from "react"

//class Navbar extends react.Component {

//}

const Navbar = props =>{
    return (
        <div>
            <span>title</span>
            <span>Click an image to begin!</span>
            <span>Score: {props.score}</span>
            <span>top Score: {props.topScore}</span>
        </div>
    )
}
export default Navbar