import React, { useEffect, useRef }from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  // const toggleBtnRef = React.createRef() - for class components

  // refs for functional
  const toggleBtnRef = useRef(null)
  // toggleBtnRef.current.click() - can't call it here bc it's not defined yet, do it in useEffect

  useEffect(() => {
    // executes for every render unless you say in second arg...
    // now only runs when props.person changes
    // http request
    toggleBtnRef.current.click()
  }, [props.persons]);
  

    const assignedClasses = []
    let btnClass = ''

    if(props.showPersons){
      btnClass = classes.Red
    }

    if(props.persons.length <= 2){
      assignedClasses.push(classes.red)
    }

    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi there!</h1>
            <p className={assignedClasses.join(' ')}>It's really working!</p>
            <button ref={toggleBtnRef} 
            className={btnClass}
            alt={props.showPersons}
            onClick={props.clicked}>Switch Name</button>
        </div>
    );
};

export default cockpit;