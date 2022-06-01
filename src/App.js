import React, { useState,useEffect,useCallback } from 'react';
// import MovieList from './component/MovieList';
// import AddMovie from './component/AddMovie';
import './App.css';
import AddEmployee from './component/AddEmployee';
import EmployeeList from './component/EmployeeList';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://demoreactpostreq-default-rtdb.firebaseio.com/employee.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const loadedUsers = [];

      for (const key in data) {
        loadedUsers.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          joinDate: data[key].joinDate,
        });
      }

      setUsers(loadedUsers);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);

  async function addUserHandler(movie) {
    const response = await fetch('https://demoreactpostreq-default-rtdb.firebaseio.com/employee.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies.</p>;

  if (users.length > 0) {
    content = <EmployeeList users={users} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddEmployee onAddUsers={addUserHandler} />
      </section>
      {/* <section>
        <button onClick={fetchUserHandler}>Fetch Data</button>
      </section> */}

      <section>
      <button onClick={fetchUserHandler}>Fetch Employee</button>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
