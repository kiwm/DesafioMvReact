import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import employeeService from "../services/employee.service.js";
import { Link } from "react-router-dom"

const EmployeesList = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    employeeService.getAll()
      .then(response => {
        console.log('Printing the employees data', response.data)
        setEmployees(response.data)
      })
      .catch(error => {
        console.log('Something went wrong', error)
      })
  }, [])

  return (
    <div className="container">
      <h3>List of Employees</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <td>Name</td>
              <td>Cpf</td>
              <td>List</td>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.cpf}</td>
                  <td>{employee.list}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeesList;
