import { Head, Link } from "@inertiajs/react";
import { useMemo, useState } from "react";
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

    const document_types = [
        "All",
        "Wedding Certificate",
        "Birth Certificate",
        "Death Certificate",
        "Baptismal"
    ];

    // ✅ Generate years (1920 → current)
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 1920 + 1 },
        (_, i) => 1920 + i
    );

    const [selectedType, setSelectedType] = useState("All");
    const [startYear, setStartYear] = useState("");
    const [endYear, setEndYear] = useState("");

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

    // ✅ FILTER LOGIC
    const filteredRows = useMemo(() => {
        return rows.filter(row => {
            const rowYear = new Date(row.date_uploaded).getFullYear();

            const matchType =
                selectedType === "All" || row.document_type === selectedType;

            let matchDate = true;

            if (startYear && endYear) {
                matchDate =
                    rowYear >= Number(startYear) &&
                    rowYear <= Number(endYear);
            } else if (startYear) {
                matchDate = rowYear >= Number(startYear);
            } else if (endYear) {
                matchDate = rowYear <= Number(endYear);
            }

            return matchType && matchDate;
        });
    }, [rows, selectedType, startYear, endYear]);

    return (
        <AdminLayout>
            <Head title="Documents"/>

            {/* HEADER */}
            <h1 className="text-xl font-semibold">Documents</h1>

            <div className="mb-4 flex justify-between items-center">
                <div>

                    {/* ✅ FILTER BAR */}
                    <div className="flex gap-3 mt-3 flex-wrap">

                        {/* Document Type */}
                        <select
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="border border-gray-300 bg-white px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {document_types.map((type, index) => (
                                <option key={index} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>

                        {/* Start Year */}
                        <select
                            value={startYear}
                            onChange={(e) => setStartYear(e.target.value)}
                            className="border border-gray-300 bg-white px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Start Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        {/* End Year */}
                        <select
                            value={endYear}
                            onChange={(e) => setEndYear(e.target.value)}
                            className="border border-gray-300 bg-white px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">End Year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        {/* Clear Filters */}
                        <button
                            onClick={() => {
                                setSelectedType("All");
                                setStartYear("");
                                setEndYear("");
                            }}
                            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
                        >
                            Clear
                        </button>

                    </div>
                </div>

                {/* PRINT BUTTON */}
                <div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        Print Report
                    </button>
                </div>
            </div>

            {/* TABLE */}
            <div className="p-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-2xl">
                <DataTable
                    columns={columns}
                    rows={filteredRows}
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