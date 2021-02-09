import React, { Component } from 'react';
// import React, { useState } from 'react'
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Lizzie", age: 31 },
      { name: "Christopher", age: 33 },
      { name: "Claire", age: 32 }
    ],
    otherState: 'some other value'
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

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Lizzie", age: 65 },
        { name: event.target.value, age: 100 },
        { name: "Claire", age: 72 }
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there!</h1>
        <p>Everything must be included in App div</p>
        <button onClick={() => this.switchNameHandler('Marie')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Chris!')}
          changed={this.nameChangedHandler}>My Hobbies: Reading</Person>
          {/* Note: Use bind syntax when you can) */}
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
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