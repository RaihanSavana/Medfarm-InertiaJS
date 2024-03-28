import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";

export default function Database({ auth, apoteks }) {
    const handleShowConfirmation = () => {};
    
    const { flash } = usePage().props;

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Nama Obat",
            selector: (row) => row.nama_obat,
            sortable: true,
        },
        {
            name: "Jenis Obat",
            selector: (row) => row.jenis_obat,
            sortable: true,
        },
        {
            name: "Harga",
            selector: (row) => row.harga,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];


    const data = apoteks.map((obat) => ({
        id: obat.id,
        nama_obat: obat.nama_obat,
        jenis_obat: obat.jenis_obat,
        harga: obat.harga,
        action: (
            <div className="flex items-center justify-center gap-2">
                <Link href={`database/edit/${obat.id}`}>Edit</Link>
                <div
                    className="cursor-pointer"
                    onClick={handleShowConfirmation}
                    >
                </div>
            </div>
        ),
    }));
    const [records, setRecords] = useState(data);

    function handleFilter(event) {
        const newData = data.filter((row) => {
            return (
                row.nama_obat
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase()) ||
                row.jenis_obat
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
            );
        });
        setRecords(newData);
    }

    {
        flash.message &&
            toast.success(flash.message, {
                duration: 4000,
            });
    }

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
                <div className="text-end mt-2">
                    <input
                        type="text"
                        className="py-1 px-2 border rounded-sm"
                        placeholder="Search..."
                        onChange={handleFilter}
                    />
                </div>
                <br />

                <div className="overflow-x-auto">

                    <DataTable
                        columns={columns}
                        data={records}
                        pagination
                        highlightOnHover
                        striped
                        responsive
                        fixedHeader
                    />

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
