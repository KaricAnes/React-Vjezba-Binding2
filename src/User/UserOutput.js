//Bilo koju komponentu da kreiramo, moramo importovati react


import './User.css';
//UserOutput two paragraphs

import React from 'react';




const output = (props) => {

    return(

        <div className= "User">
    





               <p onClick = {props.click}>Cao prijatelji, ja sam {props.userName}</p>
                   
                <p>Zapamtite to ime {props.userName}</p>

                <h3>{props.children}</h3>




        </div>


        );
}


export default output;