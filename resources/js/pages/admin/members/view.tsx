import { Head } from '@inertiajs/react';
import BackLink from '@/components/back-link';
import AdminLayout from '@/layouts/admin-layout';

type User = {
    id: number
    first_name: string
    last_name: string
    email: string
}

type ViewMemberProps = {
    user: User
}

export default function ViewMember({ user }: ViewMemberProps) {

    return (
        <AdminLayout>
            <Head title="View Member" />

            <BackLink routeName="members" />

            <div className="mx-auto max-w-5xl">

                {/* Member Details */}
                <div className="my-6">
                    <h1 className="text-xl font-semibold mb-4">
                        {user.first_name} {user.last_name} Details
                    </h1>

                    <div className="bg-white shadow-lg rounded-xl p-6 border">

                        <div className="grid grid-cols-2 gap-6">

                            <div>
                                <p className="text-sm text-gray-500">First Name</p>
                                <p className="font-medium">{user.first_name}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Last Name</p>
                                <p className="font-medium">{user.last_name}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">{user.email}</p>
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">Member ID</p>
                                <p className="font-medium">{user.id}</p>
                            </div>

                        </div>

                    </div>
                </div>


                {/* Member Documents */}
                <div className="mt-8">

                    <h1 className="text-xl font-semibold mb-4">
                        {user.first_name} {user.last_name} Documents
                    </h1>

                    <div className="bg-white shadow-lg rounded-xl border overflow-hidden">

                        <table className="w-full text-left">

                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th className="p-4 text-sm font-semibold">Document Name</th>
                                    <th className="p-4 text-sm font-semibold">Type</th>
                                    <th className="p-4 text-sm font-semibold">Uploaded At</th>
                                    <th className="p-4 text-sm font-semibold">Action</th>
                                </tr>
                            </thead>

                            <tbody className='text-sm'>

                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4">Barangay Clearance</td>
                                    <td className="p-4">PDF</td>
                                    <td className="p-4">March 5, 2026</td>
                                    <td className="p-4">
                                        <button className="text-blue-600 hover:underline">
                                            View
                                        </button>
                                    </td>
                                </tr>

                                <tr className="border-b hover:bg-gray-50">
                                    <td className="p-4">Valid ID</td>
                                    <td className="p-4">Image</td>
                                    <td className="p-4">March 5, 2026</td>
                                    <td className="p-4">
                                        <button className="text-blue-600 hover:underline">
                                            View
                                        </button>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50">
                                    <td className="p-4">Proof of Address</td>
                                    <td className="p-4">PDF</td>
                                    <td className="p-4">March 4, 2026</td>
                                    <td className="p-4">
                                        <button className="text-blue-600 hover:underline">
                                            View
                                        </button>
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}