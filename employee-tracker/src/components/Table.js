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
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => (
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
