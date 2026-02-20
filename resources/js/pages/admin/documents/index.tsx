import AdminLayout from "@/layouts/admin-layout";
import { Head } from "@inertiajs/react";

export default function Documents() {
    return (

        <AdminLayout>
            <Head title="Documents"/>

            <h1>Documents</h1>
            <div className="p-8 bg-white rounded-xl shadow-xl transition-all hover:shadow-4xl cursor-pointer">

            </div>
        </AdminLayout>
    );
}