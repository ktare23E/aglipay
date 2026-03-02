import { Link } from "@inertiajs/react";

type EditLinkProps = {
    routeName : string,
    label : string,
    params?: Record<string,any>,
}

export default function EditLink({
    routeName,
    label,
    params = {}
}:EditLinkProps){
    return (
        <>
            <Link
                className="bg-blue-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-blue-700"
                href={route(routeName,params)}
            >
                {label}
            </Link>
        </>
    );
}