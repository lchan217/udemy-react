import React, { Component } from 'react';
// import React, { useState } from 'react'
import './App.css';
// import Radium, { StyleRoot }from 'radium';
// import styled from 'styled-components'
import Person from './Person/Person';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? '#FA8072' : '#CFDBC5'};
//   font: inherit;
//   border: 1px solid #000000;
//   border-radius: 8px;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'orange' : '#ccc'};
//     color: gray;
//   }
// `
class App extends Component {
  state = {
    persons: [
      { id: 'asdf', name: "Lizzie", age: 31 },
      { id: '23a', name: "Christopher", age: 33 },
      { id: 'aw1', name: "Claire", age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 65 },
        { name: "Chris", age: 100 },
        { name: "Claire", age: 72 }
      ] 
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) =>{
    // both ways are immutable
    // const persons = this.state.persons.slice()

    const persons = [...this.state.persons]

    // delete person from persons
    persons.splice(personIndex, 1)

    // set state with deleted person
    this.setState({persons: persons})

  }

  render() {
    // not global, scoping
    // const style = {
    //   backgroundColor: '#CFDBC5',
    //   // also valid: 'background-color': 'white',
    //   font: 'inherit',
    //   border: '1px solid #000000',
    //   borderRadius: '8px',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // from radium
    //   // ':hover': {
    //   //   backgroundColor: 'yellow',
    //   //   color: 'pink'
    //   // }
    // };

    // recommended way (vs ternary in return)
    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name} 
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
        </div>
      );

      // style.backgroundColor = '#FA8072'
      // style[':hover'] = {
      //   backgroundColor: 'yellow',
      //   color: 'pink'
      // }


    }

    const classes = []

    if(this.state.persons.length <= 2){
      classes.push('red')
    }

    if(this.state.persons.length <= 1){
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p className={classes.join(' ')}>It's really working!</p>
        <button class="button"
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'does this work?'))
  }
}

export default App;

// const app = props => {
//   const [personState, setPersonsState] = useState({
//     persons: [
//       { name: "Lizzie", age: 31 },
//       { name: "Christopher", age: 33 },
//       { name: "Liz", age: 32 }
//     ],
//     otherState: 'some other value'
//   });

//   const [otherState, setOtherState] = useState('some other value')

//   console.log(personState, otherState)

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Elizabeth", age: 65 },
//         { name: "Chris", age: 100 },
//         { name: "Liz", age: 32 }
//       ] 
//       // otherState: 'some other value' // if not added, it will just be deleted
//     })

//   }

//   return (
//     <div className="App">
//       <h1>Hi there!</h1>
//       <p>Everything must be included in App div</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person 
//         name={personState.persons[0].name} 
//         age={personState.persons[0].age}/>
//       <Person 
//         name={personState.persons[1].name} 
//         age={personState.persons[1].age}
//         click={switchNameHandler}>My Hobbies: Reading</Person>
//       <Person 
//         name={personState.persons[2].name} 
//         age={personState.persons[2].age}/>
//     </div>

//   );
// }

// export default app;