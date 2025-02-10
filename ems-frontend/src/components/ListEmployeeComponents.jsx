import React, { useState, useEffect } from "react";
import { listEmployees } from "../services/EmployeeService";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponents = () => {

  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addNewEmployee(){
    navigator("/add-employee")
  }

  return (
    <div className="container">
      <h2 className="text-center mt-4">List of Employees</h2>
      <button className="btn btn-secondary mb-4" onClick={addNewEmployee}>+ Add Employee</button>
      <table className="table table-striped table-dark table-hover table-rounded">
        <thead>
          <tr>
            <th className="w-25 p-3 fs-5 text-center">ID</th>
            <th className="w-25 p-3 fs-5 text-center">First Name</th>
            <th className="w-25 p-3 fs-5 text-center">Last Name</th>
            <th className="w-25 p-3 fs-5 text-center">Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponents;
