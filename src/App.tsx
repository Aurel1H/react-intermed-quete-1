import { useState } from 'react'
import './App.css'
import EmployeeCard from './components/EmployeeCard';

const sampleEmployee = {
  name: {
    first: 'John',
    last: 'Doe',
  },
  email: 'john.doe@example.com',
  picture: {
    medium: 'https://via.placeholder.com/150',
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);

  const getEmployee = () => {
    // Send the request
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data.results[0]);
      })
  };

  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App;
