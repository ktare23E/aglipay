import { Head } from "@inertiajs/react";
import { useMemo, useState } from "react";
import DataTable from "@/components/data-tables";
import AdminLayout from "@/layouts/admin-layout";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

export default function Logs() {

    const columns = [
        "user",
        "logs",
        "date",
    ];

    const [dateRange, setDateRange] = useState([]);

    const rows = useMemo(() => {
        return [
            {
                id: 1,
                user: "Admin",
                logs: "Logged in to the system",
                date: "2026-03-01 08:15 AM",
            },
            {
                id: 2,
                user: "Juan Dela Cruz",
                logs: "Uploaded Wedding Certificate",
                date: "2026-03-01 09:30 AM",
            },
            {
                id: 3,
                user: "Maria Santos",
                logs: "Requested Death Certificate",
                date: "2026-03-02 10:05 AM",
            },
            {
                id: 4,
                user: "Admin",
                logs: "Approved document request (Baptismal)",
                date: "2026-03-02 11:20 AM",
            },
            {
                id: 5,
                user: "Pedro Reyes",
                logs: "Uploaded Baptismal document",
                date: "2026-03-03 01:45 PM",
            },
            {
                id: 6,
                user: "Admin",
                logs: "Rejected document (invalid file)",
                date: "2026-03-04 02:10 PM",
            },
            {
                id: 7,
                user: "Ana Lopez",
                logs: "Updated profile information",
                date: "2026-03-05 03:25 PM",
            },
            {
                id: 8,
                user: "Carlos Mendoza",
                logs: "Downloaded Wedding Certificate",
                date: "2026-03-06 04:00 PM",
            },
            {
                id: 9,
                user: "Admin",
                logs: "Logged out of the system",
                date: "2026-03-07 05:30 PM",
            },
            {
                id: 10,
                user: "Ella Cruz",
                logs: "Submitted request for Baptismal",
                date: "2026-03-08 06:10 PM",
            },
        ];
    }, []);

    // ✅ FILTER LOGIC (DATE RANGE)
    const filteredRows = useMemo(() => {
        return rows.filter(row => {
            if (dateRange.length !== 2) return true;

            const rowDate = new Date(row.date);
            const start = new Date(dateRange[0]);
            const end = new Date(dateRange[1]);

            // include whole end day
            end.setHours(23, 59, 59, 999);

            return rowDate >= start && rowDate <= end;
        });
    }, [rows, dateRange]);

    return (
        <AdminLayout>
            <Head title="System Logs"/>

            <div className="mb-4 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold">System Logs</h1>

                    {/* ✅ DATE RANGE FILTER */}
                    <div className="mt-2 flex gap-3 items-center">

                        <Flatpickr
                            value={dateRange}
                            onChange={(dates) => setDateRange(dates)}
                            options={{
                                mode: "range",
                                dateFormat: "Y-m-d",
                            }}
                            className="border border-gray-300 bg-white px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Select date range"
                        />

                        {/* Clear */}
                        <button
                            onClick={() => setDateRange([])}
                            className="bg-gray-200 px-3 py-2 rounded-lg hover:bg-gray-300"
                        >
                            Clear
                        </button>

                    </div>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Print Report
                </button>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-2xl">
                <DataTable
                    columns={columns}
                    rows={filteredRows}
                    className="text-sm"
                />
            </div>
        </AdminLayout>
    );
}