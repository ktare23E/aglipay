import { Head,useForm } from '@inertiajs/react';
import { sileo, Toaster } from "sileo";
import AdminLayout from '@/layouts/admin-layout';
import BackLink from '@/components/back-link';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export default function EditDocument({document_type}) {

    const {data,setData,post,processing, errors } = useForm({
        id : document_type.id,
        name : document_type.name,
        status : document_type.status,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('update_document_type'), {
            onSuccess: (page) => {

                sileo.success({
                    title: "Member Updated",
                    fill: "black",
                    styles: {
                        title: "text-white!",
                        description: "text-white/75!",
                    },
                });
                setTimeout(() => {
                    location.href = '/documents';
                }, 1500);
            },
            onError: (errors) => {
                // Show error alert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please check your input.',
                });
            },
        });
    }


    return (
        <AdminLayout>
            <Head title="Edit Document Type" />
            <Toaster position="top-right" theme='dark' />

            <BackLink routeName="documents" />
            <div className="mb-4 text-center">
                <h1 className="text-xl font-semibold">Edit Document Type</h1>
            </div>
            <div className="hover:shadow-4xl mx-auto max-w-[90%] cursor-pointer rounded-xl bg-white p-8 shadow-xl transition-all">
                <form onSubmit={submit} className="flex flex-col gap-6">
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="status">Status</Label>

                            <select
                                id="status"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                <option value="">Select Document Type</option>
                                <option value="'Wedding Certifictae">Wedding Certificate</option>
                                <option value="Birth Certificate">Birth Certificate</option>
                                <option value="Death Certificate">Death Certificate</option>
                            </select>

                            <InputError message={errors.status} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="status">Status</Label>

                            <select
                                id="status"
                                value={data.status}
                                onChange={(e) => setData('status', e.target.value)}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                            >
                                <option value="">Select status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>

                            <InputError message={errors.status} />
                        </div>
                        <Button disabled={processing}>
                            {processing && <Spinner />}
                            Update document type
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
