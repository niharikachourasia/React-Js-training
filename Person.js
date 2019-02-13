
import React from 'react';
import Person from './Person/Person'

class App extends Component {
  state={
    persons:[
      {name:"Acom",age:28},
      {name:"Bcom",age:85},
      {name:"Ccom",age:29}
    ]
  }

  
  /* switchNameHandler=()=>{ */
    switchNameHandler=(newName)=>{
    //console.log("Clicked!")
    //this.state.persons[0].name="niharika"//we cannot mutate state function directly
    this.setState({persons:[
      {name:newName,age:28},
      {name:"Bcom",age:85},
      {name:"Ccom",age:54}
    
    ]})
  }
  changeNamehandler=(event)=>{
    this.setState({persons:[
      {name:"Acom",age:28},
      {name:event.target.value,age:85},
      {name:"Ccom",age:54}
    ]})

  }
  render() {
    return (
      <div className="App">
        {/* <button onClick={this.switchNameHandler}> Switch</button> */}
        {/* <button onClick={this.switchNameHandler.bind(this,"AEvent")}> Switch</button> */}
        <button onClick={this.switchNameHandler.bind(this,"AEvent")}> Switch</button>
          {/* <h2>JSX Content</h2>
          <p>Javascript extensioo</p> */}
          <Person name={this.state.persons[0].name} 
          age={this.state.persons[0].age}></Person>
          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          clicked={this.switchNameHandler.bind(this,"AEvenProp")} I am a children 
          changed={this.changeNamehandler}></Person>
          <Person name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
           </div>
          /* {<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" }*/
         /*  >
            Learn React
          </a>
        </header>
      </div> */
  
    );
  
  }
}
