import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { SearchField } from "./Search";

export default function Table() {
    const [employees, setEmployees] = useState([]);
    const [peeps, setPeeps] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        // For demonstration purposes, we mock an API call.
        API.getUsers().then((res) => {
            setEmployees(res.data.results);
            setPeeps(res.data.results);
        });
    }, []);

    const handleSearch = ({ target }) => {
        const { value } = target;
        setSearch(value);
        if (!search) setPeeps(employees);
        else {
            const filteredEmployees = employees.filter((emps) => {
                return (
                    emps.name.last.includes(value) ||
                    emps.name.first.includes(value) ||
                    emps.email.includes(value)
                );
            });
            console.log(filteredEmployees);
            setPeeps(filteredEmployees);
        }
    };

    return (
        <>
            <div className="container py-4">
                <SearchField value={search} handleChange={handleSearch} />
            </div>

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
                        {peeps.map((emp) => (
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
                            src="./sslogo.jpg"
                            alt="sslogo"
                            class="rounded"
                            height="50px"
                        />
                    </p>
                </footer>
            </div>
        </>
    );
}
