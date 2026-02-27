import { Head,Link } from "@inertiajs/react";
import { useMemo } from "react";
import DataTable from "@/components/data-tables";
import AdminLayout from "@/layouts/admin-layout";
import CreateLink from "@/components/create-link";


export default function Documents({documentTypes}) {
    const columns = [
        "document_type",
        "status",
        "action"
    ];

    const rows = useMemo(() => {
        return documentTypes.map((type) => ({
            id : type.id,
            document_type : type.name,
            status : type.status,
        }))
    },[documentTypes]);


    return (

        <AdminLayout>
            <Head title="Documents"/>

            <div className="mb-4 flex justify-between">
                <h1 className="text-xl font-semibold">Document Types</h1>
                <CreateLink routeName="create_document_type" label='Create Document Type'/>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-4xl cursor-pointer">
                <DataTable
                    columns={columns}
                    rows={rows}
                    className="text-sm"
                    renderers={{
                        action : (row) => (
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
                >

                </DataTable>
            </div>
        </AdminLayout>
    );
}
