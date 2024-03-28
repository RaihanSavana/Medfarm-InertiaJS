import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";

export default function Dashboard({ auth, pemasoks }) {
    console.log(pemasoks);
    const datas = pemasoks.map((pmm) => ({
        id: pmm.id,
        nama_pemasok: pmm.nama_pemasok,
        action: (
            <div className="flex items-center justify-center gap-2">
                <Link href={`pemasok/edit/${pmm.id}`}>Edit</Link>
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
            name: "Nama Pemasok",
            selector: (row) => row.nama_pemasok,
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
            nama_pemasok: "",
        });

    const storePemasok = (e) => {
        e.preventDefault();
        post(route("pemasok")),
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
                    Pemasok
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={storePemasok}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Tambah Pemasok
                        </h2>
                        <br />
                        <InputLabel
                            htmlFor="nama_pemasok"
                            value="Nama_pemasok"
                        />
                        <TextInput
                            id="nama_pemasok"
                            name="nama_pemasok"
                            value={data.nama_pemasok}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("nama_pemasok", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.nama_pemasok}
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
