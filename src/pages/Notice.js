import React from "react";
import {Navigator, Footer} from "../commons/index";
import { useTable } from "react-table";

const data = [
    { No: "1", Title: "doe", Editor: "Admin" },
    { No: "1", Title: "doe", Editor: "Admin" },
    { No: "1", Title: "doe", Editor: "Admin" },
    { No: "1", Title: "doe", Editor: "Admin" },
    { No: "1", Title: "doe", Editor: "Admin" },
    { No: "1", Title: "doe", Editor: "Admin" },
    { No: "1", Title: "doe", Editor: "Admin" }
];

const columns = [
    {
        Header: "공지사항",
        columns: [
            {
                Header: "No",
                accessor: "No"
            },
            {
                Header: "Title",
                accessor: "Title"
            },
            {
                Header: "Editor",
                accessor: "Editor"
            }
        ]
    }
];

const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <table className="board-table" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

const Notice = () => {
    return (
        <>
            <Navigator/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
            <Footer/>
        </>
    );
}
export default Notice