import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const {employeeId} = useParams();

    const saveEmployee = (e) => {
        e.preventDefault(); //To prevent refresh
        const employee = {employeeId, name, location, department};

        if (employeeId){
            //Update Employee
            EmployeeService.putEmployee(employee) //Promise
            .then(response => {
                console.log("Employee updated! FINALLY");
                navigate("/employees");
            })
            .catch(error => {
                console.log("Something went wrong, oh noes")
            })
        }
        else {
            //Add Employee
            EmployeeService.postEmployee(employee) //Promise
            .then(response => {
                console.log("Employee Added! FINALLY");
                navigate("/employees");
            })
            .catch(error => {
                console.log("Something went wrong, oh noes")
        })
        }
    }

    useEffect(
        () => {
            if (employeeId){
                EmployeeService.getEmployee(employeeId)//promise
                .then(
                    response => {
                        setName(response.data.name);
                        setLocation(response.data.location);
                        setDepartment(response.data.department);
                    }
                )
                .catch(
                    error => {
                        console.error("may gahd may mali nanaman")
                    }
                )
            } 
        },[]
    )

    return (
        <div className = "container-fluid">
            <h3>Add Employee</h3>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Input employee name"
                    onChange={
                        (e) => setName(e.target.value)
                    }
                    />  
                </div>

                <div className="mb-3">
                    <label for="location" className="form-label">Location</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="location" 
                    placeholder="Input employee Location"
                    onChange={
                        (e) => setLocation(e.target.value)
                    }
                    />  
                </div>

                <div className="mb-3">
                    <label for="department" className="form-label">Department</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="department" 
                    placeholder="Input employee Department"
                    onChange={
                        (e) => setDepartment(e.target.value)
                    }
                    />  
                </div>
               
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={(e) => saveEmployee(e)}> Save </button>
            </form>
        </div>
    )
}
export default AddEmployee;