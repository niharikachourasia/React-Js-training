import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
 import UserOutput from './Person/UserOutput';
 class App extends Component{
   state={
     username:"nihchour"
   }
   render(){
     return(
       <div className="App">
       <header>
       <UserOutput name={this.state.username}/>
       <button onClick={()=>this.clickHandler()}>Click here</button>
       </header>
       </div>

     );
   }
   ClickHandler=(event)=>{
     this.setState({
    username:"niharika"}
  )
   }
 }
 
 export default App;
