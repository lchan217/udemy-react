import React from 'react'
// import './Person.css'
// import Radium from 'radium'
import styled from 'styled-components'

const person = (props) => {
    // for radium
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    // for styled components
    const StyledDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
            background-color: yellow;
            @media (min-width: 500px) {
                width: 450px;
            }`

    return (
        // <div className="Person" style={style}>
        <StyledDiv>
            <p onClick={props.click}>My name is {props.name} and my age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
        // </div>
    )
}

export default person;