import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";

export default function Dashboard({ auth, jenis_obats }) {
    console.log(jenis_obats);
    const datas = jenis_obats.map((pmm) => ({
        id: pmm.id,
        jenis_obat: pmm.jenis_obat,
        action: (
            <div className="flex items-center justify-center gap-2">
                <Link href={`jenisobat/edit/${pmm.id}`}>Edit</Link>
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
            name: "Jenis Obat",
            selector: (row) => row.jenis_obat,
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
            jenis_obat : "",
        });

    const storeJenisObat = (e) => {
        e.preventDefault();
        post(route("jenisObat")),
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
                    Jenis Obat
                </h2>
            }
        >
            <Head title="Jenis Obat" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={storeJenisObat}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                            Tambah Jenis Obat
                        </h2>
                        <br />
                        <InputLabel
                            htmlFor="jenis_obat"
                            value="Jenis Obat"
                        />
                        <TextInput
                            id="jenis_obat"
                            name="jenis_obat"
                            value={data.jenis_obat}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("jenis_obat", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.jenis_obat}
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
