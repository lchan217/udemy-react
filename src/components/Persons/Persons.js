import React, { PureComponent } from 'react';
import AuthContext from './context/auth-context'

import Person from './Person/Person'

class Persons extends PureComponent {
  render(){
    return <AuthContext.Consumer>
      {(context) => this.props.persons.map((person, index) => {
      return (
        <Person
        key={person.id}
        name={person.name} 
        age={person.age}
        click={() => this.props.clicked(index)}
        changed={(event) => this.props.changed(event, person.id)}
        isAuth={this.props.isAuthenticated}       
      />
      )
    })}
    </AuthContext.Consumer>
  }
} 

export default Persons;