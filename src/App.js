import React, { Component } from 'react';
import Outa from './User/UserOutput';
import Inpa from './User/UserInput';

import './App.css';




class App extends Component {

  state = {

    persons: [
    
    {userName: 'Demir'},
    {userName : "Anes"},
    {userName : "Muha"}
    
    
    ]
    }


   changeUserName = (newUsrName) => {

    this.setState({

      persons:[

      //Koliko me samo izjebalo sto je pisalo name umjesto userName
      {userName: "Bunjo"},
      {userName: 'Adis'},
      {userName : newUsrName}
      
            
      ]
    
    
    
    
    
    })}


    promijenjenoIme = (event) =>  {

      this.setState({
        persons: [
        {userName:  event.target.value},
        {userName : "Mama" /*event.target.value*/},
        {userName : "Rejhi"}
        
        ]
      
      })
      }
    
      promijenjenoIme2 = (event2) =>  {

        this.setState({
          persons: [
          {userName:  "Babo"},
          {userName : "Mama" /*event.target.value*/},
          {userName : event2.target.value}
          
          ]
        
        })
        }







  render(){


    const style = {

      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      
      
      
      };




    return(

    <div className="App">
     



    <button style = {style} onClick = {this.changeUserName.bind(this, 'Duro')}>Switch Name</button>




  
  <Outa userName = {this.state.persons[2].userName}/>







   <Outa
       userName = {this.state.persons[1].userName}
       
       click = {this.changeUserName.bind(this, 'Max')}>aaaaaaaa </Outa>
       




    <Outa userName = {this.state.persons[0].userName}/>
       

  
    <Inpa
      
       changed = {this.promijenjenoIme} 
       currentName={this.state.userName}/>       
        


        <Inpa
      
      changed1 = {this.promijenjenoIme2}
         >aaaaaa
       </Inpa>


     
    </div>


    );
  }
}

export default App;
