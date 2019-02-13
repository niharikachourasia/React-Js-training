import React,{Component} from 'react';

class UserInput extends Component{
    render(){
        return(
            <div>
            <header> User Input </header>
            <input type="text" value={props.firstname}>User Name</input>
            </div>
        )
        
    }
}
