import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function Table() {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        API.getUsers().then((res) => {
            console.log(res.data.results);
            setEmployees(res.data.results);
            console.log("Employees:");
            console.log(employees);
        });
    }, []);

    return (
        <div className="container">
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Username</th>
                        <th scope="col">SS#</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr>
                            <th scope="row">
                                <button type="button">
                                    <img
                                        alt={emp.name.last}
                                        className="img-fluid"
                                        src={emp.picture.medium}
                                        data-toggle="popover"
                                        title="Click for Extra Info"
                                        data-content={emp.gender}
                                        {...emp.dob.age}
                                    />
                                </button>
                            </th>
                            <td>{emp.name.last}</td>
                            <td>{emp.name.first}</td>
                            <td>{emp.email}</td>
                            <td>{emp.cell}</td>
                            <td>{emp.login.username}</td>
                            <td>{emp.id.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <footer className="justify-content-center">
                <p>
                    &copy; 2020{" "}
                    <img
                        src="./assets/images/sslogo.jpg"
                        class="rounded"
                        height="50px"
                    />
                </p>
            </footer>
        </div>
    );
}
