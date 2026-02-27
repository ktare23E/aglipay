import { Link } from "@inertiajs/react";

export default function BackLink({routeName,param={}}){
    return (
        <>
            <Link
                href={route(routeName,param)}
                className="flex gap-1 items-center text-blue-500 cursor-pointer"
            >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                    back
            </Link>
        </>
    );
}