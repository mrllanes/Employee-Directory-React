import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { SearchField } from "../components/Search";

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

    //     const filterEmployee =
    // const [pokedex, setPokedex] = useState(limitedPokedex);
    const [search, setSearch] = useState("");

    // const handleSearch = ({ target }) => {
    //     const { value } = target;
    //     setSearch(value);
    //     if (!search) setPokedex(limitedPokedex);
    //     else {
    //       const filteredPokedex = limitedPokedex.filter((pokemon) => {
    //         return pokemon.name.english.includes(value) || pokemon.type.includes(value)
    //       });
    //       setPokedex(filteredPokedex);
    //     }
    // };

    return (
        <>
            <div className="container py-5">
                <SearchField value={search} handleChange={handleSearch} />
                <div className="row">
                    {employees.map((people) => (
                        <div key={people.id} className="col-3 my-5">
                            <setEmployees
                                lastNames={people.name.last}
                                firstNames={people.name.first}
                                emails={people.email}
                            />
                        </div>
                    ))}
                </div>
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
                        <img src="./sslogo.jpg" class="rounded" height="50px" />
                    </p>
                </footer>
            </div>
        </>
    );
}
