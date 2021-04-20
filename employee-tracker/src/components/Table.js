import React from "react";

export default function Table() {
    return (
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
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    );
}
