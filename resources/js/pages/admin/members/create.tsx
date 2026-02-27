import { Head } from "@inertiajs/react";
import AdminLayout from "@/layouts/admin-layout";
import BackLink from "@/components/back-link";



export default function CreateMember() {

    return (

        <AdminLayout>
            <Head title="Documents"/>

            <BackLink routeName="documents"/>
            <div className="mb-4 text-center">
                <h1 className="text-xl font-semibold">Create Members</h1>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-4xl cursor-pointer">

            </div>
        </AdminLayout>
    );
}
