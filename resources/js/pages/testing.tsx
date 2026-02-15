import { useForm, usePage } from '@inertiajs/react';

export default function Example() {
    const { data, setData, post, processing, errors,reset } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        post('/submit', {
            onSuccess: () => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Form submitted',
                    icon: 'success',
                });
                reset()
            },
        });

    };

    return (
        <div>
            <form onSubmit={submit} className="max-w-md space-y-3">
                <input
                    type="text"
                    placeholder="Name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    className="w-full border px-2 py-1"
                />
                {errors.name && <p className="text-red-500">{errors.name}</p>}


                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    className="w-full border px-2 py-1"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}


                <input
                    type="password"
                    placeholder="Password"
                    value={data.password}
                    onChange={(e) => setData('password', e.target.value)}
                    className="w-full border px-2 py-1"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded bg-black px-3 py-1 text-white"
                >
                    {processing ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}
