import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import toast from "react-hot-toast";

export default function Dashboard({ auth,  }) {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset, onSuccess } =
        useForm({
            nama: "",
            image: "",
            jenis: "",
            deskripsi: "",
            indikasi_umum: "",
            komposisi: "",
            dosis: "",
            aturan_pakai: "",
            golongan_produk: "",
            kemasan: "",
            no_registrasi: "",
        });

    const storeObat = (e) => {
        e.preventDefault();
        post(route("obatindex")),
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
                            Tambah Obat Pada Tampilan Penyakit
                        </h2>
                        <br />
                        <InputLabel htmlFor="nama" value="Nama" />
                        <TextInput
                            id="nama"
                            name="nama"
                            value={data.nama}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("nama", e.target.value )}
                            required
                        />

                        <InputError message={errors.nama} className="mt-2" />
                    </div>

                    <InputLabel htmlFor="image" value="Image" />
                    <input
                        id="image"
                        name="image"
                        type="file"
                        className="mt-1 block w-full text-black"
                        onChange={(e) => setData("image", e.target.files[0])}
                        required
                    />

                    <InputError message={errors.image} className="mt-2" />

                    <div className="mt-4">
                        <InputLabel htmlFor="jenis" value="Jenis" />

                        <select
                            id="jenis"
                            name="jenis"
                            value={data.jenis}
                            onChange={(e) => setData("jenis", e.target.value)}
                            className="mt-1 block w-full text-black"
                            required
                        >
                            <option value="">Pilih Jenis Obat</option>
                            <option value="Batuk dan flu">Batuk & Flu</option>
                            <option value="Diare">Diare</option>
                            <option value="Demam">Demam</option>
                        </select>

                        <InputError message={errors.jenis} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="deskripsi" value="Deskripsi" />
                        <TextInput
                            id="deskripsi"
                            name="deskripsi"
                            value={data.deskripsi}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("deskripsi", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.deskripsi}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="indikasi_umum"
                            value="Indikasi Umum"
                        />
                        <TextInput
                            id="indikasi_umum"
                            name="indikasi_umum"
                            value={data.indikasi_umum}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("indikasi_umum", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.indikasi_umum}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="komposisi" value="Komposisi" />
                        <TextInput
                            id="komposisi"
                            name="komposisi"
                            value={data.komposisi}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("komposisi", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.komposisi}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="dosis" value="Dosis" />
                        <TextInput
                            id="dosis"
                            name="dosis"
                            value={data.dosis}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("dosis", e.target.value)}
                            required
                        />

                        <InputError message={errors.dosis} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="aturan_pakai"
                            value="Aturan Pakai"
                        />
                        <TextInput
                            id="aturan_pakai"
                            name="aturan_pakai"
                            value={data.aturan_pakai}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("aturan_pakai", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.aturan_pakai}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="golongan_produk"
                            value="Golongan Produk"
                        />
                        <TextInput
                            id="golongan_produk"
                            name="golongan_produk"
                            value={data.golongan_produk}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("golongan_produk", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.golongan_produk}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <InputLabel htmlFor="kemasan" value="Kemasan" />
                        <TextInput
                            id="kemasan"
                            name="kemasan"
                            value={data.kemasan}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("kemasan", e.target.value)}
                            required
                        />

                        <InputError message={errors.kemasan} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel
                            htmlFor="no_registrasi"
                            value="No Registrasi"
                        />
                        <TextInput
                            id="no_registrasi"
                            name="no_registrasi"
                            value={data.no_registrasi}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("no_registrasi", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.no_registrasi}
                            className="mt-2"
                        />
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
