import { Head } from "@inertiajs/react";

import AdminLayout from "@/layouts/admin-layout";
import CreateLink from "@/components/create-link";


export default function Scan() {



    return (

        <AdminLayout>
            <Head title="Scan Documents"/>

            <div className="mb-4 flex justify-between">
                <h1 className="text-xl font-semibold">Scan Document</h1>
                {/* <CreateLink routeName="create_document_type" label='Create Document Type'/> */}
            </div>
            <div className="bg-white w-full p-8 rounded-sm">
                Scan Documents Now
            </div>

        </AdminLayout>
    );
}
