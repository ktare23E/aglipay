import { Link } from "@inertiajs/react";

type ViewLinkProps = {
    routeName : string,
    label : string,
    params?: Record<string,any>,
}

export default function ViewLink({
    routeName,
    label,
    params = {}
}:ViewLinkProps){
    return (
        <>
            <Link
                className="bg-green-500 text-white px-3 py-1 rounded-sm text-sm hover:bg-green-700"
                href={route(routeName,params)}
            >
                {label}
            </Link>
        </>
    );
}