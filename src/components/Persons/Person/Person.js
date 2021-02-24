import React,{ Component } from 'react'
import PropTypes from 'prop-types'
// import './Person.css'
// import Radium from 'radium'
// import styled from 'styled-components'
import classes from './Person.css'
import Aux from '../../../higherOrderComponents/Aux'
import withClass from '../../../higherOrderComponents/withClass'

class Person extends Component {
    // for radium
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    // for styled components
    // const StyledDiv = styled.div`
    //         width: 60%;
    //         margin: 16px auto;
    //         border: 1px solid #eee;
    //         box-shadow: 0 2px 3px #ccc;
    //         padding: 16px;
    //         text-align: center;
    //         background-color: yellow;
    //         @media (min-width: 500px) {
    //             width: 450px;
    //         }`

    //now an array, do not need wrapping div
    constructor(props){
      super(props)
      this.inputElementRef = React.createRef();
    }

    componentDidMount(){
      this.inputElementRef.current.focus();
    }
    render(){
      return (
        <Aux>
          <p onClick={this.props.click}>My name is {this.props.name} and my age is {this.props.age}</p>
          <p>{this.props.children}</p>
          <input 
            type="text" 
            onChange={this.props.changed} 
            value={this.props.name}
            ref={this.inputElementRef}/>
        </Aux>
      )
    }
}

// data type - good for bigger teams
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);

 //now an array, do not need wrapping div
//  return [
   
//   <p key="1" onClick={props.click}>My name is {props.name} and my age is {props.age}</p>,
//   <p key="2">{props.children}</p>,
//   <input key="3" type="text" onChange={props.changed} value={props.name}/>

// ]

