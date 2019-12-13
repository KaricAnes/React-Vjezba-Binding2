//UserInput should hold an input elemen
//Bilo oju komponentu kad kreiramo, moramo u nji importovati react
import React from 'react';

const input = (props) =>{

const inputStyle = {

border: '2px solid red'

};


    return(

        <div className = "Inp">

        
        <input type = "text"
         onChange = {props.changed}
         value = {props.currentName}
         style = {inputStyle}
          />





        <input type = "text" onChange = {props.changed1} value = {props.UserName} />



        </div>
    );
}



export default input;