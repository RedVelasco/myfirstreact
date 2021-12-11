import EmployeeService from "../services/EmployeeService";
import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";


const Employee = () => {
    //hooks
    const [employees, setEmployees] = useState([]);

    //hooks
    useEffect (() => {
        refreshEmployeeTable();
    })

    const refreshEmployeeTable = () => {
        EmployeeService.getEmployees()
        .then(
            response => {
                setEmployees(response.data);
            }
        )
        .catch(
            err => {
                console.log("Something went wrong!");
            }
        )
    }

    const deleteEmployee = (employeeId) =>{
        EmployeeService.deleteEmployee(employeeId)
        .then(
            response => {
                console.log("Sucessfully deleted employee")
                refreshEmployeeTable();
            }
        )
        .catch(
            error => {
                console.log("Something went wrong! AGAIN!", error)
            }
        )
    }

    return (
        <div className="container-fluid">
            <h3> List of Employees</h3>
            <div>
            <table border="1" className="table table-hover table-light"> 
                <thead>
                <tr className="table-danger">
                    <td> Name </td>
                    <td> Department </td>
                    <td> Location </td>
                    <td> Actions </td>
                </tr>
                </thead>
                <tbody>
                    {
                    employees.map(
                        employee => (
                            <tr key= {employee.employeeId}>
                                <td> {employee.name} </td>
                                <td> {employee.department} </td>
                                <td> {employee.location}</td>
                                <div className="d-grip gap-2 d-md-flex">
                                    <Link className="btn btn-primary" to={`/edit/${employee.employeeId}`}> Update </Link>
                                    <button className="btn btn-danger" onClick={(e) => deleteEmployee(employee.employeeId)} > Delete </button>
                                </div>
                            </tr>
                        )
                    )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Employee;