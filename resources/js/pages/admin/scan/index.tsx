import { Head } from "@inertiajs/react";
import axios from "axios";
import { useState } from "react";
import AdminLayout from "@/layouts/admin-layout";


export default function Scan() {

    const [file,setFile] = useState<File | null>(null);
    const [preview,setPreview] = useState<string | null>(null);
    const [ocrText,setOcrText] = useState("");

    const handleFileChange = (e:any) => {

        const selected = e.target.files[0];

        if(!selected) return;

        setFile(selected);
        setPreview(URL.createObjectURL(selected));
    }

    const startScan = async () => {

        if(!file) return;

        const formData = new FormData();
        formData.append("file",file);

        const res = await axios.post("/scan",formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });

        setOcrText(res.data.text);
    }

    const reset = () => {
        setFile(null);
        setPreview(null);
        setOcrText("");
    }

    return (
        <AdminLayout>
            <Head title="Scan Documents"/>

            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-xl font-semibold">Scan Document</h1>

                <div className="flex gap-2">
                    <button
                        onClick={startScan}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                        Start Scan
                    </button>

                    <button
                        onClick={reset}
                        className="px-4 py-2 bg-gray-200 rounded-md"
                    >
                        Reset
                    </button>

                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

                {/* LEFT SIDE */}
                <div className="bg-white p-6 rounded-lg shadow">

                    <h2 className="text-lg font-semibold mb-4">
                        Document Preview
                    </h2>

                    <input
                        type="file"
                        onChange={handleFileChange}
                    />

                    <div className="h-[400px] border mt-4 flex items-center justify-center">

                        {preview ? (
                            <img
                                src={preview}
                                className="max-h-[380px]"
                            />
                        ) : (
                            <p className="text-gray-400">
                                Document preview will appear here
                            </p>
                        )}

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="bg-white p-6 rounded-lg shadow">

                    <h2 className="text-lg font-semibold mb-4">
                        OCR Text Result
                    </h2>

                    <textarea
                        value={ocrText}
                        onChange={(e)=>setOcrText(e.target.value)}
                        className="w-full h-[400px] border rounded-md p-3 text-sm"
                    />

                </div>

            </div>

        </AdminLayout>
    );
}