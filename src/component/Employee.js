import React from 'react';
import classes from './Employee.module.css';


const Employee = (props) => {

  return (
    <li className={classes.user}>
        <h2>{props.title}</h2>
        <h3>{props.joinDate}</h3>
        <p>{props.openingText}</p>
    </li>
  );
}

export default Employee;