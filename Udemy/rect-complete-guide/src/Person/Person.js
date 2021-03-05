import React from 'react';
//import './Person.css';
//import Radium from '../../node_modules/radium/es/index';
import styled from '../../node_modules/styled-components/dist/styled-components.cjs';

const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 2px #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width: 500px) {}
    width: 450px;
}
`

const person = (props) => {
    /* const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    } */

    return (
        //<div className="Person" style={style}>
        <StyledDiv>
            <strong onClick={props.click}> My name is {props.name} and I am {props.age} years old.</strong>
            <div>
                {props.children}
            </div>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
        //</div>
    )
}
 
//export default Radium(person);
export default person;