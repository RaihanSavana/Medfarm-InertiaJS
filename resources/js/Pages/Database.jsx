import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, apoteks }) {
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
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">ID Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Nama Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Jenis Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Stok Obat</th>
                                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Harga</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {apoteks.map((obat) => (
                                <tr key={obat.id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-4">{obat.id_obat}</td>
                                    <td className="py-3 px-4">{obat.nama_obat}</td>
                                    <td className="py-3 px-4">{obat.jenis_obat}</td>
                                    <td className="py-3 px-4">{obat.stok_obat}</td>
                                    <td className="py-3 px-4">{obat.harga}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
