import { Head, Link } from "@inertiajs/react";
import { useMemo } from "react";
import DataTable from "@/components/data-tables";
import AdminLayout from "@/layouts/admin-layout";

export default function Documents() {
    const columns = [
        "owner",
        "document_type",
        "date_uploaded",
        "status",
        "action"
    ];

    const rows = useMemo(() => {
        return [
            {
                id: 1,
                owner: "Juan Dela Cruz",
                document_type: "Wedding Certificate",
                date_uploaded: "2026-03-01",
                status: "Approved",
            },
            {
                id: 2,
                owner: "Maria Santos",
                document_type: "Death Certificate",
                date_uploaded: "2026-03-02",
                status: "Pending",
            },
            {
                id: 3,
                owner: "Pedro Reyes",
                document_type: "Baptismal",
                date_uploaded: "2026-03-03",
                status: "Rejected",
            },
            {
                id: 4,
                owner: "Ana Lopez",
                document_type: "Wedding Certificate",
                date_uploaded: "2026-03-04",
                status: "Approved",
            },
            {
                id: 5,
                owner: "Carlos Mendoza",
                document_type: "Death Certificate",
                date_uploaded: "2026-03-05",
                status: "Pending",
            },
            {
                id: 6,
                owner: "Liza Ramos",
                document_type: "Baptismal",
                date_uploaded: "2026-03-06",
                status: "Approved",
            },
            {
                id: 7,
                owner: "Mark Bautista",
                document_type: "Wedding Certificate",
                date_uploaded: "2026-03-07",
                status: "Rejected",
            },
            {
                id: 8,
                owner: "Ella Cruz",
                document_type: "Death Certificate",
                date_uploaded: "2026-03-08",
                status: "Pending",
            },
            {
                id: 9,
                owner: "John Doe",
                document_type: "Baptismal",
                date_uploaded: "2026-03-09",
                status: "Approved",
            },
            {
                id: 10,
                owner: "Jane Smith",
                document_type: "Wedding Certificate",
                date_uploaded: "2026-03-10",
                status: "Approved",
            },
        ];
    }, []);

    return (
        <AdminLayout>
            <Head title="Documents"/>

            <div className="mb-4 flex justify-between">
                <h1 className="text-xl font-semibold">Documents</h1>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-4xl cursor-pointer">
                <DataTable
                    columns={columns}
                    rows={rows}
                    className="text-sm"
                    renderers={{
                        action: (row) => (
                            <div className="space-x-1">
                                <Link
                                    href={route("edit_document_type", row.id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-blue-700"
                                >
                                    edit
                                </Link>
                            </div>
                        )
                    }}
                />
            </div>
        </AdminLayout>
    );
}