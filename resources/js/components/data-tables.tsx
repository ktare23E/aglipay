import React, { useEffect, useRef } from "react";

type DataTableProps<RowType extends Record<string, any>> = {
    columns: readonly string[];
    rows: RowType[];
    className?: string;
    renderers?: Partial<
        Record<string, (row: RowType) => React.ReactNode>
    >;
};

export default function DataTable<RowType extends Record<string, any>>({
    columns,
    rows,
    className = "",
    renderers = {},
}: DataTableProps<RowType>) {
    const tableRef = useRef<HTMLTableElement | null>(null);

    const formatHeader = (column: string) =>
        column
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

    useEffect(() => {
        if (!tableRef.current) return;

        const table = $(tableRef.current).DataTable();

        return () => {
            table.destroy();
        };
    }, []);

    return (
        <div className="overflow-x-auto">
            <table
                ref={tableRef}
                className="min-w-full table-auto border border-collapse text-left"
            >
                <thead className="bg-gray-200">
                    <tr>
                        {columns.map((column) => (
                            <th key={column} className="px-4 py-2 border">
                                {formatHeader(column)}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className={className}>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((column) => (
                                <td key={column} className="px-4 py-2 border">
                                    {renderers[column]
                                        ? renderers[column]!(row)
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