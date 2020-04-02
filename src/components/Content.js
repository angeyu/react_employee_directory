import React from "react";
import './content.css';
import getEmployee from '../utils/API'


function Content(props) { console.log(getEmployee.results)

  return (
    <>
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search by last name"></input>
    <button>Sort by first name A-Z</button>

    <table className= "col-8">
      <thead>
        <tr>
          <th scope="col">pic</th>
          <th scope="col">Name</th>
          <th scope="col">Phone#</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <tr key = {employee.id.value}>
              <td><img src={employee.picture.thumbnail}/></td>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
          </tr>

        ))}
      </tbody>
    </table>
    </>
  );
}



export default Content;


