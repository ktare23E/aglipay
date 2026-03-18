import { Head } from "@inertiajs/react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";


import { Bar, Doughnut } from "react-chartjs-2";
import AdminLayout from "@/layouts/admin-layout";




// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend
);

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function Dashboard() {

    // SAMPLE DATA (replace later with props)
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Documents Processed",
                data: [120, 190, 300, 250, 220, 310],
                backgroundColor: "#3B82F6",
            },
        ],
    };

    const doughnutData = {
        labels: ["Wedding Certificate", "Death Certificate", "Baptismal"],
        datasets: [
            {
                data: [300, 150, 100],
                backgroundColor: [
                    "#3B82F6",
                    "#10B981",
                    "#F59E0B",
                ],
            },
        ],
    };

    return (
        <AdminLayout>
            <Head title="Dashboard" />

            {/* KPI CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Total Documents</p>
                    <h2 className="text-2xl font-bold">1,240</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Processed Today</p>
                    <h2 className="text-2xl font-bold">85</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Document Types</p>
                    <h2 className="text-2xl font-bold">12</h2>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <p className="text-gray-500 text-sm">Members</p>
                    <h2 className="text-2xl font-bold">320</h2>
                </div>
            </div>

            {/* CHARTS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

            {/* BAR CHART */}
            <div className="bg-white p-6 rounded-xl shadow h-[350px] flex flex-col">
                <h3 className="text-lg font-semibold mb-4">
                    Documents Overview
                </h3>

                <div className="flex-1 relative">
                    <Bar data={barData} options={chartOptions} />
                </div>
            </div>

            {/* DOUGHNUT CHART */}
            <div className="bg-white p-6 rounded-xl shadow h-[350px] flex flex-col">
                <h3 className="text-lg font-semibold mb-4">
                    Document Types
                </h3>
                <div className="flex-1 relative flex items-center justify-center">
                    <Doughnut data={doughnutData} options={chartOptions} />
                </div>
            </div>

            </div>

            {/* RECENT ACTIVITY */}
            <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-4">
                    Recent OCR Activity
                </h3>

                <div className="space-y-3">
                    {[1,2,3].map(i => (
                        <div
                            key={i}
                            className="flex justify-between border-b pb-2 text-sm"
                        >
                            <span>Document_{i}.pdf</span>
                            <span className="text-green-600">Processed</span>
                        </div>
                    ))}
                </div>
            </div>

        </AdminLayout>
    );
}