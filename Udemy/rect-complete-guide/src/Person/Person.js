import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <strong onClick={props.click}> My name is {props.name} and I am {props.age} years old.</strong>
            <div>
                {props.children}
            </div>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;