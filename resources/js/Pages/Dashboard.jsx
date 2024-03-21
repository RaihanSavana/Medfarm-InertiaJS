import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

// const columns = [
//     {
//         name: "Title",
//         selector: (row) => row.title,
//     },
//     {
//         name: "Year",
//         selector: (row) => row.year,
//     },
// ];

// const data = [
//     {
//         id: 1,
//         title: "Beetlejuice",
//         year: "1988",
//     },
//     {
//         id: 2,
//         title: "Ghostbusters",
//         year: "1984",
//     },
// ];

export default function Dashboard({ auth }) {
    const { data, setData, post, processing, errors} = useForm({
        id_obat: 'idObat',
        nama_obat: "",
        jenis_obat: "",
        stok_obat: "",
        harga: "",
    });

    const storeObat = (e) => {
        e.preventDefault();

        post(route("dashboard"));
        setIdObat(idObat + 1);
    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <form onSubmit={storeObat}>
                    <div>
                        <InputLabel htmlFor="nama_obat" value="Nama_obat" />

                        <TextInput
                            id="nama_obat"
                            name="nama_obat"
                            value={data.nama_obat}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("nama_obat", e.target.value)}
                            required
                        />

                        <InputError message={errors.nama_obat} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="jenis_obat" value="Jenis_obat" />

                        <TextInput
                            id="jenis_obat"
                            name="jenis_obat"
                            value={data.email}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("jenis_obat", e.target.value)}
                            required
                        />

                        <InputError message={errors.jenis_obat} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="stok_obat" value="Stok_obat" />

                        <TextInput
                            id="stok_obat"
                            name="stok_obat"
                            type="number"
                            value={data.stok_obat}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("stok_obat", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.stok_obat}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="harga"
                            value="Harga"
                        />

                        <TextInput
                            id="harga"
                            name="harga"
                            type="number"
                            value={data.harga}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("harga", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.harga}
                            className="mt-2"
                        />
                    </div>

                    <div className="flex items-center justify-end mt-4">

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Tambah
                        </PrimaryButton>
                    </div>
                </form>
            </div>
            {/* <div className="py-12">
                <DataTable columns={columns} data={data} />
            </div> */}
        </AuthenticatedLayout>
    );
}
