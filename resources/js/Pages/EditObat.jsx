import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Edit({ auth, apoteks }) {

    const { data, setData, post, processing, errors, reset, onSuccess} = useForm({
        nama_obat: apoteks.nama_obat,
        jenis_obat: apoteks.jenis_obat,
        stok_obat: apoteks.stok_obat,
        harga: apoteks.harga,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        router.post(`/database/edit/${apoteks.id}`, {
            _method: "patch",
            nama_obat: data.nama_obat,
            jenis_obat: data.jenis_obat,
            stok_obat: data.stok_obat,
            harga: data.harga
        })

    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit : {apoteks.nama_obat}
                </h2>
            }
        >
            <Head title="Edit" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={handleUpdate}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Obat {}</h2>
                        <br />
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
                            value={data.jenis_obat}
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

                        <PrimaryButton className="ms-4 bg-green-500" disabled={processing}>
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
