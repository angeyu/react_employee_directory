import React from "react";
import './content.css';
import getEmployee from './API'

function Content(props) { console.log(getEmployee.results)
  return (
   
    <table className= "col-8">
      <thead>
        <tr>
          <th scope="col">{props.library}</th>
          <th scope="col">Name</th>
          <th scope="col">Phone#</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">call in pic?</td>
          <td>name</td>
          <td>Phone</td>
          <td>email</td>
        </tr>
      </tbody>
    </table>
  );
}



export default Content;


