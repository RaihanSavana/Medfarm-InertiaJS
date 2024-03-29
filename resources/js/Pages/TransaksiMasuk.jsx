import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";

export default function Dashboard({ auth, tmasuks, apoteks, pemasoks }) {
    console.log(tmasuks);
    console.log(pemasoks);
    console.log(apoteks);
    const pemasuk = pemasoks.map((pemasuk) => ({
        id: pemasuk.id,
        nama: pemasuk.nama_pemasok,
    }));
    const obat = apoteks.map((obat) => ({
        id: obat.id,
        nama: obat.nama_obat,
        jenis : obat.jenis_obat_id,
        stok : obat.stok,
        harga : obat.harga,
    }));

    const datas = tmasuks.map((pmm) => ({
        id: pmm.id,
        pemasok_id:
            pemasuk.find((jenis) => jenis.id === pmm.pemasok_id)?.nama ||
            "Tidak Diketahui",
        apotek_id:
            obat.find((jenis) => jenis.id === pmm.apotek_id)?.nama ||
            "Tidak Diketahui",
        jumlah_masuk: pmm.jumlah_masuk,
        harga: pmm.harga,
        harga_total: pmm.harga_total,
    }));

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Nama Pemasok",
            selector: (row) => row.pemasok_id,
            sortable: true,
        },
        {
            name: "Nama Obat",
            selector: (row) => row.apotek_id,
            sortable: true,
        },
        {
            name: "Jumlah Masuk",
            selector: (row) => row.jumlah_masuk,
            sortable: true,
        },
        {
            name: "Harga",
            selector: (row) => row.harga,
            sortable: true,
        },
        {
            name: "Harga Total",
            selector: (row) => row.harga_total,
            sortable: true,
        },
    ];

    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset, onSuccess } =
        useForm({
            pemasok_id: "",
            apotek_id: "",
            jumlah_masuk: "",
            harga: "",
            harga_total: "",
        });

    const storePemasok = (e) => {
        e.preventDefault();
        post(route("tmasuk")),
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
                    Transaksi Masuk
                </h2>
            }
        >
            <Head title="Transaksi Masuk" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={storePemasok}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Catat Data Masuk
                        </h2>
                        <br />
                        <InputLabel
                            htmlFor="nama_pemasok"
                            value="Nama Pemasok"
                        />

                        <select
                            id="nama_pemasok"
                            name="nama_pemasok"
                            value={data.pemasok_id}
                            onChange={
                                (e) => setData("pemasok_id", e.target.value) // Memperbarui data.pemasok_id saat opsi dipilih
                            }
                            className="mt-1 block w-full text-black"
                            required
                        >
                            <option value="">Pilih Pemasok</option>
                            {pemasoks.map((pemasok) => (
                                <option
                                    key={pemasok.id}
                                    value={pemasok.id} // Menggunakan id sebagai value untuk opsi
                                >
                                    {pemasok.nama_pemasok}
                                </option>
                            ))}
                        </select>

                        <InputError
                            message={errors.pemasok_id}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="apotek_id" value="Nama Obat" />

                        <select
                            id="apotek_id"
                            name="apotek_id"
                            value={data.apotek_id}
                            onChange={
                                (e) => setData("apotek_id", e.target.value) // Memperbarui data.apotek_id saat opsi dipilih
                            }
                            className="mt-1 block w-full text-black"
                            required
                        >
                            <option value="">Pilih Jenis Obat</option>
                            {apoteks.map((obat) => (
                                <option
                                    key={obat.id}
                                    value={obat.id} // Menggunakan id sebagai value untuk opsi
                                >
                                    {obat.nama_obat}
                                </option>
                            ))}
                        </select>

                        <InputError
                            message={errors.apotek_id}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="jumlah_masuk"
                            value="Jumlah Masuk"
                        />

                        <TextInput
                            id="jumlah_masuk"
                            name="jumlah_masuk"
                            type="number"
                            value={data.jumlah_masuk}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("jumlah_masuk", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.jumlah_masuk}
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

                    <div className="mt-4">
                        <InputLabel htmlFor="harga_total" value="Harga Total" />

                        <TextInput
                            id="harga_total"
                            name="harga_total"
                            type="number"
                            value={data.harga_total}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("harga_total", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.harga_total}
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
                <br />
                <div className="overflow-x-auto">
                    <DataTable
                        columns={columns}
                        data={datas}
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
