import React from "react"
// functional component
// function Greet(){
//   return <h1>Hello Ashar</h1>
// }
const Greet = (props) => {
console.log(props)
return <h1>hello {props.name}</h1>
}
export default Greet