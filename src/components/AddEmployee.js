import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import employeeService from "../services/employee.service.js";

const AddEmployee = () => {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [list, setList] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    const saveEmployee = (e) => {

        e.preventDefault();

        const employee = { name, cpf, list, id};
        
        if (id) {
            employeeService.update(employee)
            .then(response => {
                console.log('Employee data updated successfully.', response.data);
                navigate("/");
            })
            .catch(error => {
                console.log('Something went wrong!')
            })
        } else {
            employeeService.create(employee)
                .then(response => {
                    console.log('employee added successfully!', response.data);
                    navigate("/");
                })
                .catch(error => {
                    console.log('something went wroing!', error);
                })
        }
    }

    useEffect(() => {
        employeeService.get(id)
            .then(employee => {
                setName(employee.data.name);
                setCpf(employee.data.cpf);
                setList(employee.data.list);
            })
            .catch(error => {
                console.log('Someting went wrong!', error);
            });
    }, [])

    return (
        <div className="container">
            <h3>Add New Employee!</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="cpf"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        placeholder="Enter cpf"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="list"
                        value={list}
                        onChange={(e) => setList(e.target.value)}
                        placeholder="Enter List"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    );
}

export default AddEmployee
