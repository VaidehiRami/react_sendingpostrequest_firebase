import React,{useRef} from 'react';
import classes from './AddEmployee.module.css';

function AddEmployee(props) {
    const empName = useRef('');
    const empDesigination = useRef('');
    const joiningDate = useRef('');
    function submitHandler(event) {
        event.preventDefault();
        const movie = {
          title: empName.current.value,
          openingText: empDesigination.current.value,
          joinDate: joiningDate.current.value,
        };
    
        props.onAddUsers(movie);
      }
    

  return (
    <form onSubmit={submitHandler}>
    <div className={classes.control}>
      <label htmlFor='title'>Employee Name</label>
      <input type='text' id='title' ref={empName} />
    </div>
    <div className={classes.control}>
      <label htmlFor='opening-text'>Desigination</label>
      <textarea rows='5' id='opening-text' ref={empDesigination}></textarea>
    </div>
    <div className={classes.control}>
      <label htmlFor='date'>Joining Date</label>
      <input type='text' id='date' ref={joiningDate} />
    </div>
    <button>Add Employee</button>
  </form>
  );
}

export default AddEmployee;