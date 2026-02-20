import AdminLayout from "@/layouts/admin-layout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AdminLayout>
            <Head title="Dashboard"/>

            <div className="flex flex-col lg:flex-row gap-4 mb-6">
                <div className="flex-1 bg-indigo-100 border rounded-xl p-6">
                    <h2 className="text-4xl text-blue-900">
                        Welcome <br />
                        <strong>Dash</strong>
                    </h2>
                    <span className="inline-block mt-8 px-8 py-2 rounded-full text-white bg-indigo-800">
                        01:51
                    </span>
                </div>

                <div className="flex-1 bg-blue-100 border rounded-xl p-6">
                    <h2 className="text-4xl text-blue-900">
                        Inbox <br />
                        <strong>23</strong>
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(n => (
                    <div
                        key={n}
                        className="bg-white rounded-xl shadow p-6 h-64"
                    >
                        Stats Card {n}
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
}