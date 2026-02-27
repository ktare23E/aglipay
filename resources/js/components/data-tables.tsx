import React, { useEffect, useRef } from "react";

export default function DataTable({
    columns = [],
    rows = [],
    className = "",
    renderers = {},
}) {
    const tableRef = useRef(null);

    const formatHeader = (column) =>
        column
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

    useEffect(() => {
        if (!tableRef.current) return;

        //Intialize dataTable after mount
        const table = $(tableRef.current).DataTable();

        return () => {
            table.destroy()
        }
    },[])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-collapse text-left"
            ref={tableRef}
            id="myTable">
                <thead className="bg-gray-200">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="px-4 py-2 border whitespace-nowrap"
                            >
                                {formatHeader(column)}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className={className}>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="px-4 py-2 border whitespace-nowrap"
                                >
                                    {renderers[column]
                                        ? renderers[column](row)
                                        : row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}