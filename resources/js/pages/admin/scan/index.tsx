import { Head } from "@inertiajs/react";
import AdminLayout from "@/layouts/admin-layout";

export default function Scan() {

    return (
        <AdminLayout>
            <Head title="Scan Documents"/>

            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Scan Document</h1>

                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Start Scan
                    </button>

                    <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
                        Reset
                    </button>

                    <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Save Result
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

                {/* LEFT SIDE - DOCUMENT PREVIEW */}
                <div className="bg-white p-6 rounded-lg shadow">

                    <h2 className="text-lg font-semibold mb-4">
                        Document Preview
                    </h2>

                    {/* Upload */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
                        <p className="text-gray-500 mb-2">
                            Upload or Drag Document
                        </p>

                        <input
                            type="file"
                            className="block mx-auto text-sm"
                        />
                    </div>

                    {/* Preview Area */}
                    <div className="h-[400px] border rounded-md flex items-center justify-center bg-gray-50">
                        <p className="text-gray-400">
                            Document preview will appear here
                        </p>
                    </div>

                </div>


                {/* RIGHT SIDE - OCR RESULT + ANNOTATION */}
                <div className="bg-white p-6 rounded-lg shadow">

                    <h2 className="text-lg font-semibold mb-4">
                        OCR Text Result
                    </h2>

                    {/* OCR Extracted Text */}
                    <textarea
                        className="w-full h-[200px] border rounded-md p-3 text-sm"
                        placeholder="Extracted OCR text will appear here..."
                    />

                    {/* Annotation Tools */}
                    <div className="mt-6">

                        <h3 className="text-md font-semibold mb-3">
                            Text Annotation
                        </h3>

                        <div className="flex gap-2 flex-wrap">

                            <button className="px-3 py-1 text-sm bg-yellow-200 rounded">
                                Highlight
                            </button>

                            <button className="px-3 py-1 text-sm bg-blue-200 rounded">
                                Tag Name
                            </button>

                            <button className="px-3 py-1 text-sm bg-green-200 rounded">
                                Tag Address
                            </button>

                            <button className="px-3 py-1 text-sm bg-purple-200 rounded">
                                Tag Date
                            </button>

                            <button className="px-3 py-1 text-sm bg-red-200 rounded">
                                Remove Tag
                            </button>

                        </div>

                    </div>


                    {/* Annotation Output */}
                    <div className="mt-6">

                        <h3 className="text-md font-semibold mb-3">
                            Annotation Data
                        </h3>

                        <div className="border rounded-md p-4 bg-gray-50 h-[120px] overflow-auto text-sm">
                            Annotation results will appear here...
                        </div>

                    </div>

                </div>

            </div>

        </AdminLayout>
    );
}