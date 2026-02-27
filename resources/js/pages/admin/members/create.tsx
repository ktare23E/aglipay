import { Head,useForm } from '@inertiajs/react';
import { sileo, Toaster } from "sileo";
import AdminLayout from '@/layouts/admin-layout';
import BackLink from '@/components/back-link';
import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export default function CreateMember() {
    const {data,setData,post,processing, errors } = useForm({
        first_name : '',
        last_name : '',
        address : '',
        email : '',
        password : '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('store_member'), {
            onSuccess: (page) => {
                // Show success alert
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Member Created',
                //     text: 'The member has been successfully created!',
                // }).then(() => {
                //     setTimeout(()=> {
                //         location.href = '/documents'
                //     },500)


                sileo.success({
                    title: "Member Created",
                    fill: "black",
                    styles: {
                        title: "text-white!",
                        description: "text-white/75!",
                    },
                });
                setTimeout(() => {
                    location.href = '/members';
                }, 1500);

                // });

                // Optionally reset the form
                // reset();
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
            <Head title="Create Member" />
            <Toaster position="top-right" theme='dark' />

            <BackLink routeName="members" />
            <div className="mb-4 text-center">
                <h1 className="text-xl font-semibold">Create Members</h1>
            </div>
            <div className="hover:shadow-4xl mx-auto max-w-[90%] cursor-pointer rounded-xl bg-white p-8 shadow-xl transition-all">
                <form onSubmit={submit} className="flex flex-col gap-6">
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="first_name">First Name</Label>
                            <Input
                                id="first_name"
                                type="text"
                                value={data.first_name}
                                onChange={(e) => setData('first_name',e.target.value)}
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="first_name"
                                name="first_name"
                                placeholder="First name"
                            />
                            <InputError
                                message={errors.first_name}
                                className="mt-2"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="last_name">Last Name</Label>
                            <Input
                                id="last_name"
                                type="text"
                                value={data.last_name}
                                onChange={(e) => setData('last_name',e.target.value)}
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="last_name"
                                name="last_name"
                                placeholder="Last name"
                            />
                            <InputError
                                message={errors.last_name}
                                className="mt-2"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email',e.target.value)}
                                required
                                tabIndex={3}
                                autoComplete="email"
                                name="email"
                                placeholder="email@example.com"
                            />
                            <InputError
                            message={errors.email}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) => setData('password',e.target.value)}
                                required
                                tabIndex={4}
                                autoComplete="new-password"
                                name="password"
                                placeholder="Password"
                            />
                            <InputError
                                message={errors.password}
                            />
                        </div>

                        <Button disabled={processing}>
                            {processing && <Spinner />}
                            Create member
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
