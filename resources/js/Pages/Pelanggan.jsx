import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";

export default function Dashboard({ auth, pelanggans }) {
    console.log(pelanggans);
    const datas = pelanggans.map((pmm) => ({
        id: pmm.id,
        nama: pmm.nama,
        action: (
            <div className="flex items-center justify-center gap-2">
                <Link href={`pelanggan/edit/${pmm.id}`}>Edit</Link>
            </div>
        ),
    }));

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Nama Pembeli",
            selector: (row) => row.nama,
            sortable: true,
        },
        {
            name: "Action",
            selector: (row) => row.action,
        },
    ];

    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset, onSuccess } =
        useForm({
            nama: "",
        });

    const storePemasok = (e) => {
        e.preventDefault();
        post(route("pelanggan")),
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
                    Pelanggan
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={storePemasok}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Tambah Pelanggan
                        </h2>
                        <br />
                        <InputLabel
                            htmlFor="nama"
                            value="Nama Pelanggan"
                        />
                        <TextInput
                            id="nama"
                            name="nama"
                            value={data.nama}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("nama", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.nama}
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
