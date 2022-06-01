import React from 'react';
import Movie from './Employee';
import Employee from './Employee';
import classes from './EmployeeList.module.css';


const EmployeeList = (props) => {
  return (
    <ul className={classes['users-list']}>
      {props.users.map((user) => (
        <Employee
          key={user.id}
          title={user.title}
          joinDate={user.joinDate}
          openingText={user.openingText}
        />
      ))}
    </ul>
  );
}

export default EmployeeList;