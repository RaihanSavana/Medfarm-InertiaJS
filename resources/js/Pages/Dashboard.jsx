import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import toast from "react-hot-toast";

export default function Dashboard({ auth, jenis_obats }) {
    const { flash } = usePage().props;
    console.log(jenis_obats);

    const { data, setData, post, processing, errors, reset, onSuccess } =
        useForm({
            nama_obat: "",
            jenis_obat_id: "",
            stok_obat: "",
            harga: "",
        });

    const storeObat = (e) => {
        e.preventDefault();
        post(route("dashboard")),
            data,
            {
                onSuccess: reset(),
            };
    };

    {
        flash.message &&
            toast.success(flash.message, {
                duration: 4000,
            });
    }
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
                <br />
                <form onSubmit={storeObat}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Tambah Obat
                        </h2>
                        <br />
                        <InputLabel htmlFor="nama_obat" value="Nama_obat" />
                        <TextInput
                            id="nama_obat"
                            name="nama_obat"
                            value={data.nama_obat}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("nama_obat", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.nama_obat}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="jenis_obat" value="Jenis Obat" />

                        <select
                            id="jenis_obat"
                            name="jenis_obat"
                            value={data.jenis_obat_id}
                            onChange={
                                (e) => setData("jenis_obat_id", e.target.value) // Memperbarui data.jenis_obat_id saat opsi dipilih
                            }
                            className="mt-1 block w-full"
                            required
                        >
                            <option value="">Pilih Jenis Obat</option>
                            {jenis_obats.map((jenisObat) => (
                                <option
                                    key={jenisObat.id}
                                    value={jenisObat.id} // Menggunakan id sebagai value untuk opsi
                                >
                                    {jenisObat.jenis_obat}
                                </option>
                            ))}
                        </select>

                        <InputError
                            message={errors.jenis_obat_id}
                            className="mt-2"
                        />
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
                        <InputLabel htmlFor="harga" value="Harga" />

                        <TextInput
                            id="harga"
                            name="harga"
                            type="number"
                            value={data.harga}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("harga", e.target.value)}
                            required
                        />

                        <InputError message={errors.harga} className="mt-2" />
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton
                            className="ms-4 bg-green-500"
                            disabled={processing}
                        >
                            Add
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
