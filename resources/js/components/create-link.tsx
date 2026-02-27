import { Link } from "@inertiajs/react";

export default function CreateLink({routeName,label,params ={}}){
    return (
        <>
            <Link
                className="py-1 px-3 bg-green-500 text-md rounded-xs text-white"
                href={route(routeName,params)}
            >
                {label}
            </Link>
        </>
    );
}