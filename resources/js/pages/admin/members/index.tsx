import { Head,Link } from "@inertiajs/react";
import { useMemo } from "react";
import DataTable from "@/components/data-tables";
import AdminLayout from "@/layouts/admin-layout";
import CreateLink from "@/components/create-link";


export default function Members({users}) {
    const columns = [
        "first_name",
        "last_name",
        "address",
        "email",
        "action"
    ];

    const rows = useMemo(() => {
        return users.map((user) => ({
            id : user.id,
            first_name : user.first_name,
            last_name : user.last_name,
            address : user.address ?? '----',
            email : user.email,
        }))
    },[users]);


    return (

        <AdminLayout>
            <Head title="Members"/>

            <div className="mb-4 flex justify-between">
                <h1 className="text-xl font-semibold">Members</h1>
                <CreateLink routeName="create_user" label='Create Member'/>
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
                                    href={route("edit_user", row.id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-blue-700"
                                >
                                    edit
                                </Link>

                                <Link
                                    href={route("view_user", row.id)}
                                    className="bg-green-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-green-700"
                                >
                                    view
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
