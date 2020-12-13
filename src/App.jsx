import React from 'react';
import './App.css';
// import RouterApp from './config/Router';

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//       <RouterApp/>        
//       </div>
//     )
//   }
// }

class App extends React.Component {
constructor(){
  super()
  this.state = {
    todos : ["maddy","mudassir","faheem"],
    value : ""
  }
}

add_todo =()=>{
  // this.state.todos.push(this.state.value)
  this.setState({
    todos :[...this.state.todos, this.state.value],
    value : ""
  })
}

delete = (index)=>{
this.state.todos.splice(index,1)
this.setState({
  todos : this.state.todos
})
}

deleteAll = ()=>{
 this.setState({
   value : " "
 })
 

}

edit = (index)=>{
  var updated = prompt("Enter value")
  this.state.todos[index] = updated
  this.setState({
    todos : this.state.todos
  })
}
  render(){
    let { todos, value } = this.state;
  return (
    <div style= {{backgroundColor : "gray",textAlign: "center"
   , margin : "10px" ,padding : "10px" , fontFamily : 'serif'}}>
      <input value={value} onChange={(e)=>this.setState({value : e.target.value})} type="text" placeholder="enter value"/>
      <button onClick={this.add_todo}> send data</button>
      <button onClick={this.deleteAll}> Delete All</button>

   <ul>
     {this.state.todos.map((v,i) =>{
       return<li key={i}>{v}
       <button onClick={()=> this.edit(i)}>Edit</button>
       <button onClick={()=> this.delete(i)}>Delete</button>
       </li>
     })}
   </ul>

    </div>
  );
}}

export default App;
