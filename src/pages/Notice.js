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
            <Table columns={columns} data={data} />
            <Footer/>
        </>
    );
}
export default Notice