import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";

export default function Database({ auth, apoteks }) {
    const {flash} = usePage().props;
    console.log(apoteks);
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Database
                </h2>
            }
        >
            <Head title="Database" />
            <div className="container mx-auto px-4 py-6">
            {flash.message && (
                <div className="py-2 px-4 rounded-md bg-green-300 text-center">
                    {flash.message}
                </div>
                )}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ID Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nama Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Jenis Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Stok Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Harga</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {apoteks.map((obat) => (
                                <tr key={obat.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-4">{obat.id}</td>
                                    <td className="py-3 px-4">{obat.nama_obat}</td>
                                    <td className="py-3 px-4">{obat.jenis_obat}</td>
                                    <td className="py-3 px-4">{obat.stok_obat}</td>
                                    <td className="py-3 px-4">{obat.harga}</td>
                                    <td className="py-3 px-4">
                                        <Link href={`database/edit/${obat.id}`}>Edit
                                        </Link> | <div className="cursor-pointer" >
                                            Delete
                                            </div>
                                            </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
