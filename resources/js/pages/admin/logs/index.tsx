import { Head, Link } from "@inertiajs/react";
import { useMemo } from "react";
import DataTable from "@/components/data-tables";
import AdminLayout from "@/layouts/admin-layout";

export default function Logs() {
    const columns = [
        "user",
        "logs",
        "date",
    ];

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

    return (
        <AdminLayout>
            <Head title="System Logs"/>

            <div className="mb-4 flex justify-between">
                <h1 className="text-xl font-semibold">System Logs</h1>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-4xl cursor-pointer">
                <DataTable
                    columns={columns}
                    rows={rows}
                    className="text-sm"
                />
            </div>
        </AdminLayout>
    );
}