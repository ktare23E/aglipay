import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import {usePage} from "@inertiajs/react";
import { router } from "@inertiajs/react";

type AdminLayoutProps = {
    children: React.ReactNode;
};

export default function AdminLayout({children}: AdminLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { url } = usePage();

    const [active, setActive] = useState("dashboard");


    const linkClass = (path: string) =>
        `flex items-center gap-4 py-2 px-3 rounded-sm transition text-sm hover:translate-x-1
        ${
            url.startsWith(path)
                ? "bg-blue-400 text-white"
                : "text-gray-600 hover:text-indigo-800"
        }`;



    const toggleMobileMenu = () => {
        setSidebarOpen(prev => !prev);
    };

    // Lock body scroll when sidebar is open (mobile)
    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? "hidden" : "";
    }, [sidebarOpen]);

    // Auto-close sidebar on large screens
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Notification pulse animation
    useEffect(() => {
        const interval = setInterval(() => {
            const el = document.getElementById("notification-icon");
            if (!el) return;

            el.classList.add("scale-110");
            setTimeout(() => el.classList.remove("scale-110"), 200);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const logout = () =>{
        router.post('logout');
    }

    return (
        <div className="bg-indigo-50 min-h-screen overflow-x-hidden">
            {/* Overlay */}
            <div
                onClick={toggleMobileMenu}
                className={`fixed inset-0 bg-indigo-900/50 z-40 transition-opacity duration-300 ${
                    sidebarOpen ? "opacity-100" : "hidden opacity-0"
                }`}
            />

            {/* Header */}
            <header className="fixed w-full bg-white text-indigo-800 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-16">
                    <button
                        onClick={toggleMobileMenu}
                        className="p-2 lg:hidden"
                    >
                        <span className="material-icons-outlined text-2xl">
                            menu
                        </span>
                    </button>

                    <div className="text-xl font-bold text-blue-900">
                        Admin<span className="text-indigo-800">Panel</span>
                    </div>


                </div>
            </header>

            <div className="pt-16 max-w-8xl mx-auto flex">
                {/* Sidebar */}
                <aside
                    className={`fixed lg:static w-[240px] bg-indigo-50 h-[calc(100vh-4rem)] lg:h-auto z-45 overflow-y-auto p-4 transition-transform duration-300 ${
                        sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0`}
                >
                    <div className="bg-white rounded-xl shadow-lg mb-6 p-4">
                        <Link
                            href="/dashboard"
                            className={linkClass("/dashboard")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>
                            Dashboard
                        </Link>
                        <Link
                            href="/documents"
                            className={linkClass("/documents")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg>

                            Documents
                        </Link>
                        <Link
                            href="/members"
                            className={linkClass("/members")}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>


                            Members
                        </Link>


                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-4">
                        <button
                            onClick={logout}
                            className="flex gap-4 item-center cursor-pointer text-red-400 hover:text-red-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                            Logout
                        </button>
                    </div>
                </aside>

                {/* Main */}
                <main className="flex-1 p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}